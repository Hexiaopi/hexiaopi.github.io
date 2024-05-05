---
title: recover注意事项
date: 2023-08-27
tag:
 - Go
 - 基础
category:
 - 编程语言
---

> defer结合recover通常用于捕获panic

<!-- more -->

## 正确使用示例

```go
func PrintRecover() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println(err)
		}
	}()
	fmt.Println("a")
	panic("some thing")
	fmt.Println("b")
}
```

使用示例

```go
func ExamplePrintRecover() {
	PrintRecover()
	// Output:
	// a
	// some thing
}
```

## 错误用例：不使用defer

```go
func FailRecoverWithoutDefer() {
	if err := recover(); err != nil {
		fmt.Println(err)
	}
	fmt.Println("a")
	panic("some thing")
	fmt.Println("b")
}
```

::: danger
不使用defer 方式，将无法捕获异常，程序陷入panic
:::

## 错误用例：recover 在 defer 嵌套函数中

```go
func FailRecoverWithoutLevelDefer() {
	defer func() {
		func() { //recover 在 defer 嵌套函数中
			if err := recover(); err != nil {
				fmt.Println(err)
			}
		}()
	}()
	fmt.Println("a")
	panic("some thing")
	fmt.Println("b")
}
```

::: danger
defer recover和panic不在同一层级，导致无法捕获异常，程序陷入panic
:::
