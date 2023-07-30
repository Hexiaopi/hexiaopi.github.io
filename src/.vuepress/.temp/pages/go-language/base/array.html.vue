<template><div><nav class="table-of-contents"><ul><li><router-link to="#数组">数组</router-link><ul><li><router-link to="#声明">声明</router-link></li><li><router-link to="#操作">操作</router-link></li></ul></li></ul></nav>
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<blockquote>
<p>一个由固定长度的特定类型组成的序列。特定类型可以是：字符串、结构体、函数、接口、通道等。</p>
</blockquote>
<h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>								<span class="token comment">//长度为3的int类型数组，元素为[0,0,0]</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span>			<span class="token comment">//长度为3的int类型数组，元素为[1,2,3]</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">}</span>		<span class="token comment">//长度为3的int类型数组，元素为[0,2,3]</span>
<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span>	<span class="token comment">//长度为4的int类型数组，元素为[0,2,3,4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👣</p>
<p>​	定义数组可以指定长度，例如第1种定义；也可以根据初始化元素的数目自动计算，例如第2、3、4种定义。</p>
<p>​	初始化数组元素可以按顺序指定，例如第2种定义；也可以根据索引指定元素，例如第3、4种定义。</p>
<p>​	<code v-pre>...</code>可以根据初始化自动推算长度</p>
<h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3>
<h4 id="len" tabindex="-1"><a class="header-anchor" href="#len" aria-hidden="true">#</a> len()</h4>
<blockquote>
<p>len()函数可以用于计算数组的长度。</p>
</blockquote>
<h4 id="cap" tabindex="-1"><a class="header-anchor" href="#cap" aria-hidden="true">#</a> cap()</h4>
<blockquote>
<p>cap()函数可以用于计算数组的容量。</p>
</blockquote>
<p>👣</p>
<p>​	len()和cap()对于数组来说，结果始终一致。</p>
<h4 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h4>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token keyword">range</span> a<span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a[%d]: %d\n"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> i<span class="token punctuation">,</span>v<span class="token operator">:=</span><span class="token keyword">range</span> a<span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a[%d]: %d\n"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a[%d]: %d\n"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👣</p>
<ul>
<li><code v-pre>for range</code>方式迭代可以保证不会出现数组越界的情况。</li>
<li>数组的定义包含长度，因此长度不同的数组，即便类型一致，整个数组仍不是同一类型。</li>
</ul>
</div></template>


