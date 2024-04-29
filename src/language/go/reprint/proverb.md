---
title: Go箴言
author: Rob Pike
date: 2023-08-15
tag:
 - Go
category:
 - 编程语言
---

【转】[原文链接](http://go-proverbs.github.io/)

> Go 语言之父 Rob Pike 在 2015 年分享的主题《Go Proverbs》
>
> 核心理念是：简单、诗意、简洁（Simple, Poetic, Pithy）。

## 译文

Don't communicate by sharing memory, share memory by communicating.
不要通过共享内存进行通信，通过通信共享内存

Concurrency is not parallelism.
并发不是并行

Channels orchestrate; mutexes serialize.
管道用于协调；互斥锁用于同步

The bigger the interface, the weaker the abstraction.
接口越大，抽象就越弱

Make the zero value useful.
利用好零值

interface{} says nothing.
空接口 interface{} 没有任何类型约束

Gofmt's style is no one's favorite, yet gofmt is everyone's favorite.
Gofmt 的风格不是人们最喜欢的，但 gofmt 是每个人的最爱

A little copying is better than a little dependency.
允许一点点重复比引入一点点依赖更好

Syscall must always be guarded with build tags.
系统调用必须始终使用构建标记进行保护

Cgo must always be guarded with build tags.
必须始终使用构建标记保护 Cgo

Cgo is not Go.
Cgo 不是 Go。

With the unsafe package there are no guarantees.
使用标准库的 unsafe 包，不能保证能如期运行

Clear is better than clever.
清晰比聪明更好

Reflection is never clear.
反射永远不清晰

Errors are values.
错误是值

Don't just check errors, handle them gracefully.
不要只检查错误，还要优雅地处理它们

Design the architecture, name the components, document the details.
设计架构，命名组件，文档记录细节

Documentation is for users.
文档是供用户使用的

Don't panic.
不要使用 panic

## 参考文献

[原文链接](http://go-proverbs.github.io/)
[中文译文](https://zhuanlan.zhihu.com/p/514680942)
