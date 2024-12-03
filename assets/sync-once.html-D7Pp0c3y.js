import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,b as t,o as e}from"./app-BxIvKJnO.js";const c={},o=t(`<blockquote><p>Go语言<code>sync.Once</code>可以保证某个函数只执行一次，常用于单例模式。在本文中，我们将深入探讨<code>sync.Once</code>的底层实现原理，以便更好地理解它的并发安全特性。</p></blockquote><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	once <span class="token operator">:=</span> sync<span class="token punctuation">.</span>Once<span class="token punctuation">{</span><span class="token punctuation">}</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;do once&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;do twice&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// do once</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sync.Once通过<code>Do</code>方法实现了只执行一次的功能。在第一次调用<code>Do</code>方法时，传入的函数会被执行，而在后续的调用中，传入的函数将不会被执行。</p><h2 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理"><span>底层原理</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> Once <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	done atomic<span class="token punctuation">.</span>Uint32
	m    Mutex
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>o <span class="token operator">*</span>Once<span class="token punctuation">)</span> <span class="token function">Do</span><span class="token punctuation">(</span>f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> o<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		o<span class="token punctuation">.</span><span class="token function">doSlow</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>o <span class="token operator">*</span>Once<span class="token punctuation">)</span> <span class="token function">doSlow</span><span class="token punctuation">(</span>f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	o<span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> o<span class="token punctuation">.</span>m<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> o<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> o<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sync.Once的底层实现非常简单，核心代码只有短短的十几行。</p><ul><li>done: 原子操作，用于记录函数是否已经执行过。</li><li>m: 互斥锁，用于保护函数的执行。</li></ul><div class="hint-container important"><p class="hint-container-title">重要</p><p>其中第15行，通过双重检查，保证函数只执行一次。因为在调用doSlow方式前，done是0。但是调用doSlow方法时，done可能已被其他协程修改，因此需要双重检查。</p></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><h3 id="sync-once不能复制" tabindex="-1"><a class="header-anchor" href="#sync-once不能复制"><span>sync.Once不能复制</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleOnce2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	once <span class="token operator">:=</span> sync<span class="token punctuation">.</span>Once<span class="token punctuation">{</span><span class="token punctuation">}</span>
	wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			once <span class="token operator">:=</span> once
			once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;do init&quot;</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// do init</span>
	<span class="token comment">// do init</span>
	<span class="token comment">// do init</span>
	<span class="token comment">// do init</span>
	<span class="token comment">// do init</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是由于sync.Once里面的内部类型不是引用类型，进行复制会得到全新的变量。不同的变量执行Do方法时，互不影响。</p></div><h3 id="sync-once不能嵌套使用" tabindex="-1"><a class="header-anchor" href="#sync-once不能嵌套使用"><span>sync.Once不能嵌套使用</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> once sync<span class="token punctuation">.</span>Once

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;do inside&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;do outside&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fatal error: all goroutines are asleep - deadlock!

goroutine 1 [sync.Mutex.Lock]:
sync.runtime_SemacquireMutex(0x5a2200?, 0x80?, 0x5a1340?)
        D:/Go/src/runtime/sema.go:95 +0x25
sync.(*Mutex).lockSlow(0x6a969c)
        D:/Go/src/sync/mutex.go:173 +0x15d
sync.(*Mutex).Lock(...)
        D:/Go/src/sync/mutex.go:92
sync.(*Once).doSlow(0xc00008a000?, 0x5c3fe8)
        D:/Go/src/sync/once.go:72 +0x50
sync.(*Once).Do(...)
        D:/Go/src/sync/once.go:67
main.main.func1()
        D:/code/test/test/main.go:12 +0x2c
sync.(*Once).doSlow(0x657388?, 0xc00006c000?)
        D:/Go/src/sync/once.go:76 +0xb4
sync.(*Once).Do(...)
        D:/Go/src/sync/once.go:67
main.main()
        D:/code/test/test/main.go:11 +0x2c
exit status 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是由于sync.Once内部的锁在第一次执行的时候，加锁成功，等待释放锁。但是嵌入执行的时候又竞争这个锁，导致死锁。</p></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://mp.weixin.qq.com/s/glJ6X1ixSYFok4qb_UHY6A" target="_blank" rel="noopener noreferrer">探索 Go sync.Once 的实现原理</a></li></ul>`,19);function p(i,l){return e(),s("div",null,[a(" more "),o])}const r=n(c,[["render",p],["__file","sync-once.html.vue"]]),k=JSON.parse('{"path":"/language/go/advance/sync-once.html","title":"sync.Once底层原理","lang":"zh-CN","frontmatter":{"title":"sync.Once底层原理","date":"2024-09-24T00:00:00.000Z","tag":["Go","进阶"],"category":["编程语言"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/language/go/advance/sync-once.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"sync.Once底层原理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-27T06:42:51.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"进阶"}],["meta",{"property":"article:published_time","content":"2024-09-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-27T06:42:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sync.Once底层原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-27T06:42:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":2,"title":"底层原理","slug":"底层原理","link":"#底层原理","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[{"level":3,"title":"sync.Once不能复制","slug":"sync-once不能复制","link":"#sync-once不能复制","children":[]},{"level":3,"title":"sync.Once不能嵌套使用","slug":"sync-once不能嵌套使用","link":"#sync-once不能嵌套使用","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1727144401000,"updatedTime":1732689771000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":3}]},"readingTime":{"minutes":1.94,"words":583},"filePathRelative":"language/go/advance/sync-once.md","localizedDate":"2024年9月24日","excerpt":""}');export{r as comp,k as data};
