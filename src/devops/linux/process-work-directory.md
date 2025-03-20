---
title: 如何查看进程工作目录
date: 2025-03-20
tag:
 - linux
 - docker
category:
 - devops
---

工作中我们经常会遇到需要查看进程工作目录的情况，例如：停止进程修改配置并重新启动。

但由于很多开发随意部署自己的应用，或者各种不规范原因，导致很难找到进程工作目录。

常见的办法是通过搜索命令，但如果不知道应用名称呢？

本文采用通过进程号的方式来查找进程工作目录。

<!-- more -->

## 查看进程工作目录

### 首先获取进程号

先通过`ps`命令查看进程信息，例如：

```bash
ps -ef | grep gateway.jar
```

通过ps命令我们可以拿到进程号，例如：

```bash
root     29716     1  0  2024 ?        12:12:39 java -jar gateway.jar
```

对于不知道进程名称的进程，我们可以通过其他方式获取进程号，例如通过监听的端口号获取进程号：

```bash
netstat -tunlp | grep 8080
```

### 通过进程号查看进程工作目录

通过进程号我们可以通过`pwdx`命令查看进程工作目录，例如：


```bash
pwdx 29716
```

输出结果如下：

```bash
29716 /home/admin/gateway
```

其中：`/home/admin/gateway`就是进程工作目录。

`pwdx`命令本质上是调用`/proc`目录下的文件，所以我们也可以直接查看`/proc`目录下的文件，例如：

```bash
ls -l /proc/29716/cwd
```

输出结果如下：

```bash
lrwxrwxrwx 1 root root 0 2025-03-20 12:12 /proc/29716/cwd -> /home/admin/gateway
```

## docker环境查看进程目录

对于直接启动的docker命令，我们只能寄希望通过挂载参数来查看对应的配置文件。

对于`docker-compose`启动的容器，我们可以先找到对应的`docker-compose.yml`文件，阅读它如何组织docker容器。

我们可以通过`docker inspect`命令来查看`docker-compose`文件

```bash
docker inspect docker-api-1
```

找到Config下Labels参数

```{9-10}
...
"Labels": {
                "com.docker.compose.config-hash": "360be945927beb9c80c9b34ecc2262843a52da06cbfa2293334dbc3762e8cce2",
                "com.docker.compose.container-number": "1",
                "com.docker.compose.depends_on": "db:service_started:false,redis:service_started:false",
                "com.docker.compose.image": "sha256:257c2273f5fda80c2861eb358caf91ecd995de3bb97aa07aa53406695d36e756",
                "com.docker.compose.oneoff": "False",
                "com.docker.compose.project": "docker",
                "com.docker.compose.project.config_files": "D:\\code\\github\\dify\\docker\\docker-compose.yaml",
                "com.docker.compose.project.working_dir": "D:\\code\\github\\dify\\docker",
...
```

通过`config_files`和`working_dir`我们可以找到对应的`docker-compose`文件和工作目录。