---
title: sync.Once底层原理
date: 2024-09-24
tag:
 - Go
 - 进阶
category:
 - 编程语言
---

<!-- more -->

> Go语言`sync.Once`可以保证某个函数只执行一次，常用于单例模式。在本文中，我们将深入探讨`sync.Once`的底层实现原理，以便更好地理解它的并发安全特性。

## 使用方式

```go
func ExampleOnce() {
	once := sync.Once{}
	once.Do(func() {
		fmt.Println("do once")
	})
	once.Do(func() {
		fmt.Println("do twice")
	})
	// Output:
	// do once
}

```

sync.Once通过`Do`方法实现了只执行一次的功能。在第一次调用`Do`方法时，传入的函数会被执行，而在后续的调用中，传入的函数将不会被执行。

## 底层原理

```go{15}
type Once struct {
	done atomic.Uint32
	m    Mutex
}

func (o *Once) Do(f func()) {
	if o.done.Load() == 0 {
		o.doSlow(f)
	}
}

func (o *Once) doSlow(f func()) {
	o.m.Lock()
	defer o.m.Unlock()
	if o.done.Load() == 0 {
		defer o.done.Store(1)
		f()
	}
}
```

sync.Once的底层实现非常简单，核心代码只有短短的十几行。
- done: 原子操作，用于记录函数是否已经执行过。
- m: 互斥锁，用于保护函数的执行。

::: important
其中第15行，通过双重检查，保证函数只执行一次。因为在调用doSlow方式前，done是0。但是调用doSlow方法时，done可能已被其他协程修改，因此需要双重检查。
:::