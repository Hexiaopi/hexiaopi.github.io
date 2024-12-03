---
title: Docker搭建PostgreSQL集群
date: 2024-12-03
tag:
 - PostgreSQL
category:
 - 数据存储
---


## Docker-Compose文件

```yaml
version: '3.8'

services:
  pg-0:
    image: bitnami/postgresql-repmgr:14
    ports:
      - 5433:5432
    volumes:
      - ./pg_0_data:/bitnami/postgresql
    environment:
      - TZ=Asia/Shanghai
      - POSTGRESQL_POSTGRES_PASSWORD=adminpassword
      - POSTGRESQL_USERNAME=customuser
      - POSTGRESQL_PASSWORD=custompassword
      - POSTGRESQL_DATABASE=customdatabase
      - REPMGR_PASSWORD=repmgrpassword
      - REPMGR_PRIMARY_HOST=pg-0
      - REPMGR_PARTNER_NODES=pg-0,pg-1
      - REPMGR_NODE_NAME=pg-0
      - REPMGR_NODE_NETWORK_NAME=pg-0

  pg-1:
    image: bitnami/postgresql-repmgr:14
    ports:
      - 5434:5432
    volumes:
      - ./pg_1_data:/bitnami/postgresql
    environment:
      - TZ=Asia/Shanghai
      - POSTGRESQL_POSTGRES_PASSWORD=adminpassword
      - POSTGRESQL_USERNAME=customuser
      - POSTGRESQL_PASSWORD=custompassword
      - POSTGRESQL_DATABASE=customdatabase
      - REPMGR_PASSWORD=repmgrpassword
      - REPMGR_PRIMARY_HOST=pg-0
      - REPMGR_PARTNER_NODES=pg-0,pg-1
      - REPMGR_NODE_NAME=pg-1
      - REPMGR_NODE_NETWORK_NAME=pg-1

  pgpool:
    image: bitnami/pgpool:4.5.1
    ports:
      - 5432:5432
    environment:
      - TZ=Asia/Shanghai
      - PGPOOL_BACKEND_NODES=0:pg-0:5432,1:pg-1:5432
      - PGPOOL_SR_CHECK_USER=customuser
      - PGPOOL_SR_CHECK_PASSWORD=custompassword
      - PGPOOL_ENABLE_LDAP=no
      - PGPOOL_POSTGRES_USERNAME=postgres
      - PGPOOL_POSTGRES_PASSWORD=adminpassword
      - PGPOOL_ADMIN_USERNAME=admin
      - PGPOOL_ADMIN_PASSWORD=adminpassword
    healthcheck:
      test: ["CMD", "/opt/bitnami/scripts/pgpool/healthcheck.sh"]
      interval: 10s
      timeout: 5s
      retries: 5

```