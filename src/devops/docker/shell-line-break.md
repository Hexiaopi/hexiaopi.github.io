---
title: 容器执行报"no such file or directory"问题
date: 2024-03-18
tag:
 - docker
category:
 - devops
---


同事运行docker镜像时，控制台报错"no such file or directory"，但是查看该文件确实存在，本文记录该问题的定位和解决。

<!-- more -->

### 查看镜像使用方式

```yaml
COPY xxx/run.sh /run.sh
# RUN命令
RUN chmod 777 /run.sh
# 执行命令
ENTRYPOINT ["/run.sh"]
```

这里查看dockerfile，采用的是脚本方式启动服务进程，使用方式上并没有什么问题

### 根据报错信息查看文件是否存在

通过新增RUN命令:`RUN ls -al`,打印当前路径文件的方式确认是有`run.sh`脚本文件

### 检查脚本文件

对比了服务器的脚本文件和开发使用的脚本文件，仔细观察发现脚本文件唯一不同的是换行符不一样
- 开发使用的是windows系统，换行符为**CRLF**,对应为:`\r\n`
- 服务器使用的linux系统，换行符为**LF**，对应为:`\n`

### 关键问题

脚本第一行
```sh
#!/bin/bash
```
表明使用`/bin/bash`来解释脚本，但如何后面有windows的换行符导致无法识别，因此会报错：“no such file or directory”

### 问题结局

通过修改`run.sh`的换行符为**LF**，问题得以解决。

::: tip
代码提交时，将文件换行符设置为LF格式。
:::