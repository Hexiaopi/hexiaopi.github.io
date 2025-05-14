---
title: Gin无侵入记录日志中间件
date: 2025-05-14
tag:
 - Go
 - Gin
 - middleware
 - 项目实践
category:
 - 编程语言
---

<!-- more -->

在项目中我们经常需要记录日志，例如：请求包、返回包、请求路径、请求方法、耗时等。但`gin.ResponseWriter`的并不支持获取返回包内容。很多时候需要业务代码里面去记录，对业务代码有侵入。本文通过中间件的方式，无侵入记录HTTP日志。

## 代理模式

既然`gin.ResponseWriter`不支持获取返回包内容，我们很容易想到使用代理模式来支持该功能。

```go
type ResponseWriterProxy struct {
    gin.ResponseWriter
    body bytes.Buffer
}

func (w *ResponseWriterProxy) Write(b []byte) (int, error) {
    w.body.Write(b)
    return w.ResponseWriter.Write(b)
}
```

这里我们定义了一个`ResponseWriterProxy`结构体，它包含一个`gin.ResponseWriter`和一个`body`。这个`body`就用来存放返回包内容。
此外我们重写`Write`方法中，我们先将数据写入`body`，然后再写入`gin.ResponseWriter`。

## 中间件逻辑

```go{5-7,10-14}
func Logger() gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		//记录请求包
		buf, _ := io.ReadAll(c.Request.Body)
		rdr := io.NopCloser(bytes.NewBuffer(buf))
		c.Request.Body = rdr //rewrite

		//记录返回包
		wc := &ResponseWriterProxy{
			ResponseWriter: c.Writer,
			body:           bytes.Buffer{},
		}
		c.Writer = wc

		c.Next()

		defer func() {
			logger.Info("receive request",
				zap.String("path", c.Request.URL.Path),
				zap.String("method", c.Request.Method),
				zap.String("req", string(buf)),
				zap.String("resp", wc.body.String()),
				zap.Int("status", wc.Status()),
				zap.String("utm", time.Since(start).String()),
			)
		}()
	}
}
```

其中：

- 5-7行：我们读取完请求包，需要重新写入`c.Request.Body`，因为`io.ReadAll`会读取完`c.Request.Body`，导致后续无法读取。
- 10-14行：我们创建一个`ResponseWriterProxy`，并赋值给`c.Writer`，这样后续的`c.Writer.Write`就会写入到`wc.body`中。

## 集成中间件

```go
	apiGroup := router.Group("/api")
	apiGroup.Use(middleware.Logger())
```

这样我们就可以在`api`开头的接口记录日志。并且对业务代码无侵入。
