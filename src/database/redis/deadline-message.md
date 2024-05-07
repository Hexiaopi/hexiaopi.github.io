---
title: 基于Redis实现消息到期提醒
icon: envelope
date: 2024-05-07
tag:
 - Redis
category:
 - 数据库
---

> 业务上需求，希望实现一个消息到期提醒的功能，比如：提前两个小时发送预警信息、到期发送超期信息等。
>
> 实现该功能有很多技术方案，本文探讨：如何通过Redis实现消息到期提醒

<!-- more -->

## 背景知识

Redis键空间通知（Keyspace Notifications）是Redis 2.8.0版本引入的一种消息通知机制，用于订阅和发布Redis键空间事件。

本质上：Redis键空间通知通过发布/订阅（pub/sub）模式实现，当某些事件发生时，Redis会自动发布消息，如果有客户端订阅了这些消息，就会收到该消息。

键空间通知会发送两种不同类型的事件消息：

- keyspace：键空间通知，当键空间中的键被创建、删除、过期、修改等操作时触发。
- keyevent：键事件通知，当键空间中的键被创建、删除、过期、修改等操作时触发。

例如：对数据库`0`中名为`mykey`的键上执行删除操作，将触发两条消息通知，等同于：

```
PUBLISH __keyspace@0__:mykey del
PUBLISH __keyevent@0__:del "mykey"
```

格式为：`__{keyspace|keyevent}@{db}__:{KeyPattern|OpsType}`, 其中：

- `__keyspace@{db}__:{KeyPattern}`：键空间通知前缀，表示该消息是键空间通知消息。
- `__keyevent@{db}__:{OpsType}`：键事件通知前缀，表示该消息是键事件通知消息。
- `{db}`：数据库编号，表示该消息是哪个数据库的消息。
- `{KeyPattern}`：键模式，支持通配符*。
- `{OpsType}`:表示操作类型，比如：expired


::: warning
由于本质上基于消息订阅，因此，当有客户端未订阅该消息或者断开连接期间，消息会丢失。
:::


## 配置修改

> 对于键空间通知，需要修改Redis配置文件，启用键空间通知功能。

```
notify-keyspace-events Kx
```

配置含义：

- K：表示键空间通知，以`__keyspace@<db>__`前缀发布消息。
- E：表示键事件通知，以`__keyevent@<db>__`前缀发布消息。
- g：DEL、EXPIRE、RENAME等类型的事件发生时发布消息。
- $：字符串类型键值对发生变化时发布消息。
- l：列表类型键值对发生变化时发布消息。
- s：集合类型键值对发生变化时发布消息。
- h：哈希类型键值对发生变化时发布消息。
- z：有序集合类型键值对发生变化时发布消息。
- t: 流类型键值对发送变化时发布消息。
- x：过期事件：每当有过期键被删除时发送。
- e: 驱逐事件：每当有键因为maxmemory政策而被删除时发送。
- m: 未命中事件，每当有键没有命中时发送。
- A：等价于：g$lshztxed，相当于是all。

例如：`Kx`表示当键过期时触发键空间事件通知。

```
127.0.0.1:6379> config get notify-keyspace-events
1) "notify-keyspace-events"
2) ""
127.0.0.1:6379> config set notify-keyspace-events Kx
OK
127.0.0.1:6379> config get notify-keyspace-events
1) "notify-keyspace-events"
2) "xK"
127.0.0.1:6379>
```

## 测试

开启第一个cli，订阅db0的keyspace消息：

```
127.0.0.1:6379> psubscribe __keyspace@0__:myid#*
Reading messages... (press Ctrl-C to quit)
1) "psubscribe"
2) "__keyspace@0__:myid#*"
3) (integer) 1
```

开启第二个cli，触发键过期事件

```
127.0.0.1:6379> setex myid#123 10 xxx
OK
127.0.0.1:6379>
```

再看第一个cli，10秒之后就收到消息：

```{6-10}
127.0.0.1:6379> psubscribe __keyspace@0__:myid#*
Reading messages... (press Ctrl-C to quit)
1) "psubscribe"
2) "__keyspace@0__:myid#*"
3) (integer) 1
1) "pmessage"
2) "__keyspace@0__:myid#*"
3) "__keyspace@0__:myid#123"
4) "expired"
```

## 参考文献

- [官方文档](https://redis.io/docs/latest/develop/use/keyspace-notifications/)
- [golang：redis订阅键空间过期消息](https://blog.csdn.net/zhizhengguan/article/details/90575438)
