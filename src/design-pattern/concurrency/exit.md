---
title: 退出模式
date: 2023-08-22
tag:
 - Go
 - 并发模式
category:
 - 设计模式
---

<!-- more -->

## 退出模式

使用关键字`go`很容易启动goroutine，这样创建的协程和当前协程已经分离，我们并不知道

### 等待指定协程退出

```go {15}
package main

import (
	"fmt"
	"time"
)

type signal struct{}

func worker() {
	println("worker is working...")
	time.Sleep(1 * time.Second)
}

func spawn(f func()) <-chan signal {
	c := make(chan signal)
	go func() {
		println("worker start to work...")
		f()
		c <- signal(struct{}{})
	}()
	return c
}

func main() {
	println("start a worker...")
	c := spawn(worker)
	<-c
	fmt.Println("worker work done!")
}
```

::: tip
  spawn函数创建的新goroutine与调用spawn函数的goroutine（main goroutine）之间通过channel建立了联系。
:::

### 等待多个协程退出

```go {19}
package main

import (
	"fmt"
	"sync"
	"time"
)

type signal struct{}

func worker(i int) {
	fmt.Printf("worker %d: is working...\n", i)
	time.Sleep(1 * time.Second)
	fmt.Printf("worker %d: works done\n", i)
}

func spawnGroup(f func(i int), num int) <-chan signal {
	c := make(chan signal)
	var wg sync.WaitGroup

	for i := 0; i < num; i++ {
		wg.Add(1)
		go func(i int) {
			fmt.Printf("worker %d: start to work...\n", i)
			f(i)
			wg.Done()
		}(i + 1)
	}

	go func() {
		wg.Wait()
		c <- signal(struct{}{})
	}()
	return c
}

func main() {
	fmt.Println("the group of workers start to work...")
	c := spawnGroup(worker, 5)
	<-c
	fmt.Println("the group of workers work done!")
}
```

::: tip
  通过sync.WaitGroup，对于每一个协程处理前进行wg.Add(1)，退出时执行wg.Done()，并等待所有的协程退出wg.Wait()。保障所有的协程都会结束。
:::
