---
title: sync.Cond底层原理
date: 2024-09-24
tag:
 - Go
 - 进阶
category:
 - 编程语言
---

<!-- more -->

> Go语言`sync.Cond`是一个条件变量。顾名思义，当条件不满足时，通过条件变量进入睡眠状态。当条件满足时，通过条件变量唤醒等待的线程。`sync.Cond`用于多线程中的同步机制。


## 使用示例

sync.Cond提供三个函数：

- Wait() // 使当前goroutine进入阻塞状态，等待其他goroutine唤醒
- Signal() // 唤醒其中一个等待该条件变量的goroutine
- Broadcase() // 唤醒所有等待该条件变量的goroutine

这里先展示广播示例

```go
package cond

import (
	"fmt"
	"sync"
	"time"
)

var done = false
var cond = sync.NewCond(&sync.Mutex{})

func read(name string) {
	cond.L.Lock()
	for !done {
		fmt.Println(name, "is waiting")
		cond.Wait()
	}
	fmt.Println(name, "has read")
	cond.L.Unlock()
}

func ExampleCondBroadcast() {
	var wg sync.WaitGroup
	wg.Add(3)
	go func() {
		defer wg.Done()
		read("one")
	}()
	go func() {
		defer wg.Done()
		read("two")
	}()
	go func() {
		defer wg.Done()
		read("three")
	}()
	time.Sleep(time.Second)
	done = true
	fmt.Println("broadcast")
	cond.Broadcast()
	wg.Wait()
	// Unordered output:
	// one is waiting
	// two is waiting
	// three is waiting
	// broadcast
	// one has read
	// two has read
	// three has read
}
```

::: tip
这里启动三个协程，done为false时，阻塞自己。当done为true时，打印信息。另外主线程将done改为true时，通过broadcase广播，此时前面三个协程将被唤醒。
::: 

我们再看看一个一个通知的示例

```go
func ExampleCondSignal() {
	var wg sync.WaitGroup
	wg.Add(3)
	go func() {
		defer wg.Done()
		read("one")
	}()
	go func() {
		defer wg.Done()
		read("two")
	}()
	go func() {
		defer wg.Done()
		read("three")
	}()
	time.Sleep(time.Second)
	done = true
	fmt.Println("signal")
	cond.Signal()
	time.Sleep(time.Second)
	fmt.Println("signal")
	cond.Signal()
	time.Sleep(time.Second)
	fmt.Println("signal")
	cond.Signal()
	time.Sleep(time.Second)
	wg.Wait()
	// Unordered output:
	// one is waiting
	// two is waiting
	// three is waiting
	// signal
	// one has read
	// signal
	// two has read
	// signal
	// three has read
}
```

这里每隔一秒钟，打印signal字符，并通过signal()唤醒一个协程。直至三个协程都被唤醒。

## 底层原理


### 数据结构

```go
type Cond struct {
	noCopy noCopy

	// L is held while observing or changing the condition
	L Locker

	notify  notifyList
	checker copyChecker
}
```

- `noCopy`：用于防止拷贝
- `L`：互斥锁，用于保护`Cond`的内部状态
- `notify`：通知列表，用于存储等待的goroutine
- `checker`：用于检查是否发生了拷贝，其本质上是同过指针的地址和存储的值是否一致判断。如果发生拷贝，运行时会panic。

### Wait

```go
func (c *Cond) Wait() {
	c.checker.check() // 检查是否发生了拷贝
	t := runtime_notifyListAdd(&c.notify) // 将当前goroutine添加到通知列表中
	c.L.Unlock() // 解锁
	runtime_notifyListWait(&c.notify, t) // 等待通知
	c.L.Lock() // 加锁
}
```

::: important
由于wait函数是先解锁，再加锁。因此需要保证在wait函数调用之前，已经加锁。官方给的示例如下：
```go
c.L.Lock()
for !condition() {
    c.Wait()
}
... make use of condition ...
c.L.Unlock()
```
:::

### Signal

```go
func (c *Cond) Signal() {
	c.checker.check() // 检查是否发生了拷贝
	runtime_notifyListNotifyOne(&c.notify) // 通知一个等待的goroutine
}
```

### Broadcast

```go
func (c *Cond) Broadcast() {
	c.checker.check() // 检查是否发生了拷贝
	runtime_notifyListNotifyAll(&c.notify) // 通知所有等待的goroutine
}
```


## sync.Cond和channel的区别

sync.Cond和channel都可以用于一对多的通知，sync.Cond通过Broadcase可以唤醒所有被阻塞的goroutine，可以通过close(channel)实现通知所有被阻塞的goroutine。但是close操作只能发生一次，而sync.Cond可以多次调用Broadcase。

## 为什么sync.Cond不能被复制

sync.Cond中维护了一个阻塞的goroutine的列表，如果被复制，那么就会出现两个sync.Cond都包含了这个列表。可能会导致一些等待的 goroutine 永远无法被唤醒，或者被错误地唤醒。
此外，sync.Cond还维护了一个互斥锁，互斥锁本身也是禁止复制的。