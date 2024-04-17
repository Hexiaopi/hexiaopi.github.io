---
title: Go之禅
author: Dave Cheney
date: 2023-08-15
tag:
 - Go
category:
 - Go语言
 - 转载
---

> Python的核心开发成员之一Tim Peter写下的《The Zen of Python》，成为Python编程和设计的指导原则。Go语言步道师Dave Cheney 2020年发表了名为《The Zen of Go》

## 译文

### Each package fulfils a single purpose 每一个package实现单一目标

A well designed Go package provides a single idea, a set of related behaviours. A good Go package starts by choosing a good name. Think of your package’s name as an elevator pitch to describe what it provides, using just one word.
精心设计的Go软件包只提供单一功能和一系列相关的行为。一个好的Go软件包从选择一个好的名字开始。把你的包的名字想象成一个电梯广告，仅用一个词来描述它所提供的功能。

### Handle errors explicitly 显式处理错误

Robust programs are composed from pieces that handle the failure cases before they pat themselves on the back. The verbosity of if err != nil { return err } is outweighed by the value of deliberately handling each failure condition at the point at which they occur. Panic and recover are not exceptions, they aren’t intended to be used that way.
健壮的程序是由处理失败case的各个片段组成的。 冗长的`if err != nil { return err }` 比出了故障再一个个去处理更有价值。Panic和recover也一样。

### Return early rather than nesting deeply 尽早return，不要深陷

Every time you indent you add another precondition to the programmer’s stack consuming one of the 7 ±2 slots in their short term memory. Avoid control flow that requires deep indentation. Rather than nesting deeply, keep the success path to the left using guard clauses.
每缩进一次，就会在程序员的堆栈中增加一个前提条件，占用其短时记忆中 7 ±2 个插槽中的一个。避免需要深度缩进的控制流。与其深度嵌套，不如使用保护子句将成功路径保持在左侧。

### Leave concurrency to the caller 并发权留给调用者

Let the caller choose if they want to run your library or function asynchronously, don’t force it on them. If your library uses concurrency it should do so transparently.
让调用者自己选择是否要异步运行你的库或函数，不要强迫他们。如果您的程序库使用并发功能，则应透明地使用。

### Before you launch a goroutine, know when it will stop 在启动goroutine之前，要知道它什么时候会停止

Goroutines own resources; locks, variables, memory, etc. The sure fire way to free those resources is to stop the owning goroutine.
goroutine 拥有锁、变量、内存等资源。释放这些资源的可靠方法是停止拥有资源的 goroutine。

### Avoid package level state 避免包级状态

Seek to be explicit, reduce coupling, and spooky action at a distance by providing the dependencies a type needs as fields on that type rather than using package variables.
通过将类型所需的依赖关系作为该类型的字段而不是使用包变量来提供，力求显式化，减少耦合，并实现超距作用。

### Simplicity matters 简单很重要

Simplicity is not a synonym for unsophisticated. Simple doesn’t mean crude, it means readable and maintainable. When it is possible to choose, defer to the simpler solution.
简单不是容易（不复杂）的同义词。简单并不意味着粗糙，它意味着可读性和可维护性。如果可以选择，请遵循较简单的解决方案。

### Write tests to lock in the behaviour of your package’s API 编写测试以确定包API的行为

Test first or test later, if you shoot for 100% test coverage or are happy with less, regardless your package’s API is your contract with its users. Tests are the guarantees that those contracts are written in. Make sure you test for the behaviour that users can observe and rely on.
先测试还是后测试，是追求 100% 的测试覆盖率还是满足于较低的测试覆盖率，无论如何，软件包的应用程序接口都是您与用户之间的契约。测试是这些合约的保证。请确保您测试的是用户可以观察和依赖的行为。

### If you think it’s slow, first prove it with a benchmark 如果你觉得慢，先用基准来证明

So many crimes against maintainability are committed in the name of performance. Optimisation tears down abstractions, exposes internals, and couples tightly. If you’re choosing to shoulder that cost, ensure it is done for good reason.
以性能为名，对可维护性犯下了许多罪行。优化会破坏抽象概念，暴露内部结构，并造成紧密耦合。如果你选择承担这种代价，请确保这样做是有充分理由的。

### Moderation is a virtue 节制是一种美德

Use goroutines, channels, locks, interfaces, embedding, in moderation.
适度使用goroutines、channels、locks、interfaces、embedded。

### Maintainability counts 可维护性很重要

Clarity, readability, simplicity, are all aspects of maintainability. Can the thing you worked hard to build be maintained after you’re gone? What can you do today to make it easier for those that come after you?
清晰度、可读性、简洁性都是可维护性的体现。你辛辛苦苦创建的东西在你离开后还能被维护吗？你今天能做些什么来让你的后人更容易地维护它？

## 参考文献

[简洁版](https://the-zen-of-go.netlify.app)
[完整版](https://dave.cheney.net/2020/02/23/the-zen-of-go)
