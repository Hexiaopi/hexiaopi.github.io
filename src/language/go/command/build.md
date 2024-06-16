---
title: go-build
date: 2024-06-14
tag:
 - Go
 - 命令
category:
 - 编程语言
---

<!-- more -->

`go build`命令用于编译我们指定的源码文件或代码包以及它们的依赖包。

## 用法

```bash
go build [-o output] [build flags] [packages]
```

-o 用于指定输出二进制文件名称，例如：

```
go build -o app-user main.go
```
