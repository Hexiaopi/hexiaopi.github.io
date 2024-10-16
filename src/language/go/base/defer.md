---
title: defer注意事项
date: 2023-08-27
order: 12
tag:
 - Go
 - 基础
category:
 - 编程语言
---

<!-- more -->

defer 语句能够帮助我们确保在函数结束时执行一些必要的操作，比如：**关闭文件句柄**、**释放资源**、**解锁互斥锁**等。defer 关键字只能作用函数或函数调用。

# defer注意事项

## 大多数内置函数不可以直接调用

> 大多数内置函数（除了`copy`和`recover`）的调用的返回结果都不可以舍弃，而defer延迟调用的返回结果都必须舍弃掉，所以，很多内置函数是不能被被延迟直接调用的。当然可以通过匿名函数来解决。

```go
package main

import "fmt"

func main() {
	s := []string{"a", "b", "c", "d"}
	defer fmt.Println(s) // [a x y d]
	// defer append(s[:1], "x", "y") // 编译错误
	defer func() {
		_ = append(s[:1], "x", "y")
	}()
}
```

## 执行顺序

::: warning
defer 语句的执行顺序是按照先进后出（FILO）的，即先进去 defer 语句将最后执行。
:::

```go
func DeferDemo1() {
	for i := 0; i < 5; i++ {
		defer fmt.Print(i) 
	}
}
```

::: details 执行结果
43210
:::

## 参数计算时机

::: warning
defer 语句中的函数参数会在 defer 语句被声明时进行求值，而不是在实际执行时。
:::

```go
func DeferDemo2() {
	var i = 1
	defer fmt.Println(i)
	i = 2
}
```

::: details 执行结果
1
:::

我们再看一个复杂的例子：

```go
package main

type T int

func (t T) M(n int) T {
  print(n)
  return t
}

func main() {
	var t T
	// 由于需要估值M(2)的属主实参，因此需要先计算t.M(1)。
	defer t.M(1).M(2)
	t.M(3).M(4)
}
```

::: details 执行结果
1342
:::

## 遇见异常

### 遇见panic

> 遇见panic，defer将会执行。这也是recover为什么要包含在defer中的原因。

```go
import "fmt"

func main() {
	defer fmt.Println("此行可以被执行到")
	panic("xxx")
}
```

::: details 执行结果
```text
此行可以被执行到
panic: xxx

goroutine 1 [running]:
main.main()
        D:/code/test/test/main.go:7 +0x59
exit status 2
```
:::

### 遇见os.Exit

> 主动调用os.Exit(int)退出进程时，defer将不再被执行

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	defer func() {
		fmt.Println("defer")
	}()
	fmt.Println("some thing...")
	os.Exit(1)
}
```

::: details 执行结果
```text
some thing...
exit status 1
```
:::

## 延迟函数体

### 延迟函数体未传参

```go
func DeferDemo3() {
	var i = 1
	defer func() {
		fmt.Print(i)
	}()
	i = 2
}
```

::: details 执行结果
2
:::

### 延迟函数体传参

```go
func DeferDemo4() {
	var i = 1
	defer func(i int) {
		fmt.Print(i)
	}(i)
	i = 2
}
```

::: details 执行结果
1
:::

demo3和demo4的唯一区别是执行函数体是否传参，却得到完全不同的结果。

- demo3没有传参，无法直接计算，但是可以引用
- demo4传入参数，可以直接计算

## 可能会操作并影响返回值

### 函数签名返回具名返回值

```go
func DeferDemo5() (result int) {
	i := 1
	defer func() {
		result++
	}()
	return i
}
```

::: details 执行结果
2
:::

这是由于return并非原子操作，上面函数等价于

```go
func DeferDemo5() (result int) {
  i := 1
  result = i
  result++
  return
}
```

### 函数签名返回匿名返回值

::: danger
这种情况下defer语句可以引用返回值，但不会改变返回值
:::

```go
func DeferDemo6() int {
	i := 1
	defer func() {
		i++
	}()
	return i
}
```

::: details 执行结果

```go
func ExampleDeferDemo6() {
	fmt.Println(DeferDemo6())
	// Output:
	// 1
}
```

这里等价于返回了一个`anony`的匿名变量，如下所示：

```go
func DeferDemo6() (anony int) {
	i := 1
  anony = i
  i++
	return anony
}
```

:::

### 显示return常量也可能会影响返回值

```go
func DeferDemo7() (result int) {
	defer func() {
		result++
	}()
	return 0
}
```

::: details 执行结果

```go
func ExampleDeferDemo7() {
	fmt.Println(DeferDemo7())
	// Output:
	// 1
}
```

虽然显示返回0，但由于return不是原子操作。等价于：

```go
func DeferDemo7() (result int) {
	result = 0
	result++
	return 
}
```

:::


## 可能会造成短暂性内存泄漏

> 当需要处理大量的文件，下面函数退出之前，将有大量的文件句柄得不到释放。

```go
func writeManyFiles(files []File) error {
	for _, file := range files {
		f, err := os.Open(file.path)
		if err != nil {
			return err
		}
		defer f.Close()

		_, err = f.WriteString(file.content)
		if err != nil {
			return err
		}

		err = f.Sync()
		if err != nil {
			return err
		}
	}

	return nil
}
```

> 对上面的函数改进如下：

```go
func writeManyFiles(files []File) error {
	for _, file := range files {
		if err := func() error {
			f, err := os.Open(file.path)
			if err != nil {
				return err
			}
			defer f.Close() // 将在此循环步内执行

			_, err = f.WriteString(file.content)
			if err != nil {
				return err
			}

			return f.Sync()
		}(); err != nil {
			return err
		}
	}

	return nil
}
```