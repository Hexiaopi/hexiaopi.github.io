---
title: sync.Map底层原理
date: 2024-05-27
tag:
 - Go
 - 进阶
category:
 - 编程语言
---

<!-- more -->

> Go 语言原生的map是非并发安全的，在并发场景下，使用map可能会导致数据竞争和panic。为了解决这个问题，Go 语言提供了sync.Map，它是一个并发安全的map。在本文中，我们将深入探讨sync.Map的底层实现原理，以便更好地理解它的并发安全特性。

## 基本用法

sync.Map提供了丰富的API，用于对map的查询、存储、遍历、删除等操作。

### 存储

```go
	// 存储
	m.Store("1", "one")
	m.Store("2", "two")
```

### 查询

```go
	// 查询
	one, ok := m.Load("1")
	if !ok {
		fmt.Println("key 1 not found")
	} else {
		fmt.Println(one.(string))
	}
```

### 遍历

```go{4}
	// 遍历
	m.Range(func(key, value any) bool {
		fmt.Println("key:", key, "value:", value)
		return true
	})
```

::: tip
Range参数传递的是一个函数，该函数的返回值是一个bool类型，表示是否继续遍历。
- 如果是true，则继续遍历。
- 如果是false，则不继续遍历。
:::

### 删除

```go
	// 删除
	m.Delete("1")
	one, ok = m.Load("1")
	if !ok {
		fmt.Println("key 1 not found")
	} else {
		fmt.Println(one.(string))
	}
```

### 查询并设置默认值

```go
	// 查询，不存在的情况下存储默认值
	two, loaded := m.LoadOrStore("2", "two")
	fmt.Println("three:", two, "loaded:", loaded)
	three, loaded := m.LoadOrStore("3", "three")
	fmt.Println("three:", three, "loaded:", loaded)
```

### 查询并删除

```go
	// 查询并删除
	three, loaded = m.LoadAndDelete("3")
	fmt.Println("three:", three, "loaded:", loaded)
	four, loaded := m.LoadAndDelete("4")
	fmt.Println("four:", four, "loaded:", loaded)
```

### 交换

其实就是更新

```go
	// 交换
	two, loaded = m.Swap("2", "double")
	fmt.Println("two:", two, "loaded:", loaded)
	two, ok = m.Load("2")
	fmt.Println(two, ok)
```

### 指定旧值交换

```go
	// 交换，仅当旧值相同时才进行交换
	result := m.CompareAndSwap("2", "two", "double")
	fmt.Println(result)
	result = m.CompareAndSwap("2", "double", "two")
	fmt.Println(result)
```

相比较Swap方法，CompareAndSwap方法多了一个参数，该参数用于指定旧值。仅当旧值与指定的旧值相同时，才会进行交换操作。


## 底层原理

```go
type Map struct {
	mu Mutex
	read atomic.Pointer[readOnly]
	dirty map[any]*entry
	misses int
}
```

其中：

- **mu**：用于保护`dirty`的互斥锁。
- **read**：只读的map，使用原子操作，因此可以无锁的并发访问，其底层则对应`readOnly`。
- **dirty**：可写的map。
- **misses**：从read读取miss次数。

```go
type readOnly struct {
	m       map[any]*entry
	amended bool
}

type entry struct {
	p atomic.Pointer[any]
}
```

`readOnly.amended`表示`dirty`中是否存在`read`中不存在的key。

### sync.Map的查询过程

```go{6}
func (m *Map) Load(key any) (value any, ok bool) {
	read := m.loadReadOnly()
	e, ok := read.m[key]
	if !ok && read.amended {
		m.mu.Lock()
		read = m.loadReadOnly()
		e, ok = read.m[key]
		if !ok && read.amended {
			e, ok = m.dirty[key]
			m.missLocked()
		}
		m.mu.Unlock()
	}
	if !ok {
		return nil, false
	}
	return e.load()
}
```

我们看到，sync.Map的查询过程如下：
1. 首先尝试从`read`读取。
2. 加锁，再次从`read`中二次检查。
3. 如果`read`中没有找到，并且`dirty`中存在该key，则从`dirty`中读取。
4. 如果`read`和`dirty`都没有找到，返回nil。

::: tip
- 第6行，进行二次检查。因为可能有其他线程已经在read添加了对应的key，需要double check，二次检查在sync包中经常会看到，我们也会在单例设计模式借鉴该方法。

- 我们也看到`read.amended`字段存在的价值，必要的数据冗余会带来复杂读的降低，值得学习。

- 我们可以看到如果可以从`read`查询到数据，整个过程是可以不用加锁的。
:::


这里需要关注`missLocked`方法，该方法用于记录miss次数。
```go
func (m *Map) missLocked() {
	m.misses++
	if m.misses < len(m.dirty) {
		return
	}
	m.read.Store(&readOnly{m: m.dirty})
	m.dirty = nil
	m.misses = 0
}
```

::: warning
我们看到如果从`read`中查不到数据的`miss`次数如果超过了`dirty`的长度，就会将`dirty`提升为`read`。
:::

### sync.Map的存储过程

```go
func (m *Map) Store(key, value any) {
	_, _ = m.Swap(key, value)
}
```

其底层调用的是Swap方法，我们继续跟进

```go
func (m *Map) Swap(key, value any) (previous any, loaded bool) {
	read := m.loadReadOnly()
	if e, ok := read.m[key]; ok {
		if v, ok := e.trySwap(&value); ok {
			if v == nil {
				return nil, false
			}
			return *v, true
		}
	}

	m.mu.Lock()
	read = m.loadReadOnly()
	if e, ok := read.m[key]; ok {
		if e.unexpungeLocked() {
			m.dirty[key] = e
		}
		if v := e.swapLocked(&value); v != nil {
			loaded = true
			previous = *v
		}
	} else if e, ok := m.dirty[key]; ok {
		if v := e.swapLocked(&value); v != nil {
			loaded = true
			previous = *v
		}
	} else {
		if !read.amended {
			m.dirtyLocked()
			m.read.Store(&readOnly{m: read.m, amended: true})
		}
		m.dirty[key] = newEntry(value)
	}
	m.mu.Unlock()
	return previous, loaded
}
```

我们可以看到，sync.Map的存储过程如下：

1. 首先尝试从`read`读取。
2. 如果`read`中找到了，则直接更新。由于`read`和`dirty`相同的key引用了同一个`entry`，因此对`read`的修改，`dirty`也会生效。因此可以直接退出。
3. 如果`read`中找不到，double check read。
4. 如果`dirty`找到，则直接更新。
5. 如果`read`和`dirty`均找不到，直接存储在dirty中。

这里需要关注一下`dirtyLocked`方法
```go
func (m *Map) dirtyLocked() {
	if m.dirty != nil {
		return
	}

	read := m.loadReadOnly()
	m.dirty = make(map[any]*entry, len(read.m))
	for k, e := range read.m {
		if !e.tryExpungeLocked() {
			m.dirty[k] = e
		}
	}
}
```

::: note
该方法如何发现`dirty`为nil，则将`read`拷贝至`dirty`中
:::

### sync.Map的删除过程

```go
func (m *Map) Delete(key any) {
	m.LoadAndDelete(key)
}
```

其底层调用了LoadAndDelete方法，我们继续跟进

```go
func (m *Map) LoadAndDelete(key any) (value any, loaded bool) {
	read := m.loadReadOnly()
	e, ok := read.m[key]
	if !ok && read.amended {
		m.mu.Lock()
		read = m.loadReadOnly()
		e, ok = read.m[key]
		if !ok && read.amended {
			e, ok = m.dirty[key]
			delete(m.dirty, key)
			m.missLocked()
		}
		m.mu.Unlock()
	}
	if ok {
		return e.delete()
	}
	return nil, false
}
```

我们可以看到，sync.Map的删除过程如下：

1. 首先尝试从`read`读取，如果`read`中找到了，则直接删除。
2. 如果`read`中找不到，并且存在key在dirty中，double check read。
3. 如果`dirty`找到，则直接删除。如果`read`中找到了，则直接删除。
4. 如果`read`和`dirty`均找不到，直接返回。

::: tip
第16行，由于`read`和`dirty`相同的key引用了同一个`entry`，因此对`read`的修改，`dirty`也会生效。
:::

### sync.Map的遍历过程

```go{7-11}
func (m *Map) Range(f func(key, value any) bool) {
	read := m.loadReadOnly()
	if read.amended {
		m.mu.Lock()
		read = m.loadReadOnly()
		if read.amended {
			read = readOnly{m: m.dirty}
			copyRead := read
			m.read.Store(&copyRead)
			m.dirty = nil
			m.misses = 0
		}
		m.mu.Unlock()
	}

	for k, e := range read.m {
		v, ok := e.load()
		if !ok {
			continue
		}
		if !f(k, v) {
			break
		}
	}
}
```

::: note
我们注意到，7-11行，会将dirty复制到read中，并且将dirty置为nil。
:::


## 参考文献

- [深入理解 Go sync.map](https://juejin.cn/post/7156957188840226829)
- [深度解密 Go 语言之 sync.map](https://www.cnblogs.com/qcrao-2018/p/12833787.html)
- [深入理解 go sync.Map - 基本原理](https://blog.baiguiren.com/2023/01/17/golang/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%20go%20sync.Map%20-%20%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86/)
- [go sync.Map 设计与实现](https://blog.baiguiren.com/2023/01/18/golang/go%20sync.Map%20%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0/)