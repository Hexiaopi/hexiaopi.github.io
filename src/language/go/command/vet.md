---
title: go-vet
date: 2024-06-14
tag:
 - Go
 - 命令
category:
 - 编程语言
---

<!-- more -->

`go vet`命令用于检查Go代码中的错误和潜在的性能问题。

## 语法

```bash
go vet [-n] [-x] [build flags] [packages]
```

## 选项

- `-n`：打印出需要检查的包名，但不执行检查。
- `-x`：打印出需要检查的包名和文件名，但不执行检查。
