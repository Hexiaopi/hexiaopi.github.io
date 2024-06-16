---
title: go-doc
date: 2024-06-14
tag:
 - Go
 - 命令
category:
 - 编程语言
---

<!-- more -->

`go doc`命令用于查看Go语言的文档。

比如：查看sync.Map文档，可以使用以下命令：

```bash
go doc sync.Map
```
    
输出结果如下：

```text
package sync // import "sync"

type Map struct {
        // Has unexported fields.
}
    Map is like a Go map[any]any but is safe for concurrent use by multiple
    goroutines without additional locking or coordination. Loads, stores,
    and deletes run in amortized constant time.

    The Map type is specialized. Most code should use a plain Go map instead,
    with separate locking or coordination, for better type safety and to make it
    easier to maintain other invariants along with the map content.

    The Map type is optimized for two common use cases: (1) when the entry for
    a given key is only ever written once but read many times, as in caches
    that only grow, or (2) when multiple goroutines read, write, and overwrite
    entries for disjoint sets of keys. In these two cases, use of a Map may
    significantly reduce lock contention compared to a Go map paired with a
    separate Mutex or RWMutex.

    The zero Map is empty and ready for use. A Map must not be copied after
    first use.

    In the terminology of the Go memory model, Map arranges that a write
    operation “synchronizes before” any read operation that observes the effect
    of the write, where read and write operations are defined as follows. Load,
    LoadAndDelete, LoadOrStore, Swap, CompareAndSwap, and CompareAndDelete
    are read operations; Delete, LoadAndDelete, Store, and Swap are write
    operations; LoadOrStore is a write operation when it returns loaded set to
    false; CompareAndSwap is a write operation when it returns swapped set to
    true; and CompareAndDelete is a write operation when it returns deleted set
    to true.

func (m *Map) CompareAndDelete(key, old any) (deleted bool)
func (m *Map) CompareAndSwap(key, old, new any) bool
func (m *Map) Delete(key any)
func (m *Map) Load(key any) (value any, ok bool)
func (m *Map) LoadAndDelete(key any) (value any, loaded bool)
func (m *Map) LoadOrStore(key, value any) (actual any, loaded bool)
func (m *Map) Range(f func(key, value any) bool)
func (m *Map) Store(key, value any)
func (m *Map) Swap(key, value any) (previous any, loaded bool)
```

