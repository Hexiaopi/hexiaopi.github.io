---
title: 使用Makefile和Helm-Dashobard两步实现k8s服务多环境更新
date: 2024-05-12
tag:
 - helm
 - k8s
category:
 - devops
---

## 背景

在开发过程中，我们经常需要频繁的更新k8s服务，如果每次更新都需要手动执行一系列的命令，那将会非常繁琐。因此，我们需要一种自动化的方式来更新k8s服务。

## 解决方案

使用Makefile来定义更新k8s服务的流程，并使用自动化工具（如git、docker等）来执行Makefile中的命令。这样，每次更新服务时，只需要执行一条命令即可完成更新操作。

<!-- more -->

## 具体实现

### 定义基础的变量

```bash
APP_NAME=hhm-disposal
DOCKER_HARBOR=127.0.0.1:8760
GIT_VERSION = $(shell git describe --tags)
envs = prod pre
```

- DOCKER_HARBOR是镜像仓库docker hub的地址
- envs是多个环境，因为我们在k8s环境部署多个环境，如生产环境、预发布环境等
- GIT_VERSION是当前git仓库的版本号

### docker build

构建本地镜像

```
docker-build:
	docker build -t $(DOCKER_HARBOR)/idata/$(APP_NAME):$(GIT_VERSION) .
```


### docker push

推送本地镜像至docker hub

```
docker-push:
	docker push $(DOCKER_HARBOR)/idata/$(APP_NAME):$(GIT_VERSION)
```

### helm package

helm打包本地chart包，由于我们要基于一个docker镜像部署在不同的环境，因此这里会有多个环境的chart包

```
helm-package:
	@for env in $(envs);\
		do echo 'helm package' $$env;\
		cp deployments/disposal/env/$$env/values.yaml deployments/disposal/values.yaml;\
		cp deployments/disposal/env/$$env/Chart.yaml deployments/disposal/Chart.yaml;\
		cp config/config.$$env.toml deployments/disposal/config/config.local.toml;\
		helm lint --strict deployments/disposal;\
		helm package deployments/disposal --version $(GIT_VERSION) --app-version $(GIT_VERSION);\
	done
```

### helm push

helm推送chart包至chart仓库

```
helm-push: 
	@for env in $(envs);\
		do echo 'helm push' $$env;\
		helm cm-push disposal-$$env-$(GIT_VERSION).tgz hhm;\
	dones
```

### helm clean

清理本地的chart包文件

```
helm-clean: 
	@for env in $(envs);\
		do echo 'helm clean' $$env;\
		rm -rf disposal-$$env-$(GIT_VERSION).tgz;\
	done
```

### 串通以上命令

```
k8s: docker-build docker-push helm-package helm-push helm-clean
```

这样我们只需要执行`make k8s`就可以将这些繁杂的命令串通起来。


## 两步完成k8s服务更新

第一步：通过Makefile的`make k8s`实现镜像的构建、镜像的推送、chart包的构建、chart包的推送；
第二步：通过helm-dashboard进行服务的更新；

## 沉淀的Makefile脚本

```
APP_NAME=hhm-disposal
DOCKER_HARBOR=127.0.0.1:8760
GIT_VERSION = $(shell git describe --tags)
envs = prod pre

version:
	@echo $(GIT_VERSION)

k8s: docker-build docker-push helm-package helm-push helm-clean

lint:
	golangci-lint run ./...

build:
	GOOS=linux go build 

clean:
	go clean

swagger:
	swag init

docker-build:
	docker build -t $(DOCKER_HARBOR)/idata/$(APP_NAME):$(GIT_VERSION) .

docker-push:
	docker push $(DOCKER_HARBOR)/idata/$(APP_NAME):$(GIT_VERSION)

helm-package:
	@for env in $(envs);\
		do echo 'helm package' $$env;\
		cp deployments/disposal/env/$$env/values.yaml deployments/disposal/values.yaml;\
		cp deployments/disposal/env/$$env/Chart.yaml deployments/disposal/Chart.yaml;\
		cp config/config.$$env.toml deployments/disposal/config/config.local.toml;\
		helm lint --strict deployments/disposal;\
		helm package deployments/disposal --version $(GIT_VERSION) --app-version $(GIT_VERSION);\
	done

helm-push: 
	@for env in $(envs);\
		do echo 'helm push' $$env;\
		helm cm-push disposal-$$env-$(GIT_VERSION).tgz hhm;\
	done

helm-clean: 
	@for env in $(envs);\
		do echo 'helm clean' $$env;\
		rm -rf disposal-$$env-$(GIT_VERSION).tgz;\
	done
```