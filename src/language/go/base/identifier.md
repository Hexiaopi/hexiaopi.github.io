---
title: 命名规则
date: 2022-05-03
order: 4
tag:
 - Go
 - 规范
 - 基础
category:
 - 编程语言
---

<!-- more -->

## 命名规则

> Go语言中用来对符号常量、变量、函数、数组、切片、通道等数据对象命名的有效字符序列统称为标识符（Identifier）即数据对象的名字。

Go语言的命名规则：

- 变量名必须以字母或下划线开始；
- 必须使用英文字母、数字、下划线组成，不能出现空格或制表符；
- 不能使用Go语言内置关键字和保留字，如：go、func、break、defer等；
- 大小写敏感，比如`x`和`X`是两个不一样的标识符；
