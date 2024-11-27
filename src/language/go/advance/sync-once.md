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

## 注意事项

### sync.Once不能复制

```go
func ExampleOnce2() {
	once := sync.Once{}
	wg := sync.WaitGroup{}
	for i := 0; i < 5; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			once := once
			once.Do(func() {
				fmt.Println("do init")
			})
		}()
	}
	wg.Wait()
	// Output:
	// do init
	// do init
	// do init
	// do init
	// do init
}
```

::: tip
这是由于sync.Once里面的内部类型不是引用类型，进行复制会得到全新的变量。不同的变量执行Do方法时，互不影响。
:::

### sync.Once不能嵌套使用

```go
package main

import (
	"fmt"
	"sync"
)

var once sync.Once

func main() {
	once.Do(func() {
		once.Do(func() {
			fmt.Println("do inside")
		})
		fmt.Println("do outside")
	})
}
```

::: details 执行结果
```text
fatal error: all goroutines are asleep - deadlock!

goroutine 1 [sync.Mutex.Lock]:
sync.runtime_SemacquireMutex(0x5a2200?, 0x80?, 0x5a1340?)
        D:/Go/src/runtime/sema.go:95 +0x25
sync.(*Mutex).lockSlow(0x6a969c)
        D:/Go/src/sync/mutex.go:173 +0x15d
sync.(*Mutex).Lock(...)
        D:/Go/src/sync/mutex.go:92
sync.(*Once).doSlow(0xc00008a000?, 0x5c3fe8)
        D:/Go/src/sync/once.go:72 +0x50
sync.(*Once).Do(...)
        D:/Go/src/sync/once.go:67
main.main.func1()
        D:/code/test/test/main.go:12 +0x2c
sync.(*Once).doSlow(0x657388?, 0xc00006c000?)
        D:/Go/src/sync/once.go:76 +0xb4
sync.(*Once).Do(...)
        D:/Go/src/sync/once.go:67
main.main()
        D:/code/test/test/main.go:11 +0x2c
exit status 2
```
:::

::: tip
这是由于sync.Once内部的锁在第一次执行的时候，加锁成功，等待释放锁。但是嵌入执行的时候又竞争这个锁，导致死锁。
:::

## 参考资料

- [探索 Go sync.Once 的实现原理](https://mp.weixin.qq.com/s/glJ6X1ixSYFok4qb_UHY6A)