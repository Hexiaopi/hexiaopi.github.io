---
title: Go命令
date: 2024-06-14
tag:
 - Go
 - 基础
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

## go bug

`go bug`命令用于生成一个bug报告模板。该命令会收集你的Go环境和系统的信息，并打开默认浏览器在Go的官方Github创建新的issue。

## go build

`go build`命令用于编译我们指定的源码文件或代码包以及它们的依赖包。

### 用法

```bash
go build [-o output] [build flags] [packages]
```

-o 用于指定输出二进制文件名称，例如：

```
go build -o app-user main.go
```

## go clean

`go clean`会删除掉执行其它命令时产生的一些文件和目录，包括：

1. 在使用`go build`命令时在当前代码包下生成的与包名同名或者与Go源码文件同名的可执行文件。在Windows下，则是与包名同名或者Go源码文件同名且带有“.exe”后缀的文件。

2. 在执行`go test`命令并加入`-c`标记时在当前代码包下生成的以包名加“.test”后缀为名的文件。在Windows下，则是以包名加“.test.exe”后缀为名的文件。我们会在后面专门介绍`go test`命令。

3. 如果执行`go clean`命令时带有标记`-i`，则会同时删除安装当前代码包时所产生的结果文件。如果当前代码包中只包含库源码文件，则结果文件指的就是在工作区的pkg目录的相应目录下的归档文件。如果当前代码包中只包含一个命令源码文件，则结果文件指的就是在工作区的bin目录下的可执行文件。

4. 还有一些目录和文件是在编译Go或C源码文件时留在相应目录中的。包括：“_obj”和“_test”目录，名称为“_testmain.go”、“test.out”、“build.out”或“a.out”的文件，名称以“.5”、“.6”、“.8”、“.a”、“.o”或“.so”为后缀的文件。这些目录和文件是在执行`go build`命令时生成在临时目录中的。如果你忘记了这个临时目录是怎么回事儿，可以再回顾一下前面关于`go build`命令的介绍。临时目录的名称以`go-build`为前缀。

5. 如果执行`go clean`命令时带有标记`-r`，则还包括当前代码包的所有依赖包的上述目录和文件。

## go doc

`go doc`命令用于查看Go语言的文档。

比如：查看sync.Map文档，可以使用以下命令：

```bash
go doc sync.Map
```
    
输出结果如下：

```text
package sync // import "sync"

type Map struct {
        // Has unexported fields.
}
    Map is like a Go map[any]any but is safe for concurrent use by multiple
    goroutines without additional locking or coordination. Loads, stores,
    and deletes run in amortized constant time.

    The Map type is specialized. Most code should use a plain Go map instead,
    with separate locking or coordination, for better type safety and to make it
    easier to maintain other invariants along with the map content.

    The Map type is optimized for two common use cases: (1) when the entry for
    a given key is only ever written once but read many times, as in caches
    that only grow, or (2) when multiple goroutines read, write, and overwrite
    entries for disjoint sets of keys. In these two cases, use of a Map may
    significantly reduce lock contention compared to a Go map paired with a
    separate Mutex or RWMutex.

    The zero Map is empty and ready for use. A Map must not be copied after
    first use.

    In the terminology of the Go memory model, Map arranges that a write
    operation “synchronizes before” any read operation that observes the effect
    of the write, where read and write operations are defined as follows. Load,
    LoadAndDelete, LoadOrStore, Swap, CompareAndSwap, and CompareAndDelete
    are read operations; Delete, LoadAndDelete, Store, and Swap are write
    operations; LoadOrStore is a write operation when it returns loaded set to
    false; CompareAndSwap is a write operation when it returns swapped set to
    true; and CompareAndDelete is a write operation when it returns deleted set
    to true.

func (m *Map) CompareAndDelete(key, old any) (deleted bool)
func (m *Map) CompareAndSwap(key, old, new any) bool
func (m *Map) Delete(key any)
func (m *Map) Load(key any) (value any, ok bool)
func (m *Map) LoadAndDelete(key any) (value any, loaded bool)
func (m *Map) LoadOrStore(key, value any) (actual any, loaded bool)
func (m *Map) Range(f func(key, value any) bool)
func (m *Map) Store(key, value any)
func (m *Map) Swap(key, value any) (previous any, loaded bool)
```

## go env

`go env`用于打印Go语言的环境信息。

**Go111Module**

Go111Module是Go语言的模块管理功能的开关。它的值可以是off、on或auto。

**GOARCH**

GOARCH是Go语言的目标架构，例如amd64、386等。

**GOBIN**

GOBIN是Go语言的可执行文件的输出路径，默认情况下为$GOPATH/bin。

**GOCACHE**

GOCACHE是Go语言的缓存目录，默认情况下为$HOME/.cache/go-build。

**GOENV**

GOENV的值是Go语言的环境变量文件。

**GOEXE**

GOEXE的值会被作为可执行文件的后缀。它的值与GOOS的值存在一定关系，即只有GOOS的值为“windows”时GOEXE的值才会是“.exe”，否则其值就为空字符串“”。这与在各个操作系统下的可执行文件的默认后缀是一致的。

**GOFLAGS**

GOFLAGS的值是Go语言的编译器参数。

**GOHOSTARCH**

GOHOSTARCH的值是Go语言的编译环境的目标架构。

**GOHOSTOS**

GOHOSTOS的值是Go语言的编译环境的目标操作系统。

**GOINSECURE**

GOINSECURE的值是Go语言的内部安全机制的开关。它的值可以是off、on或auto。

**GOMODCACHE**

GOMODCACHE的值是Go语言的模块缓存目录，默认情况下为$GOPATH/pkg/mod。

**GONOPROXY**

GONOPROXY的值是Go语言的私有代理的包路径。

**GONOSUMER**

GONOSUMER的值是Go语言的私有校验和数据库的包路径。

**GOOS**

GOOS是Go语言的目标操作系统，例如linux、windows等。

**GOPATH**

GOPATH是Go语言的工作区目录的绝对路径。我们需要显式的设置环境变量GOPATH。如果有多个工作区，那么多个工作区的绝对路径之间需要用分隔符分隔。在windows操作系统下，这个分隔符为“;”。在其它操作系统下，这个分隔符为“:”。注意，GOPATH的值不能与GOROOT的值相同。

**GOPRIVATE**

GOPRIVATE的值是Go语言的私有模块的包路径。

**GOPROXY**

GOPROXY的值是Go语言的代理服务器的地址。

**GOROOT**

GOROOT的值是Go语言的安装目录的绝对路径。

**GOSUMDB**

GOSUMDB的值是Go语言的校验和数据库的地址。

**GOTMPDIR**

GOTMPDIR的值是Go语言的临时文件的输出路径，默认情况下为$GOPATH/pkg/mod。

**GOTOOLCHAIN**

GOTOOLCHAIN允许您指定要使用的特定工具链版本。

**GOTOOLDIR**

GOTOOLDIR的值是Go语言的工具目录的绝对路径。

**GOVCS**

GOVCS的值是Go语言的版本控制系统。

**GOVERSION**

GOVERSION的值是Go语言的版本号。

**GCCGO**

GCCGO的值是Go语言的编译器参数。

**GOAMD64**

GOAMD64的值是Go语言的编译器参数。

## go fix


`go fix`命令用于自动修复Go代码中的错误。

### 语法

```bash
go fix [build flags] [packages]
```

### 选项

- `-n`：只打印将要进行的修复操作，而不实际执行。
- `-v`：打印出每个被修复的文件名。

## go fmt

`go fmt`用于格式化Go代码。

### 语法

```bash
go fmt [-n] [-x] [packages]
```

### 选项

- `-n`: 打印格式化后的代码，但不实际写入文件。
- `-x`: 打印格式化后的代码，并添加行号和缩进。

## go generate

## go get

`go get`可以根据要求和实际情况从互联网上下载或更新指定的代码包及其依赖包，并对它们进行编译和安装

## go install

`go install`用于编译并安装指定的代码包及它们的依赖包。

## go list

`go list`命令的作用是列出指定的代码包的信息。

## go mod

## go run


`go run`命令用于编译并运行Go程序。

## go test

`go test`命令用于对Go语言编写的程序进行测试。

## go tool

## go version

`go version`命令用于打印当前系统Go语言的版本信息。

### 语法

```bash
go version
```

输出结果：

```
go version go1.22.2 windows/amd64
```

## go vet

`go vet`命令用于检查Go代码中的错误和潜在的性能问题。

### 语法

```bash
go vet [-n] [-x] [build flags] [packages]
```

### 选项

- `-n`：打印出需要检查的包名，但不执行检查。
- `-x`：打印出需要检查的包名和文件名，但不执行检查。