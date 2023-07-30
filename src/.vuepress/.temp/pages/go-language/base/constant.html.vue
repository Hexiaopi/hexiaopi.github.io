<template><div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2>
<blockquote>
<p>常量（constant），顾名思义，程序运行期间，其值不能改变的量。</p>
</blockquote>
<h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3>
<h4 id="一个常量" tabindex="-1"><a class="header-anchor" href="#一个常量" aria-hidden="true">#</a> 一个常量</h4>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token operator">&lt;</span>constant_name<span class="token operator">></span> <span class="token punctuation">[</span>constant_type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>赋值表达式<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">const</span> PI <span class="token builtin">float32</span> <span class="token operator">=</span> <span class="token number">3.1415926</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"Go"</span> <span class="token comment">//编译器自动推断类型为string类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多个常量" tabindex="-1"><a class="header-anchor" href="#多个常量" aria-hidden="true">#</a> 多个常量</h4>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">const</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Go"</span><span class="token punctuation">,</span> <span class="token char">'c'</span> <span class="token comment">//自动推断a是整型、b是字符串类型、c是字节型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="常量组" tabindex="-1"><a class="header-anchor" href="#常量组" aria-hidden="true">#</a> 常量组</h4>
<p>例如：<code v-pre>$GOROOT/src/net/http/method.go</code></p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	MethodGet     <span class="token operator">=</span> <span class="token string">"GET"</span>
	MethodHead    <span class="token operator">=</span> <span class="token string">"HEAD"</span>
	MethodPost    <span class="token operator">=</span> <span class="token string">"POST"</span>
	MethodPut     <span class="token operator">=</span> <span class="token string">"PUT"</span>
	MethodPatch   <span class="token operator">=</span> <span class="token string">"PATCH"</span> <span class="token comment">// RFC 5789</span>
	MethodDelete  <span class="token operator">=</span> <span class="token string">"DELETE"</span>
	MethodConnect <span class="token operator">=</span> <span class="token string">"CONNECT"</span>
	MethodOptions <span class="token operator">=</span> <span class="token string">"OPTIONS"</span>
	MethodTrace   <span class="token operator">=</span> <span class="token string">"TRACE"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👀</p>
<blockquote>
<p>如果不指定类型和初始化值，则默认表示使用上行的赋值表达式</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	x <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
	y						<span class="token comment">//y为1</span>
	a <span class="token operator">=</span> <span class="token string">"a"</span>
	b						<span class="token comment">//b为"a"</span>
	c <span class="token operator">=</span> <span class="token string">""</span>
	d						<span class="token comment">//d为""</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<p>规则：</p>
<ul>
<li>
<p><strong>常量值必须是确定的，不能使用程序运行期间不确定的值</strong> 👀</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
  x <span class="token operator">=</span> runtime<span class="token punctuation">.</span><span class="token function">NumCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">//编译不通过，因为runtime.NumCPU()是在程序运行期间获取到的机器CPU个数</span>
  y <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span> <span class="token comment">//编译通过，内置函数len等可以使用</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>常量的值在编译过程已确定，作为指令数据使用，没有内存分配</strong> ‼️</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span>x<span class="token punctuation">)</span>		<span class="token comment">//编译不通过，获取不到地址</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


