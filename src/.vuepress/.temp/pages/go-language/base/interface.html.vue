<template><div><figure><img src="http://cdn.cjhe.top/blog/interface.png" alt="interface" tabindex="0" loading="lazy"><figcaption>interface</figcaption></figure>
<!-- more -->
<nav class="table-of-contents"><ul><li><router-link to="#接口不为nil的误区">接口不为nil的误区</router-link></li><li><router-link to="#接口类型底层结构">接口类型底层结构</router-link><ul><li><router-link to="#nil接口变量">nil接口变量</router-link></li><li><router-link to="#空接口类型变量">空接口类型变量</router-link></li><li><router-link to="#非空接口类型">非空接口类型</router-link></li><li><router-link to="#空接口类型和非空接口类型的等值比较">空接口类型和非空接口类型的等值比较</router-link></li></ul></li></ul></nav>
<h2 id="接口不为nil的误区" tabindex="-1"><a class="header-anchor" href="#接口不为nil的误区" aria-hidden="true">#</a> 接口不为nil的误区</h2>
<p>我们看一个demo</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"errors"</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> MyError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> ErrBad <span class="token operator">=</span> MyError<span class="token punctuation">{</span>
	<span class="token builtin">error</span><span class="token punctuation">:</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"bad error"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">bad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">returnsError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> p <span class="token operator">*</span>MyError <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token keyword">if</span> <span class="token function">bad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		p <span class="token operator">=</span> <span class="token operator">&amp;</span>ErrBad
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> p
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	e <span class="token operator">:=</span> <span class="token function">returnsError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"error: %+v\n"</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"ok"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看运行结果</summary>
<p><code v-pre>error: &lt;nil&gt;</code></p>
</details>
<p>这里大家很疑惑：明明<code v-pre>returnsError</code>函数返回的p值为nil，为何却满足了第30行的条件分支？我们先来看看接口类型的底层结构再来回答这个问题。</p>
<h2 id="接口类型底层结构" tabindex="-1"><a class="header-anchor" href="#接口类型底层结构" aria-hidden="true">#</a> 接口类型底层结构</h2>
<p>参见<code v-pre>$GOROOT/src/runtime/runtime2.go</code></p>
<figure><img src="@source/go-language/base/images/interface.png" alt="interface" tabindex="0" loading="lazy"><figcaption>interface</figcaption></figure>
<p>接口类型变量有两种内部表示：</p>
<ul>
<li><code v-pre>eface</code>：用于表示没有方法的空接口(<code v-pre>empty interface</code>)类型变量，即<code v-pre>interface{}</code>类型的变量</li>
<li><code v-pre>iface</code>：用于表示其拥有方法的接口(<code v-pre>interface</code>)类型变量</li>
</ul>
<p><code v-pre>data</code>都指向当前赋值给接口类型变量的动态类型变量的值，但<code v-pre>iface</code>相比较<code v-pre>eface</code>多了<code v-pre>itab</code>这个类型，其中:</p>
<ul>
<li><code v-pre>inter</code>存储该接口类型自身的信息</li>
<li><code v-pre>_type</code>存储该接口类型变量</li>
<li><code v-pre>fun</code>存储动态类型已实现的接口方法的调用地址数组</li>
</ul>
<p>Go运行时会为程序内的全部类型建立只读的共享<code v-pre>_type</code>信息表，因此如果我们要判断接口类型变量是否相同，只需：</p>
<ul>
<li>判断<code v-pre>_type/tab</code>是否相同</li>
<li><code v-pre>data</code>指针所指向的内存空间所存储的数据值是否相同</li>
</ul>
<p>这里需要区分不同的类型之间的等值比较，参见下文</p>
<h3 id="nil接口变量" tabindex="-1"><a class="header-anchor" href="#nil接口变量" aria-hidden="true">#</a> nil接口变量</h3>
<p>未初始化的接口类型变量默认零值为nil</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">printNilInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// nil接口变量</span>
	<span class="token keyword">var</span> i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 空接口类型</span>
	<span class="token keyword">var</span> err <span class="token builtin">error</span>     <span class="token comment">// 非空接口类型</span>
	<span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i = nil:"</span><span class="token punctuation">,</span> i <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err = nil:"</span><span class="token punctuation">,</span> err <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i = err:"</span><span class="token punctuation">,</span> i <span class="token operator">==</span> err<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>(0x0,0x0)
(0x0,0x0)
i = nil: true
err = nil: true
i = err: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>值为nil的接口类型变量内部表示均为<code v-pre>(0x0,0x0)</code>，即类型信息和数据信息均为空，因此和nil相等</p>
<h3 id="空接口类型变量" tabindex="-1"><a class="header-anchor" href="#空接口类型变量" aria-hidden="true">#</a> 空接口类型变量</h3>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">printEmptyInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// empty接口变量</span>
	<span class="token keyword">var</span> eif1 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 空接口类型</span>
	<span class="token keyword">var</span> eif2 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 空接口类型</span>
	<span class="token keyword">var</span> n<span class="token punctuation">,</span> m <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">18</span>

	eif1 <span class="token operator">=</span> n
	eif2 <span class="token operator">=</span> m

	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif1:"</span><span class="token punctuation">,</span> eif1<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif2:"</span><span class="token punctuation">,</span> eif2<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif1 = eif2:"</span><span class="token punctuation">,</span> eif1 <span class="token operator">==</span> eif2<span class="token punctuation">)</span>

	eif2 <span class="token operator">=</span> <span class="token number">17</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif1:"</span><span class="token punctuation">,</span> eif1<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif2:"</span><span class="token punctuation">,</span> eif2<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif1 = eif2:"</span><span class="token punctuation">,</span> eif1 <span class="token operator">==</span> eif2<span class="token punctuation">)</span>

	eif2 <span class="token operator">=</span> <span class="token function">int64</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif1:"</span><span class="token punctuation">,</span> eif1<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif2:"</span><span class="token punctuation">,</span> eif2<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif1 = eif2:"</span><span class="token punctuation">,</span> eif1 <span class="token operator">==</span> eif2<span class="token punctuation">)</span>

	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>eif1: (0x10951e0,0xc000092f68)
eif2: (0x10951e0,0xc000092f60)
eif1 = eif2: false
eif1: (0x10951e0,0xc000092f68)
eif2: (0x10951e0,0x10c64e8)
eif1 = eif2: true
eif1: (0x10951e0,0xc000092f68)
eif2: (0x10952a0,0x10c64e8)
eif1 = eif2: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>对于空接口类型变量，只有在<code v-pre>_type</code>和<code v-pre>data</code>所指数据内容一致（注意：不是数据指针的值一致）的情况下，两个空接口类型变量之间才能画等号。</p>
<h3 id="非空接口类型" tabindex="-1"><a class="header-anchor" href="#非空接口类型" aria-hidden="true">#</a> 非空接口类型</h3>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> T <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t T<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">"bad error"</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printNonEmptyInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> err1 <span class="token builtin">error</span> <span class="token comment">// 非空接口类型</span>
	<span class="token keyword">var</span> err2 <span class="token builtin">error</span> <span class="token comment">// 非空接口类型</span>
	err1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>T<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err1:"</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err1 = nil:"</span><span class="token punctuation">,</span> err1 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

	err1 <span class="token operator">=</span> <span class="token function">T</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
	err2 <span class="token operator">=</span> <span class="token function">T</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err1:"</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err2:"</span><span class="token punctuation">,</span> err2<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err1 = err2:"</span><span class="token punctuation">,</span> err1 <span class="token operator">==</span> err2<span class="token punctuation">)</span>

	err2 <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"%d\n"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err1:"</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err2:"</span><span class="token punctuation">,</span> err2<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err1 = err2:"</span><span class="token punctuation">,</span> err1 <span class="token operator">==</span> err2<span class="token punctuation">)</span>

	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>err1: (0x10c6a58,0x0)
err1 = nil: false
err1: (0x10c6ab8,0x10c64f0)
err2: (0x10c6ab8,0x10c64f8)
err1 = err2: false
err1: (0x10c6ab8,0x10c64f0)
err2: (0x10c69d8,0xc000096210)
err1 = err2: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>针对<code v-pre>err1 = (*T)(nil)</code>这种赋值，非空接口类型变量的类型信息并不为空，数据指针为空，因此与<code v-pre>nil(0x0,0x0)</code>不能画等号<Badge text="注意" type="warning"/><br>
因此文章开头<code v-pre>returnsError</code>返回的error接口类型变量不为nil也是这个原因。</p>
<h3 id="空接口类型和非空接口类型的等值比较" tabindex="-1"><a class="header-anchor" href="#空接口类型和非空接口类型的等值比较" aria-hidden="true">#</a> 空接口类型和非空接口类型的等值比较</h3>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">printEmptyInterfaceAndNonEmptyInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> eif <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">T</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> err <span class="token builtin">error</span> <span class="token operator">=</span> <span class="token function">T</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif:"</span><span class="token punctuation">,</span> eif<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif = err:"</span><span class="token punctuation">,</span> eif <span class="token operator">==</span> err<span class="token punctuation">)</span>

	err <span class="token operator">=</span> <span class="token function">T</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif:"</span><span class="token punctuation">,</span> eif<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"eif = err:"</span><span class="token punctuation">,</span> eif <span class="token operator">==</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结构</summary>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>eif: (0x10974c0,0x10c64f0)
err: (0x10c6ab8,0x10c64f0)
eif = err: true
eif: (0x10974c0,0x10c64f0)
err: (0x10c6ab8,0x10c64f8)
eif = err: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>空接口类型变量和非空接口类型变量内部表示的结构不同，但Go进行等值比较时，类型比较使用的是<code v-pre>eface</code>的<code v-pre>_type</code>和<code v-pre>iface</code>的<code v-pre>tab._type</code><Badge text="注意" type="warning"/>。因此第6行两者之间是可以画等号的。</p>
</div></template>


