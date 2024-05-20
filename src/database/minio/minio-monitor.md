---
title: Minio监控
date: 2024-04-18
tag:
 - Minio
 - 监控
category:
 - 数据存储
---

<!-- more -->

## Minio监控

运行Minio Client(mc)容器

```shell
docker run -it --entrypoint=/bin/sh minio/mc
```

设置别名

```shell
mc alias set minio http://172.100.2.65:9000 minioadmin minioadmin
```

输出结果：

```
mc: Configuration written to `/root/.mc/config.json`. Please update your access credentials.
mc: Successfully created `/root/.mc/share`.
mc: Initialized share uploads `/root/.mc/share/uploads.json` file.
mc: Initialized share downloads `/root/.mc/share/downloads.json` file.
Added `minio` successfully.
```

生成 Prometheus 抓取目标配置

```shell
mc admin prometheus generate minio
```

输出结果：

```shell
scrape_configs:
- job_name: minio-job
  bearer_token: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwcm9tZXRoZXVzIiwic3ViIjoibWluaW9hZG1pbiIsImV4cCI6NDg2NzAyNTgyOX0.QgEjjQvA1ieHhM8sxMxMhYGGOcmsN4dQT1lIcOHGe5Lo4ZTeTsgzKAq65HPBkFQ1RayMzolQ_R2J3aByVe_ZNw
  metrics_path: /minio/v2/metrics/cluster
  scheme: http
  static_configs:
  - targets: ['172.100.2.65:9000']
```

我们可以看到是通过`bearer_token`的方式获取指标，将上面生成的抓取目标配置同步到Prometheus

## minio-dashboard

![minio-dashboard](./images/minio-dashboard.png)

## minio常用监控语句

### minio集群节点离线

```promQL
minio_cluster_nodes_offline_total > 0
```

### minio集群磁盘离线

```promQL
minio_cluster_drive_offline_total > 0
```

## 参考文献

[Prometheus官方文档](https://min.io/docs/minio/linux/operations/monitoring/collect-minio-metrics-using-prometheus.html?ref=docs-redirect)

[minio部署及监控](https://www.cnblogs.com/zmh520/p/17771438.html)