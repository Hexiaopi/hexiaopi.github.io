---
title: Gin无侵入记录指标中间件
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

在Gin框架如何记录HTTP指标，例如：请求次数，请求耗时，并发数等。本文通过中间件(middleware)的方式集成，减少对业务代码的耦合。

## 定义Prometheus指标

```go
var (
	HttpRequestCounter     *prometheus.CounterVec
	HttpRequestLatency     *prometheus.HistogramVec
	HttpRequestConcurrency *prometheus.GaugeVec
)
```

其中：

- HttpRequestCounter：记录请求次数
- HttpRequestLatency：记录请求耗时
- HttpRequestConcurrency：记录并发数

## 初始化指标

```go
func init() {
	HttpRequestCounter = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "http_request_counter",
		Help: "each http request counter",
	}, []string{"path", "method", "status"})

	HttpRequestLatency = promauto.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "http_request_latency_sec",
		Help:    "http history request duration distribution",
		Buckets: []float64{0.05, 0.2, 0.5, 1, 5, 10, 30},
	}, []string{"path", "method"})

	HttpRequestConcurrency = promauto.NewGaugeVec(prometheus.GaugeOpts{
		Name: "http_request_in_flight",
		Help: "http request concurrency number",
	}, []string{"path", "method"})
}
```

## 中间件逻辑

```go
func Metrics() gin.HandlerFunc {
	return func(c *gin.Context) {
		path := c.Request.URL.Path
		method := c.Request.Method
		HttpRequestConcurrency.WithLabelValues(path, method).Inc()
		defer func() {
			HttpRequestConcurrency.WithLabelValues(path, method).Dec()
		}()
		start := time.Now()
		c.Next()
		duration := time.Since(start)
		HttpRequestLatency.WithLabelValues(path, method).Observe(duration.Seconds())
		HttpRequestCounter.WithLabelValues(path, method, strconv.Itoa(c.Writer.Status())).Inc()
	}
}
```

## 集成中间件

```go
	apiGroup := router.Group("/api")
	apiGroup.Use(middleware.Metrics())
```

这样我们就可以在`api`开头的接口记录Prometheus指标。并且对业务代码无侵入。
