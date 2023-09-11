---
title: flag使用
date: 2023-09-05
tag:
 - Go
 - 标准库
category:
 - Go语言
---

> flag库实现命令行参数解析

## 简单用法

::: tip flag参数使用语法
-flag    // 破折号，使用默认值
--flag   // 双破折号
-flag=x  // 指定参数值
-flag x  // non-boolean flags only
:::

### 字符串类型

```go
// Example1：flag.String 返回指针类型字符串
var flagStrA = flag.String("str-a", "str-a", "flag test *string")
```

使用示例

```go
func ExampleFlagStringPointPrint() {
	flag.CommandLine.Parse([]string{"-str-a", "stra"})
	fmt.Println(*flagStrA)
	// Output:
	// stra
}
```

不过由于flag.String()返回的是指针类型的字符串，因此，也可以使用下面方式定义

```go
// Example2：如果期望定义字符串类型，可以通过init函数初始化
var flagStrB string

func init() {
	// flag.StringVar可以绑定已有的变量
	flag.StringVar(&flagStrB, "str-b", "str-b", "flag test string")
}
```

使用示例

```go
func ExampleFlagStringPrint() {
	flag.CommandLine.Parse([]string{"-str-b", "strb"})
	fmt.Println(flagStrB)
	// Output:
	// strb
}
```

### int类型

```go
// Example3：int类型变量
var flagInt = flag.Int("int", 1, "flag test *int")
```

使用示例

```go
func ExampleFlagIntPointPrint() {
	flag.CommandLine.Parse([]string{"-int", "10"})
	fmt.Println(*flagInt)
	// Output:
	// 10
}
```

### Bool类型

```go
// Example3：int类型变量
var flagInt = flag.Int("int", 1, "flag test *int")
```

::: tip bool类型可以使用以下字面量
1, 0, t, f, T, F, true, false, TRUE, FALSE, True, False
:::

使用示例

```go
func ExampleBoolPointPrint() {
	flag.CommandLine.Parse([]string{"-bool=True"})
	fmt.Println(*flagBool)
	// Output:
	// true
}
```

注意事项

#### bool类型不可使用：-flag x形式

::: warning

```go
func ExampleBoolPointNoticPrint() {
	flag.CommandLine.Parse([]string{"-bool", "false"})
	fmt.Println(*flagBool)
	// Output:
	// true
}
```

虽然显示的传入`false`，但是最终结果是`true`
:::

#### bool类型：-flag形式，认为true

::: warning

```go
func ExampleBoolPointEmptyPrint() {
	flag.CommandLine.Parse([]string{"-bool"})
	fmt.Println(*flagBool)
	// Output:
	// true
}
```

:::

### duration类型

```go
// Example5：duration类型变量
var flagDuration = flag.Duration("duration", time.Minute*1, "flag test *duration")
```

使用示例

```go
func ExampleFlagDurationPointPrint() {
	flag.CommandLine.Parse([]string{"-duration", "1m1s"})
	fmt.Println(*flagDuration)
	// Output:
	// 1m1s
}
```

## 高阶用法

flag标准库提供了基础的数据类型参数，如下：

- bool
- int
- int64
- uint
- uint64
- string
- float64
- duration

### 自定义类型

如果需要自定义类型，需要实现`flag.Value`接口

```go
type Value interface {
	String() string
	Set(string) error
}
```

```go
// Example6: 自定义类型
type URLValue struct {
	URL *url.URL
}

func (v URLValue) String() string {
	if v.URL != nil {
		return v.URL.String()
	}
	return ""
}

func (v *URLValue) Set(s string) error {
	if u, err := url.Parse(s); err != nil {
		return err
	} else {
		v.URL = u
	}
	return nil
}

var u URLValue

func init() {
	flag.Var(&u, "url", "flag test self struct")
}
```

使用示例

```go
func ExampleStructPrint() {
	flag.CommandLine.Parse([]string{"-url", "https://golang.org/pkg/flag/"})
	fmt.Println(u)
	// Output:
	// https://golang.org/pkg/flag/
}
```
