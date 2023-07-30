<template><div><!-- more -->
<h2 id="什么是对象池模式" tabindex="-1"><a class="header-anchor" href="#什么是对象池模式" aria-hidden="true">#</a> 什么是对象池模式</h2>
<p>对象池模式(Object Pool Pattern)：它通过预先创建和初始化一组对象，然后将它们存放在一个池中，以便在需要时重复使用。这样可以减少频繁创建和销毁对象的开销，提高应用程序的性能和效率。</p>
<h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3>
<figure><img src="@source/design-pattern/images/object-pool.png" alt="object-pool" tabindex="0" loading="lazy"><figcaption>object-pool</figcaption></figure>
<ul>
<li>
<p>Pool：对象池</p>
<p>对象池维护活动对象列表和空闲对象列表</p>
</li>
<li>
<p>Object：对象</p>
<p>对象被客户端使用</p>
</li>
</ul>
<h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> object_pool

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"sync"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> pool <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	mutex     <span class="token operator">*</span>sync<span class="token punctuation">.</span>Mutex
	idle      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	active    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	newObject <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewPool</span><span class="token punctuation">(</span>newFunc <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">*</span>pool <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>pool<span class="token punctuation">{</span>
		mutex<span class="token punctuation">:</span>     <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		idle<span class="token punctuation">:</span>      <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		active<span class="token punctuation">:</span>    <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		newObject<span class="token punctuation">:</span> newFunc<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>pool<span class="token punctuation">)</span> <span class="token function">Acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> p<span class="token punctuation">.</span>mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> object <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>idle<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		object <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">newObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		object <span class="token operator">=</span> p<span class="token punctuation">.</span>idle<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		p<span class="token punctuation">.</span>idle <span class="token operator">=</span> p<span class="token punctuation">.</span>idle<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	p<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>active<span class="token punctuation">,</span> object<span class="token punctuation">)</span>
	<span class="token keyword">return</span> object
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>pool<span class="token punctuation">)</span> <span class="token function">Release</span><span class="token punctuation">(</span>target <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> p<span class="token punctuation">.</span>mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span>idle <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>idle<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> p<span class="token punctuation">.</span>active <span class="token punctuation">{</span>
		<span class="token keyword">if</span> p<span class="token punctuation">.</span>active<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> target <span class="token punctuation">{</span>
			p<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>active<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>active<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> object_pool

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">ExamplePool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	newConnDB <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">"conn-db"</span>
	<span class="token punctuation">}</span>
	pool <span class="token operator">:=</span> <span class="token function">NewPool</span><span class="token punctuation">(</span>newConnDB<span class="token punctuation">)</span>
	object1 <span class="token operator">:=</span> pool<span class="token punctuation">.</span><span class="token function">Acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>idle<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">)</span>

	object2 <span class="token operator">:=</span> pool<span class="token punctuation">.</span><span class="token function">Acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>idle<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">)</span>

	pool<span class="token punctuation">.</span><span class="token function">Release</span><span class="token punctuation">(</span>object1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>idle<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">)</span>

	pool3 <span class="token operator">:=</span> pool<span class="token punctuation">.</span><span class="token function">Acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>idle<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">)</span>

	pool<span class="token punctuation">.</span><span class="token function">Release</span><span class="token punctuation">(</span>object2<span class="token punctuation">)</span>
	pool<span class="token punctuation">.</span><span class="token function">Release</span><span class="token punctuation">(</span>pool3<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>idle<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>pool<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 0</span>
	<span class="token comment">// 1</span>
	<span class="token comment">// 0</span>
	<span class="token comment">// 2</span>
	<span class="token comment">// 1</span>
	<span class="token comment">// 1</span>
	<span class="token comment">// 0</span>
	<span class="token comment">// 2</span>
	<span class="token comment">// 2</span>
	<span class="token comment">// 0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>资源受限的场景，比如不需要可伸缩性的环境（CPU、内存等物理资源有限），CPU性能不够强劲，内存比较紧张，垃圾收集，内存抖动会造成比较大的影响，需要提高内存管理效率，响应性比吞吐量更为重要。</li>
<li>在内存中数量受限的对象，比如数据库连接、网络连接、线程等。</li>
<li>创建成本高的对象，比如初始化时间长、占用资源多、需要复杂的配置等。</li>
</ul>
<h3 id="有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#有哪些优缺点" aria-hidden="true">#</a> 有哪些优缺点</h3>
<h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4>
<ul>
<li>提升性能：减少创建和销毁对象的开销，节省内存和CPU资源，提高响应速度。</li>
<li>减少GC压力：复用对象池中的对象，避免频繁的垃圾回收，降低内存抖动和暂停时间。</li>
<li>易于实现：对象池模式相对容易实现，可用于多种情况。它是一种经过验证的设计模式，已在许多应用程序和编程语言中成功使用。</li>
</ul>
<h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4>
<ul>
<li>增加依赖性：将对象返回对象池中的操作依赖于客户端，如果客户端忘记将对象返回对象池中，将导致该对象无法被其他组件使用。</li>
<li>增加复杂性：对象池模式可以通过添加额外的抽象层来增加应用程序的复杂性。这会使代码更难理解和维护，尤其是涉及到多线程和并发的场景。</li>
<li>存在脏对象问题：所谓的脏对象就是指的是当对象被放回对象池后，还保留着刚刚被客户端调用时生成的数据。脏对象可能带来两个问题：
<ul>
<li>脏对象持有上次使用的引用，导致内存泄露等问题。</li>
<li>脏对象如果下一次使用时没有做清理，可能影响程序的处理数据。</li>
</ul>
</li>
<li>生命周期问题：处于对象池中的对象生命周期要比普通的对象要长久。这可能导致一些难以预料的问题，比如对象状态不一致、资源占用过多等。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>对象池模式是一种创建型设计模式，它通过预先创建和初始化一组对象，然后将它们存放在一个池中，以便在需要时重复使用。这样可以减少频繁创建和销毁对象的开销，提高应用程序的性能和效率。在使用对象池设计模式时，需要注意：</p>
<ul>
<li>对象池的大小应该根据实际需求和资源情况来确定，不要过大或过小。</li>
<li>对象池中的对象应该是无状态或者可重置状态的，以避免状态污染和数据不一致。</li>
<li>对象池中的对象应该是线程安全或者线程隔离的，以避免并发问题和竞争条件。</li>
<li>对象池中的对象应该在使用完毕后及时归还，以避免资源泄露和浪费。</li>
</ul>
</div></template>


