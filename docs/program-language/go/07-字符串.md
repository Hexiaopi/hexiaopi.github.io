[TOC]

Go语言的字符串（String）

## 1 定义

**关键字定义：**string

**零值：**“”

```go
var str string
```

👣

- 字符串的内容可以用类似数组下标的方式获取，例如str[0]，但与数组不同，字符串的内容初始化后不可修改，只能重新构造新的字符串，带来的好处是线程安全；
- Go语言支持UTF-8格式编码，因此字符串中字符可以是ASCII字符，也可以是Unicode字符；
- Go语言字符串可使用内置函数`len()`来计算ASCII字符的长度，可以使用`utf8.RuneCountInString()`来计算Unicode字符的长度；

## 2 操作

字符串支持一些简单的运算或操作，如下：

|  操作  |      含义      |     示例      |   结果   |
| :----: | :------------: | :-----------: | :------: |
|  x+y   |   字符串连接   |  "Go"+"lang"  | "Golang" |
| len(x) | 计算字符串长度 | len("Golang") |    6     |
| str[i] |     取字符     |  "Golang"[3]  |    a     |

## 3 遍历

由于字符可以使用两种方式表示：byte来表示ASCII字符，rune来表示Unicode字符；因此Go字符串遍历也支持两种方式：byte和rune

### 3.1 byte遍历

```go
for i:=0;i<len(str);i++{
  fmt.Println(i,string(str[i]))
}
```

### 3.2 rune遍历

```go
for i,s:=range str{
  fmt.Println(i,string(s))
}
```

