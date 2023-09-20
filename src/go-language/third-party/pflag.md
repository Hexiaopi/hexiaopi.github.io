---
title: pflag
date: 2023-09-20
tag:
 - Go
 - 三方库
category:
 - Go语言
---

我在标准库中介绍了[flag使用](../standard-library/flag.md)，对于小型的项目flag能够基本满足需求，但是在某些大型项目或者特殊场景下flag有些力不从心。主要在于：

- flag的子命令需要自己解析
- flag的短命令需要定义两个变量
- 不支持一些参数废弃说明，这在更新的工具中对用户有更好的引导作用

因此业界开源的[pflag](https://github.com/spf13/pflag)受到广大爱好者的使用，在一些耳熟能详的开源项目里也都在使用pflag，例如：Kubernetes、Istio、Helm、Docker、Etcd等。

## 简单用法

### 支持标准库flag用法

```go
var flagStrA = pflag.String("str-a", "str-a", "flag test *string")
```

使用示例：

```go
func ExampleFlagLongStringPoint() {
	pflag.CommandLine.Parse([]string{"--str-a", "stra"})
	fmt.Println(*flagStrA)
	// Output:
	// stra
}
```

::: warning
注意是长选项，即参数为`--xxx`
:::

### 支持短选项

```go
var flagStrB = pflag.StringP("str-b", "b", "str-b", "long and short flag test *string")
```

使用示例：

```go
func ExampleFlagShortStringPoint() {
	pflag.CommandLine.Parse([]string{"-b", "strb"})
	fmt.Println(*flagStrB)
	// OutPut:
	// strb
}
```

### 支持绑定到已有变量

```go
var flagStrC string
var flagStrD string

func init() {
	pflag.StringVar(&flagStrC, "str-c", "str-c", "long flag test string")
	pflag.StringVarP(&flagStrD, "str-d", "d", "str-d", "long and short flag test string")
}
```

使用示例：

```go
func ExampleFlagString() {
	pflag.CommandLine.Parse([]string{"--str-c", "strc", "-d", "strd"})
	fmt.Println(flagStrC, flagStrD)
	// Output:
	// strc strd
}
```

### 标记命令行参数已废弃

```go
pflag.CommandLine.MarkDeprecated("badflag", "please use --desc instead")
pflag.CommandLine.MarkShorthandDeprecated("str-b", "please use --str-b instead")
```

打印Usage()

```text
Flag --badflag has been deprecated, please use --desc instead
Flag shorthand -b has been deprecated, please use --str-b instead
```

### 指定了参数却没有传值场景下的默认值改写

```go
var age = pflag.IntP("age", "a", 30, "Input Your Age")

func init() {
	pflag.Lookup("age").NoOptDefVal = "25"
}
```

使用示例：

```go
func TestFlagDefault(t *testing.T) {
	tests := []struct {
		name      string
		arguments []string
		want      int
	}{
		{name: "没传入参数和值", arguments: []string{""}, want: 30},
		{name: "传入参数和值", arguments: []string{"--age=10"}, want: 10},
		{name: "传入参数,没传值", arguments: []string{"--age"}, want: 25},
	}
	for _, test := range tests {
		pflag.CommandLine.Parse(test.arguments)
		if *age != test.want {
			t.Fatalf("%s pflag parse want:%d,but got:%d", test.name, test.want, *age)
		}
	}
}
```

::: notice

- 当输入--age 10，age变量值为：10；
- 当输入--age，age变量值为：25；
- 当没输入--age，age变量值为：30；

:::

### 支持隐藏参数

> 隐藏的参数不会显示在usage/help中

```go
pflag.CommandLine.MarkHidden("secretFlag")
```
