---
title: Docker如何批量加载镜像
date: 2025-02-13
tag:
 - Docker
category:
 - devops
---

在使用Docker部署服务时，我们通常需要加载大量的镜像。如果手动一个一个地加载，不仅费时费力，而且容易出错。因此，我们可以使用shell脚本实现批量加载镜像的功能。

<!-- more -->

## 批量加载镜像的步骤

### 编写shell脚本

首先，我们需要编写一个shell脚本，用于批量加载镜像。脚本的内容如下：

```shell
#!/bin/bash

# 定义要遍历的目录
IMAGE_DIR="images"

# 检查目录是否存在
if [ ! -d "$IMAGE_DIR" ]; then
    echo "目录 $IMAGE_DIR 不存在。"
    exit 1
fi

# 遍历目录下所有以 .tar 或 .tar.gz 结尾的文件
for image_file in "$IMAGE_DIR"/*.{tar,tar.gz}; do
    if [ -f "$image_file" ]; then
        echo "正在加载镜像文件: $image_file"
        docker load -i "$image_file"
        if [ $? -eq 0 ]; then
            echo "镜像 $image_file 加载成功。"
        else
            echo "镜像 $image_file 加载失败。"
        fi
    fi
done
```

这里我们将所有的镜像文件放在了一个名为`images`的目录下。

### 执行shell脚本

将脚本保存为`load_images.sh`，然后在终端中执行以下命令：

```shell
chmod +x load_images.sh
./load_images.sh
```

脚本会遍历`images`目录下的所有以`.tar`或`.tar.gz`结尾的文件，并依次加载到Docker中。
