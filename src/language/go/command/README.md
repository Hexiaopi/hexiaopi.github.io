---
title: Go命令
icon: terminal
date: 2024-06-14
tag:
 - Go
category:
 - 编程语言
---

<!-- more -->

我们可以执行`go -h`或者`go --help`查看Go语言命令。

```shell
go -h
```

```text
Go is a tool for managing Go source code.

Usage:

        go <command> [arguments]

The commands are:

        bug         start a bug report
        build       compile packages and dependencies
        clean       remove object files and cached files
        doc         show documentation for package or symbol
        env         print Go environment information
        fix         update packages to use new APIs
        fmt         gofmt (reformat) package sources
        generate    generate Go files by processing source
        get         add dependencies to current module and install them
        install     compile and install packages and dependencies
        list        list packages or modules
        mod         module maintenance
        work        workspace maintenance
        run         compile and run Go program
        test        test packages
        tool        run specified go tool
        version     print Go version
        vet         report likely mistakes in packages
```

Go语言命令包含了一整套工具链，包括：文档、代码检查、格式化、编译、测试、依赖管理、包管理等。

```
bug         报告漏洞
build       编译包和依赖
clean       清除对象文件
doc         展示源代码中的文档
env         查看Go环境变量信息
fix         修复因go版本变化而导致的API兼容问题
fmt         源代码格式化
generate    代码生成
get         添加依赖
install     安装并编译包
list        包/模块列表命令
mod         模块维护命令
work        工作区维护命令
run         编译并运行
test        测试
tool        运行指定的go工具
version     展示go的版本信息
vet         扫描并输出源代码中可能存在的问题
```

<Catalog />