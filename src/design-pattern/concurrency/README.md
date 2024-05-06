---
title: 并发模式
icon: shuffle
date: 2023-02-26
tag:
 - Go
 - 并发模式
category:
 - 设计模式
---

Go语言推荐CSP模型进行并发处理，而非通过共享内存。这里总结一些并发模式或者称作范式，去管理控制协程。

<!-- more -->

## Go并发模式

我们都知道Go语言开启协程只需要`go func(){ }`，有时候需要与goroutine之间建立联系，方便进一步控制与处理。
因此总结一些范式，优雅的管理goroutine。


<Catalog />