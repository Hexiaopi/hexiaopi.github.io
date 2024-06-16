import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,b as i,o as t}from"./app-RykCkQpg.js";const o={},d=i(`<p><code>go doc</code>命令用于查看Go语言的文档。</p><p>比如：查看sync.Map文档，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go doc sync.Map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package sync // import &quot;sync&quot;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function r(s,l){return t(),n("div",null,[a(" more "),d])}const p=e(o,[["render",r],["__file","doc.html.vue"]]),u=JSON.parse('{"path":"/language/go/command/doc.html","title":"go-doc","lang":"zh-CN","frontmatter":{"title":"go-doc","date":"2024-06-14T00:00:00.000Z","tag":["Go","命令"],"category":["编程语言"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/language/go/command/doc.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"go-doc"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T13:04:37.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"命令"}],["meta",{"property":"article:published_time","content":"2024-06-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-16T13:04:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"go-doc\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-16T13:04:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[],"git":{"createdTime":1718543077000,"updatedTime":1718543077000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":1.34,"words":401},"filePathRelative":"language/go/command/doc.md","localizedDate":"2024年6月14日","excerpt":""}');export{p as comp,u as data};
