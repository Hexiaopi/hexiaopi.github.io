---
title: 如何禁止拷贝
date: 2024-05-24
tag:
 - Go
 - 进阶
category:
 - 编程语言
---

<!-- more -->

> 禁止拷贝的目的是不让用户对对象进行拷贝，比如：sync.WaitGroup

那么Go语言是如何禁止拷贝的呢？

## WaitGroup为何禁止拷贝

还是以sync.WaitGroup为例，我们来看一下它的源码：

```go
type WaitGroup struct {
    noCopy noCopy
    // ...
}

// noCopy may be added to structs which must not be copied
// after the first use.
//
// See https://golang.org/issues/8005#issuecomment-190753527
// for details.
//
// Note that it must not be embedded, due to the Lock and Unlock methods.
type noCopy struct{}

// Lock is a no-op used by -copylocks checker from `go vet`.
func (*noCopy) Lock()   {}
func (*noCopy) Unlock() {}
```

我们可以看到，`sync.WaitGroup`结构体中有一个`noCopy`的匿名结构体，并且实现了`Lock`和`Unlock`方法。通过内嵌了`noCopy`，sync.WaitGroup就禁止了拷贝。

其实原理很简单，就是通过`go vet`检查，如果发现结构体中包含`noCopy`，就会提示禁止拷贝。

## 自己实现禁止拷贝

那么我们定义自己的结构体，验证是否能够禁止拷贝

```go
package main

import "fmt"

type Demo struct {
}

func (*Demo) Lock()   {}
func (*Demo) Unlock() {}

func Copy(d Demo) {
}

func main() {
	d := Demo{}
	fmt.Printf("%+v", d)
	Copy(d)
	d2 := d
	fmt.Printf("%+v", d2)
}
```

::: details 执行结果
```text
$ go run main.go
{}{}
```
:::

运行结果依然是正常的，但是我们通过`go vet`检查一下：

```text
$ go vet .\main.go
# command-line-arguments
# [command-line-arguments]
.\main.go:11:13: Copy passes lock by value: command-line-arguments.Demo
.\main.go:16:20: call of fmt.Printf copies lock value: command-line-arguments.Demo
.\main.go:17:7: call of Copy copies lock value: command-line-arguments.Demo
.\main.go:18:8: assignment copies lock value to d2: command-line-arguments.Demo
.\main.go:19:20: call of fmt.Printf copies lock value: command-line-arguments.Demo
```

我们看到go vet提示了5个command-line-arguments.noCopy问题：

- 第11行，定义Copy函数传参，本质是对象拷贝；
- 第16行，fmt.Printf函数调用，本质是对象拷贝；
- 第17行，Copy函数调用，本质是对象拷贝；
- 第18行，d赋值给d2，也是拷贝；
- 第19行，fmt.Printf函数调用，本质是参数拷贝。

## 总结

要想禁止拷贝，可以定义一个结构体，只需实现`Lock`方法和`Unlock`方法，如下：

```go
type Demo struct {
}

func (*Demo) Lock()   {}
func (*Demo) Unlock() {}
```

或者类似`sync.WaitGroup`内嵌`noCopy`结构体。推荐使用该方式！

要想检测自己是否拷贝了禁止拷贝的结构体，可以使用`go vet`命令，该命令会检测出`noCopy`结构体的问题。
