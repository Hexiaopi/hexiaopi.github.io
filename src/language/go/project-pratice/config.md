---
title: Go项目配置获取
date: 2025-06-29
tag:
 - Go
 - 项目实践
category:
 - 编程语言
---

在Go项目中，可以使用多种方式来获取配置文件如：环境变量、命令行参数、配置文件等。

配置优先级通常是：命令行参数 > 环境变量 > 配置文件 > 默认值

本文通过`viper`和`pflag`两个高质量库从而实现上诉需求。

<!-- more -->

## 代码实践

程序入口

```go
package main

import (
	"log"
	"strings"

	"github.com/spf13/pflag"
	"github.com/spf13/viper"

	"viper-test/config"
)

// 配置优先级：命令行参数 > 环境变量 > 配置文件 > 默认值
func main() {
	configFilePath := pflag.String("config", "", "配置文件路径")

	pflag.String("http.host", "localhost", "服务主机地址")
	pflag.Int("http.port", 8080, "服务端口")
	pflag.Bool("http.debug", false, "是否启用调试模式")
	pflag.String("db.user", "root", "数据库用户名")
	pflag.String("db.password", "password", "数据库密码")
	pflag.String("db.host", "localhost", "数据库主机地址")
	pflag.Int("db.port", 3306, "数据库端口")
	pflag.String("db.database", "test", "数据库名称")

	// 解析命令行参数
	pflag.Parse()
	// 绑定命令行参数到viper
	viper.BindPFlags(pflag.CommandLine)

	// 设置配置文件信息
	if *configFilePath != "" {
		viper.SetConfigFile(*configFilePath) // 指定配置文件路径
	} else {
		viper.SetConfigName("config") // 配置文件名称（不带扩展名）
		viper.SetConfigType("yaml")   // 配置文件类型
		viper.AddConfigPath(".")      // 当前目录
	}

	// 从环境变量读取配置
	viper.SetEnvPrefix("APP")                              // 环境变量前缀
	viper.AutomaticEnv()                                   // 自动读取匹配的环境变量
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_")) // 替换点为下划线

	// 读取配置文件
	if err := viper.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); ok {
			log.Println("配置文件未找到，将使用命令行参数、环境变量和程序内置默认值（如未指定则使用默认值）")
		} else {
			log.Fatalf("无法读取配置文件: %v", err)
		}
	} else {
		log.Println("使用配置文件:", viper.ConfigFileUsed())
	}

	// 1.直接获取配置值
	log.Printf("主机: %s\n", viper.GetString("http.host"))
	log.Printf("端口: %d\n", viper.GetInt("http.port"))
	log.Printf("调试模式: %t\n", viper.GetBool("http.debug"))
	log.Printf("db 用户名: %s\n", viper.GetString("db.user"))
	log.Printf("db 密码: %s\n", viper.GetString("db.password"))
	log.Printf("db 主机: %s\n", viper.GetString("db.host"))
	log.Printf("db 端口: %d\n", viper.GetInt("db.port"))
	log.Printf("db 数据库名: %s\n", viper.GetString("db.database"))
	// 2.使用结构体获取配置值
	var c config.App
	if err := viper.Unmarshal(&c); err != nil {
		log.Fatalf("配置解析失败: %v", err)
	}
	log.Println("解析后的配置:", c)
}
```

其中config目录下面定义相关的配置

db.go定义数据库相关配置

```go
package config

type DB struct {
	User     string `mapstructure:"user" json:"user"`
	Password string `mapstructure:"password" json:"password"`
	Host     string `mapstructure:"host" json:"host"`
	Port     int    `mapstructure:"port" json:"port"`
	Database string `mapstructure:"database" json:"database"`
}
```

http.go定义http服务相关配置

```go
package config

type HTTP struct {
	Host  string `mapstructure:"host" json:"host"`
	Port  int    `mapstructure:"port" json:"port"`
	Debug bool   `mapstructure:"debug" json:"debug"`
}
```

config.go是整个项目的配置

```go
package config

type App struct {
	HTTP HTTP `mapstructure:"http" json:"http"`
	DB   DB   `mapstructure:"db" json:"db"`
}
```

## 测试验证

提供一个配置文件：config.yaml

```yaml
http:
  host: localhost
  port: 8080
  debug: true
mysql:
  user: admin
  password: password
  host: 127.0.0.1
  port: 3306
  database: test
```

### 验证是否能够读取配置文件配置

```shell
go run main.go
```

```text
2025/06/29 22:31:01 使用配置文件: /Users/hechangjie/code/test/viper-test/config.yaml
2025/06/29 22:31:01 主机: localhost
2025/06/29 22:31:01 端口: 8080
2025/06/29 22:31:01 调试模式: true
2025/06/29 22:31:01 db 用户名: root
2025/06/29 22:31:01 db 密码: password
2025/06/29 22:31:01 db 主机: localhost
2025/06/29 22:31:01 db 端口: 3306
2025/06/29 22:31:01 db 数据库名: test
2025/06/29 22:31:01 解析后的配置: {{localhost 8080 true} {root password localhost 3306 test}}
```

从上面的例子中，我们能够从配置文件中提取到我们想要的配置信息。

### 验证是否能够读取环境变量配置

这里我们修改了环境变量：`APP_DB_USER=admin`，看看是否能够生效

```shell
APP_DB_USER=admin go run main.go
```

```text
2025/06/29 22:32:42 使用配置文件: /Users/hechangjie/code/test/viper-test/config.yaml
2025/06/29 22:32:42 主机: localhost
2025/06/29 22:32:42 端口: 8080
2025/06/29 22:32:42 调试模式: true
2025/06/29 22:32:42 db 用户名: admin
2025/06/29 22:32:42 db 密码: password
2025/06/29 22:32:42 db 主机: localhost
2025/06/29 22:32:42 db 端口: 3306
2025/06/29 22:32:42 db 数据库名: test
2025/06/29 22:32:42 解析后的配置: {{localhost 8080 true} {admin password localhost 3306 test}}
```

从上面的示例中我们能够从环境变量中获取项目配置信息，并且环境变量的优先级要高于配置文件

### 验证是否能够读取命令行参数配置

这里我们修改了命令行参数：`--db.user=nobody`，同时使用环境变量`APP_DB_USER=admin`

```shell
APP_DB_USER=admin go run main.go --db.user=nobody
```

```text
2025/06/29 22:36:26 使用配置文件: /Users/hechangjie/code/test/viper-test/config.yaml
2025/06/29 22:36:26 主机: localhost
2025/06/29 22:36:26 端口: 8080
2025/06/29 22:36:26 调试模式: true
2025/06/29 22:36:26 db 用户名: nobody
2025/06/29 22:36:26 db 密码: password
2025/06/29 22:36:26 db 主机: localhost
2025/06/29 22:36:26 db 端口: 3306
2025/06/29 22:36:26 db 数据库名: test
2025/06/29 22:36:26 解析后的配置: {{localhost 8080 true} {nobody password localhost 3306 test}}
```

从上面的示例中，我们能从命令行参数获取配置信息，且命令行参数的优先级要高于环境变量。
