---
title: Docker修改默认存储位置
date: 2024-12-10
tag:
 - Docker
category:
 - devops
---

<!-- more -->

## 问题描述

Docker 容器中，默认的存储位置为`/var/lib/docker`，但是由于使用的是系统盘，需要改为数据盘，例如将存储位置修改为`/data/docker`。

## 解决步骤

### 停止Docker服务

```bash
sudo systemctl stop docker
```

### 移动容器数据

```bash
sudo mv /var/lib/docker /data/docker
```

### 建立软链接

```bash
sudo ln -s /data/docker /var/lib/docker
```

### 启动Docker服务

```bash
sudo systemctl start docker
```

## 参考资料

- [修改docker的默认存储位置及镜像存储位置](https://www.cnblogs.com/JasonCeng/p/15728592.html)