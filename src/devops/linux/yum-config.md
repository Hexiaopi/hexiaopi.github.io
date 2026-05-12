---
title: Linux配置yum源
date: 2025-02-27
tag:
 - Linux
 - yum
category:
 - devops
---

Linux下载的yum源是国外的，下载速度较慢，我们可以配置国内的yum源，提高下载速度。

本文以Centos 7为例，介绍如何配置Centos和epel阿里云yum源。

<!-- more -->

## 配置Centos yum源

> Centos yum源是Centos官方维护的与系统稳定运行和基本功能相关的软件包，注重系统的稳定性和兼容性。

### 备份原yum源

```bash
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

### 下载阿里云yum源

```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

### 清除缓存

```bash
yum clean all
```

### 生成缓存

```bash
yum makecache
```

### 查看yum源

```bash
yum repolist
```

## 配置epel yum源

> epel(Extra Packages for Enterprise Linux)是由Redora社区维护的软件包。这些软件涵盖了各种领域，如Web服务器、数据库、编程语言等。

### 备份原yum源

```bash
mv /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel.repo.backup
```

### 下载阿里云yum源

```bash
wget -O /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo
```

### 清除缓存

```bash
yum clean all
```

### 生成缓存

```bash
yum makecache
```

#### 查看yum源

```bash
yum repolist
```
