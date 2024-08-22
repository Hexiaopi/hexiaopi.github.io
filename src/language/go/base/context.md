---
title: Context使用方法与场景
date: 2024-08-21
order: 16
tag:
 - Go
 - 基础
category:
 - 编程语言
---

> Go语言提供Context上下文，常常用于超时控制、取消控制、传递数据等，本文介绍它的使用方法以及场景

<!-- more -->

## Context 使用方法

Go 语言官方推荐Context作为函数的第一个参数，而非嵌入在结构体中。例如：

```go
func DoSomething(ctx context.Context, arg Arg) error {
	// ... use ctx ...
}
```

Go语言提供以下常用函数用于创建Context：

- context.Background()：返回一个空的Context，通常用于整个Context树的根节点。
- context.TODO()：返回一个空的Context，一般我们不使用，如果你不知道用什么的时候可以使用它。
- context.WithCancel(parent Context) (ctx Context, cancel CancelFunc)：返回一个可取消的Context，同时返回一个取消函数用于取消Context。
- context.WithoutCancel(parent Context) Context: 返回一个不取消的Context。
- context.WithDeadline(parent Context, deadline time.Time) (Context, CancelFunc)：返回一个可取消并且带超时时间的Context，同时返回一个取消函数用于取消Context。
- context.WithDeadlineCause(parent Context, d time.Time, cause error) (Context, CancelFunc)：返回一个可取消并且带超时时间和错误原因的Context，同时返回一个取消函数用于取消Context。
- context.WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc)：返回一个可取消并且带超时时间的Context，同时返回一个取消函数用于取消Context。
- context.WithTimeoutCause(parent Context, timeout time.Duration, cause error) (Context, CancelFunc)：返回一个可取消并且带超时时间和错误原因的Context，同时返回一个取消函数用于取消Context。
- context.WithValue(parent Context, key, val any) Context：返回一个携带了键值对的Context，用于传递数据。

## Context 使用场景

### 超时控制

```go
func ExampleContextTimeout() {
	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel()
	for {
		select {
		case <-ctx.Done():
			fmt.Println("timeout")
			return
		case <-time.After(3 * time.Second):
			fmt.Println("3s done")
			return
		}
	}
	// Output:
	// timeout
}
```

通过设置超时时间，就可以保证下游的业务可以控制在规定的时间处理。常用在API接口请求中、GRPC调用、数据库操作等等。

以下是一个HTTP请求示例:

```go
package main

import (
	"context"
	"fmt"
	"net/http"
	"time"
)

func main() {
	req, err := http.NewRequest("GET", "https://www.baidu.com", nil)
	if err != nil {
		fmt.Printf("http.NewRequest err: %+v", err)
		return
	}

	ctx, cancel := context.WithTimeout(req.Context(), 100*time.Millisecond)
	defer cancel()

	req = req.WithContext(ctx)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Printf("http.DefaultClient.Do err: %+v", err)
		return
	}
	defer resp.Body.Close()
}
```

### 取消控制

Go可以定义一个可取消的Context，主动调用cancel函数，就可以取消整个Context的生命周期。一般用在控制多个协程中的退出。

```go
func ExampleContextCancel() {
	ctx, cancel := context.WithCancel(context.Background())
	go func(ctx context.Context) {
		for {
			select {
			case <-ctx.Done():
				fmt.Println("done")
				return
			default:
				fmt.Println("running")
				time.Sleep(1 * time.Second)
			}
		}
	}(ctx)
	time.Sleep(3 * time.Second)
    // 主动取消
	cancel()
	time.Sleep(1 * time.Second)
	// Output:
	// running
	// running
	// running
	// done
}
```

### 传递数据

Go的Context可以传递数据，从而实现数据共享

```go
func ExampleContextValue() {
	ctx := context.WithValue(context.Background(), "key", "value")
	// 定义一个函数，接收一个 context.Context 类型的参数
	f := func(ctx context.Context) {
		fmt.Println(ctx.Value("key"))
	}
	f(ctx)
	// Output:
	// value
}
```

::: tip
建议将通用的数据放在context中，例如：traceId等
:::

