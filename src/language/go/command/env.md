---
title: go-env
date: 2024-06-14
tag:
 - Go
 - 命令
category:
 - 编程语言
---

<!-- more -->

`go env`用于打印Go语言的环境信息。

## Go111Module

Go111Module是Go语言的模块管理功能的开关。它的值可以是off、on或auto。

## GOARCH

GOARCH是Go语言的目标架构，例如amd64、386等。

## GOBIN

GOBIN是Go语言的可执行文件的输出路径，默认情况下为$GOPATH/bin。

## GOCACHE

GOCACHE是Go语言的缓存目录，默认情况下为$HOME/.cache/go-build。

## GOENV

GOENV的值是Go语言的环境变量文件。

## GOEXE

GOEXE的值会被作为可执行文件的后缀。它的值与GOOS的值存在一定关系，即只有GOOS的值为“windows”时GOEXE的值才会是“.exe”，否则其值就为空字符串“”。这与在各个操作系统下的可执行文件的默认后缀是一致的。

## GOFLAGS

GOFLAGS的值是Go语言的编译器参数。

## GOHOSTARCH

GOHOSTARCH的值是Go语言的编译环境的目标架构。

## GOHOSTOS

GOHOSTOS的值是Go语言的编译环境的目标操作系统。

## GOINSECURE

GOINSECURE的值是Go语言的内部安全机制的开关。它的值可以是off、on或auto。

## GOMODCACHE

GOMODCACHE的值是Go语言的模块缓存目录，默认情况下为$GOPATH/pkg/mod。

## GONOPROXY

GONOPROXY的值是Go语言的私有代理的包路径。

## GONOSUMER

GONOSUMER的值是Go语言的私有校验和数据库的包路径。

## GOOS

GOOS是Go语言的目标操作系统，例如linux、windows等。

## GOPATH

GOPATH是Go语言的工作区目录的绝对路径。我们需要显式的设置环境变量GOPATH。如果有多个工作区，那么多个工作区的绝对路径之间需要用分隔符分隔。在windows操作系统下，这个分隔符为“;”。在其它操作系统下，这个分隔符为“:”。注意，GOPATH的值不能与GOROOT的值相同。

## GOPRIVATE

GOPRIVATE的值是Go语言的私有模块的包路径。

## GOPROXY

GOPROXY的值是Go语言的代理服务器的地址。

## GOROOT

GOROOT的值是Go语言的安装目录的绝对路径。

## GOSUMDB

GOSUMDB的值是Go语言的校验和数据库的地址。

## GOTMPDIR

GOTMPDIR的值是Go语言的临时文件的输出路径，默认情况下为$GOPATH/pkg/mod。

## GOTOOLCHAIN

GOTOOLCHAIN允许您指定要使用的特定工具链版本。

## GOTOOLDIR

GOTOOLDIR的值是Go语言的工具目录的绝对路径。

## GOVCS

GOVCS的值是Go语言的版本控制系统。

## GOVERSION

GOVERSION的值是Go语言的版本号。

## GCCGO

GCCGO的值是Go语言的编译器参数。

## GOAMD64

GOAMD64的值是Go语言的编译器参数。





