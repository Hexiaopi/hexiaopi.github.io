---
title: cadvisor k8s 部署
date: 2024-01-15
tag:
 - prometheus
 - k8s
category:
 - devops
---

cadvisor 是谷歌公司用来分析运行中的 Docker 容器的资源占用以及性能特性的工具，简单来说是用于监控 Docker 容器。


<!-- more -->

## k8s部署

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: cadvisor
  namespace: monitor
spec:
  selector:
    matchLabels:
      app: cAdvisor
  template:
    metadata:
      labels:
        app: cAdvisor
    spec:
      tolerations:    #污点容忍,忽略master的NoSchedule
        - effect: NoSchedule
          key: node-role.kubernetes.io/master
      hostNetwork: true
      restartPolicy: Always
      containers:
      - name: cadvisor
        image: google/cadvisor:latest
        imagePullPolicy: IfNotPresent 
        ports:
        - containerPort: 8080
        volumeMounts:
          - name: root
            mountPath: /rootfs
          - name: run
            mountPath: /var/run
          - name: sys
            mountPath: /sys
          - name: docker
            mountPath: /var/lib/containerd
      volumes:
      - name: root
        hostPath:
          path: /
      - name: run
        hostPath:
          path: /var/run
      - name: sys
        hostPath:
          path: /sys
      - name: docker
        hostPath:
          path: /var/lib/containerd
```