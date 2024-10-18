---
title: errgroup使用示例和源码分析
date: 2024-10-18
tag:
 - Go
 - 进阶
category:
 - 编程语言
---

<!-- more -->

# golang.org/x/sync/errgroup


> Go语言在并执行任务时，可能会遇到某个协程运行出现错误，如果处理这些错误是一个非常重要的问题。Go语言在`golang.org/x/sync`提供一个并发原语`errgroup`来解决这个问题。

## 使用示例

### 简单任务

```go
package main

import (
	"fmt"

	"golang.org/x/sync/errgroup"
)

func main() {
	var eg errgroup.Group

	for i := 0; i < 10; i++ {
		eg.Go(func() error {
			if i == 2 {
				return fmt.Errorf("error occurred in goroutine %d", i)
			}
			fmt.Println("goroutine", i, "finished")
			return nil
		})
	}

	if err := eg.Wait(); err != nil {
		fmt.Println(err)
	}
}
```

在这个例子中并发启动10个协程执行任务，其中一个协程处理失败返回错误。`errgroup`会等待所有协程执行完毕，并返回第一个错误。

::: details 执行结果
```text
goroutine 9 finished
goroutine 0 finished
goroutine 1 finished
goroutine 6 finished
goroutine 4 finished
goroutine 5 finished
goroutine 7 finished
goroutine 8 finished
goroutine 3 finished
error occurred in goroutine 2
```
:::

### 带上下文的任务

```go
package main

import (
	"context"
	"fmt"
	"time"

	"golang.org/x/sync/errgroup"
)

func main() {
	eg, ctx := errgroup.WithContext(context.Background())
	for i := 0; i < 10; i++ {
		eg.Go(func() error {
			return Do(ctx, i)
		})
	}
	if err := eg.Wait(); err != nil {
		fmt.Println(err)
	}
}

func Do(ctx context.Context, i int) error {
	ticker := time.After(time.Second * time.Duration(i))
	select {
	case <-ticker:
		fmt.Println(i, "do something")
		if i == 2 {
			return fmt.Errorf("error occurred in goroutine %d", i)
		}
	case <-ctx.Done():
		fmt.Println(i, "canceled")
		return ctx.Err()
	}
	return nil
}
```

::: details 执行结果
```text
0 do something
1 do something
2 do something
9 canceled
6 canceled
8 canceled
7 canceled
4 canceled
5 canceled
3 canceled
error occurred in goroutine 2
```
:::

在这个例子中，当其中一个协程执行失败，剩余还未执行的协程将会被取消。

## 相关定义

errgroup的定义：

```go
type Group struct {
	cancel func(error)

	wg sync.WaitGroup

	sem chan token

	errOnce sync.Once
	err     error
}
```

其中：

- cancel：用于通知其他协程任务已经失败
- wg: 用于等待所有协程执行完毕
- sem: 用于控制并发协程的数量
- errOnce: 用于保证只设置一次错误
- err: 用于存储错误信息

errgroup的核心方法：

- Go：用于启动一个协程执行任务
- Wait：用于等待所有协程执行完毕，并返回第一个错误
- WithContext：用于启动一个协程执行任务，并在协程执行完毕时设置上下文的错误信息
- SetLimit: 设置最大并发协程数量
- TryGo: 根据设置最大的并发协程数，判断能否启动一个协程执行任务


## 源码分析

### Go方法
```go
func (g *Group) Go(f func() error) {
	if g.sem != nil {
		g.sem <- token{}
	}

	g.wg.Add(1)
	go func() {
		defer g.done()

		if err := f(); err != nil {
			g.errOnce.Do(func() {
				g.err = err
				if g.cancel != nil {
					g.cancel(g.err)
				}
			})
		}
	}()
}
```

g.sem用于控制最大并发数，如果可以从sem channel获取到token，则可以执行。否则，等待其他协程执行完毕。并使用waitgroup记录本次启动的协程个数，协程退出时使用`done`方法减去本次协程数量。errOnce用于保证只设置一次错误。并且如果cancel不为空，通知其他协程任务已经失败。

### Wait方法

```go
func (g *Group) Wait() error {
	g.wg.Wait()
	if g.cancel != nil {
		g.cancel(g.err)
	}
	return g.err
}
```

`Wait`方法就比较简单，这得益于`waitgroup`实现了核心能力。这里只需要判断cancel函数是否为空进行通知即可。

### WithContext方法

```go
func WithContext(ctx context.Context) (*Group, context.Context) {
	ctx, cancel := withCancelCause(ctx)
	return &Group{cancel: cancel}, ctx
}
```

WithContext返回一个新的errgroup和一个新的context。`cancel`函数用于通知其他协程任务已经失败。

### SetLimit方法

```go
func (g *Group) SetLimit(n int) {
	if n < 0 {
		g.sem = nil
		return
	}
	if len(g.sem) != 0 {
		panic(fmt.Errorf("errgroup: modify limit while %v goroutines in the group are still active", len(g.sem)))
	}
	g.sem = make(chan token, n)
}
```

`SetLimit`方法用于设置最大并发协程数量。如果n小于0，将不限制最大并发数量。否则，创建一个长度为n的channel。


### TryGo方法

```go
func (g *Group) TryGo(f func() error) bool {
	if g.sem != nil {
		select {
		case g.sem <- token{}:
			// Note: this allows barging iff channels in general allow barging.
		default:
			return false
		}
	}

	g.wg.Add(1)
	go func() {
		defer g.done()

		if err := f(); err != nil {
			g.errOnce.Do(func() {
				g.err = err
				if g.cancel != nil {
					g.cancel(g.err)
				}
			})
		}
	}()
	return true
}
```

`TryGo`方法和`Go`方法类似，但是在获取sem channel的token失败时，直接返回false。而`Go`方法会一直等待sem channel的token。

