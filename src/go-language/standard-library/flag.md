---
title: flag使用
date: 2023-09-05
tag:
 - Go
 - 标准库
category:
 - Go语言
---

> flag库实现命令行参数解析

## 简单用法

```go
package main

import (
	"flag"
	"fmt"
	"time"
)

// Example1：flag.String 返回指针类型字符串
var flagStrA = flag.String("str-a", "str-a", "flag test *string")

// Example2：如果期望定义字符串类型，可以通过init函数初始化
var flagStrB string

func init() {
	// flag.StringVar可以绑定已有的变量
	flag.StringVar(&flagStrB, "str-b", "str-b", "flag test string")
}

// Example3：int类型变量
var flagInt = flag.Int("int", 1, "flag test *int")

// Example4: bool类型变量，注意使用
var flagBool = flag.Bool("bool", false, "flag test *bool")

// Example5：duration类型变量
var flagDuration = flag.Duration("duration", time.Minute*1, "flag test duration")

func main() {
	flag.Parse()
	fmt.Println(*flagStrA)
	fmt.Println(flagStrB)
	fmt.Println(*flagInt)
	fmt.Println(*flagBool)
	fmt.Println(*flagDuration)
}
```

::: tip falg参数使用语法
-flag    // 破折号，使用默认值
--flag   // 双破折号
-flag=x  // 指定参数值
-flag x  // non-boolean flags only
:::

### 注意事项

#### bool类型不可使用：-flag x形式

::: warning

```shell
go run flag-demo1.go -bool false
```

执行结果如下：

```text
str-a
str-b
1
true
1m0s
```

:::

#### bool类型：-flag形式，认为true

::: warning

```shell
go run flag-demo1.go -bool
```

执行结果如下：

```text
str-a
str-b
1
true
1m0s
```

:::

#### bool类型可以使用以下字面量

::: tip
1, 0, t, f, T, F, true, false, TRUE, FALSE, True, False

```shell
go run flag-demo1.go -bool=1
```

执行结果如下：

```text
str-a
str-b
1
true
1m0s
```

:::
