---
title: Docker环境go如何设置maxprocs
date: 2024-07-12
tag:
 - Go
 - 进阶
category:
 - 编程语言
---

<!-- more -->

::: tip
Go语言使用GMP调度模型，其中P的数量通过`GOMAXPROXS`设置，默认是机器的CPU核数。
:::

::: warning
但是由于Docker通过Cgroups做资源限制，存在的诟病：应用程序在容器里读取到的CPU核数是宿主机上的数据而非实际容器分配的数据。
:::

::: caution
而通常我们在Kubernetes集群使用的宿主机通常是100+核，容器分配的资源是2c4g，这就导致Go调度器会根据宿主机的核数设置P的数量，这会因为P数量过多导致不必要的资源争抢，反而降低性能。
:::

## 实验

为此我们准备一个简单的Go程序和Dockerfile，进行实验验证。

Go程序只打印容器的GOMAXPROCS，其中`runtime.GOMAXPROCS(0)`，当传值为0时，返回当前的GOMAXPROCS值。

Dockerfile内容如下：

```dockerfile
FROM golang:1.21-alpine AS builder

ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn,direct

WORKDIR /backend

COPY . /backend

RUN go mod tidy && go build -o app

FROM alpine:latest

WORKDIR /app

COPY --from=builder /backend/app /app/app

CMD ["./app"]
```

### 未设置maxprocs的场景

Go程序如下：

```go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Println("maxprocs", runtime.GOMAXPROCS(0))
}
```

构建镜像:

```shell
docker build -t cpu-test:v0.1.0 .
```

运行镜像:

```shell
docker run --cpus=1.0  cpu-test:v0.1.0
```

这里通过`--cpus=1.0`限制容器的CPU核数为1。

执行结果：

```text
maxprocs 20
```

:::tip
我的本机逻辑处理器有20个，所以结果为20
:::

### 设置maxprocs场景

这里使用uber公司开源的库来修改maxprocs，Go程序如下：

```go
package main

import (
	"fmt"
	"runtime"

	_ "go.uber.org/automaxprocs"
)

func main() {
	fmt.Println("maxprocs", runtime.GOMAXPROCS(0))
}
```

构建镜像:

```shell
docker build -t cpu-test:v0.1.1 .
```

运行镜像：

```shell
docker run --cpus=1.0  cpu-test:v0.1.1
```

执行结果：

```text
2024/07/11 09:06:55 maxprocs: Updating GOMAXPROCS=1: determined from CPU quota
maxprocs 1
```

:::tip
我们看到maxprocs已经设置为我们限制的核数，由于引入的`automaxprocs`库进行初始化，因此多打印了一段信息。
:::

## 参考文献

- [https://github.com/uber-go/automaxprocs](https://github.com/uber-go/automaxprocs)
- [docker容器环境go程序的GOMAXPROCS问题](https://blog.csdn.net/NUCEMLS/article/details/132528994)
