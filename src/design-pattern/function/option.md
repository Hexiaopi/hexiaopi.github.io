---
title: 选项模式
date: 2023-08-06
tag:
 - Go
 - 函数模式
category:
 - 设计模式
---

::: tip
由于Go语言不支持重载函数，当我们需要使用不同的方式构建对象时，不得不使用多个构造函数进行初始化。
:::

## 对于多参数的类的初始化遇到哪些困境？

例如：HTTP Server的初始化

```go
type Server struct {
	Addr     string
	Port     int
	Protocol string
	Timeout  time.Duration
	MaxConns int
	TLS      *tls.Config
}
```

为了支持不同功能的Server，我们不得不通过不同的函数命名和参数，构造初始化函数。

```go
// NewTLSServer 带TLS的初始化函数
func NewTLSServer(addr string, port int, tls *tls.Config) (*Server, error) {
	return &Server{
		Addr:     addr,
		Port:     port,
		Protocol: "tcp",
		Timeout:  time.Second * 30,
		MaxConns: 100,
		TLS:      tls,
	}, nil
}

// NewServerWithTimeout 带超时时间的初始化函数
func NewServerWithTimeout(addr string, port int, timeout time.Duration) (*Server, error) {
	return &Server{
		Addr:     addr,
		Port:     port,
		Protocol: "tcp",
		Timeout:  timeout,
		MaxConns: 100,
		TLS:      nil,
	}, nil
}

// NewTLSServerWithMaxConnAndTimeout 支持TLS和最大连接数和超时时间的初始化函数
func NewTLSServerWithMaxConnAndTimeout(addr string, port int, maxconns int, timeout time.Duration, tls *tls.Config) (*Server, error) {
	return &Server{
		Addr:     addr,
		Port:     port,
		Protocol: "tcp",
		Timeout:  timeout,
		MaxConns: maxconns,
		TLS:      tls,
	}, nil
}
```

一圈写下来，发现这仅不禁无法列举所有的功能场景，而且代码冗余非常多。

## 那么Option(选项模式)是如何解决这个问题的呢？

### 首先：定义一个Option函数，参数为Server指针

```go
type Option func(*Server)
```

如果关注错误的话，可以定义如下

```go
type Option func(*Server) error
```

### 其次：定义各种初始化选项函数，通常返回上文定义的Option

```go
func WithProtocol(protocol string) Option {
	return func(s *Server) {
		s.Protocol = protocol
	}
}

func WithTimeout(timeout time.Duration) Option {
	return func(s *Server) {
		s.Timeout = timeout
	}
}

func WithMaxConns(maxconns int) Option {
	return func(s *Server) {
		s.MaxConns = maxconns
	}
}

func WihtTLS(tls *tls.Config) Option {
	return func(s *Server) {
		s.TLS = tls
	}
}
```

### 通常：我们定义一个全局的初始化函数，使用Go语言可变参数Option

```go{10-12}
func NewServer(addr string, port int, options ...Option) (*Server, error) {
	srv := Server{
		Addr:     addr,
		Port:     port,
		Protocol: "tcp",
		Timeout:  time.Second * 30,
		MaxConns: 100,
		TLS:      nil,
	}
	for _, option := range options {
		option(&srv)
	}
	//...
	return &srv, nil
}
```

### 最后，我们看看最终效果

```go
s1, _ := NewServer("localhost", 1024) //默认的Server
s2, _ := NewServer("localhost", 2048, WithProtocol("udp")) //协议为udp的Server
s3, _ := NewServer("0.0.0.0", 8080, WithTimeout(300*time.Second), WithMaxConns(1000)) //支持超时时间和最大连接的Server
```

## 总结

由于Go语言函数不支持重载，因此在多参数的类的初始化中，我们遇到初始化函数冗余问题，
我们可以通过Option(选项模式)，可以很自由的定义类的初始化，解决前面遇到的问题。

这里本质上使用了Go语言以下特点：

- 闭包，`With...`等Option的定义，通过闭包的方式，扩展了Option的场景;
- 可变参数，`(options ...option)`，通过可变参数，我们可以自由选择Option;

## 参考链接

[GO 编程模式：FUNCTIONAL OPTIONS](https://coolshell.cn/articles/21146.html)