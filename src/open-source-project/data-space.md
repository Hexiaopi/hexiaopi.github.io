---
title: 通用的后台管理系统
date: 2024-12-10
tag:
 - 开源项目
 - Go
 - Vue
category:
 - 开源项目
---

使用Go+Vue开发的通用后台管理系统，支持用户登录和日志，部门管理，用户管理，角色管理，菜单管理。

<!-- more -->

[![Go Report Card](https://goreportcard.com/badge/github.com/hexiaopi/data-space)](https://goreportcard.com/report/github.com/hexiaopi/data-space)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Go Version](https://img.shields.io/github/go-mod/go-version/hexiaopi/data-space)](https://github.com/Hexiaopi/data-space)

## 功能

- 用户登录和日志
- 部门管理
- 用户管理
- 角色管理
- 菜单管理

## 🛠 技术栈

### 前端

- vue3
- vite
- pina
- element-plus

### 后端

- go
- mysql
- gin
- opentelemetry
- prometheus metric

## 安装

### 前端

```bash
  cd web
  npm install
```

### 后端

```bash
  go mod tidy
```

## 本地运行

### 前端

```bash
  cd web
  npm run dev
```

### 后端

```bash
  go run cmd/root.go
```

## 截图

![login](./images/login.png)
![home](./images/home.png)
![depart](./images/depart.png)
![user](./images/user.png)
![role](./images/role.png)
![role-menu](./images/role_menu.png)
![menu](./images/menu.png)
![log](./images/log.png)
![jaeger-all](./images/jaeger_all.png)
![jaeger-detail](./images/jaeger_detail.png)
![swagger](./images/swagger.png)
![metrics](./images/metrics.png)

## 收藏历史

[![Star History Chart](https://api.star-history.com/svg?repos=hexiaopi/data-space&type=Date)](https://star-history.com/#hexiaopi/data-space&Date)

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)
