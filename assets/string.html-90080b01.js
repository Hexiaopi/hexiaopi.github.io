import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as n,b as s,d as e,e as a}from"./app-47c4328b.js";const l={},u=a(`<h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h2><p><strong>关键字定义：</strong> string</p><p><strong>零值：</strong> &quot;&quot;</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> str <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2><p>字符串支持一些简单的运算或操作，如下：</p><table><thead><tr><th style="text-align:center;">操作</th><th style="text-align:center;">含义</th><th style="text-align:center;">示例</th><th style="text-align:center;">结果</th></tr></thead><tbody><tr><td style="text-align:center;">x+y</td><td style="text-align:center;">字符串连接</td><td style="text-align:center;">&quot;Go&quot;+&quot;lang&quot;</td><td style="text-align:center;">&quot;Golang&quot;</td></tr><tr><td style="text-align:center;">len(x)</td><td style="text-align:center;">计算字符串长度</td><td style="text-align:center;">len(&quot;Golang&quot;)</td><td style="text-align:center;">6</td></tr><tr><td style="text-align:center;">str[i]</td><td style="text-align:center;">取字符</td><td style="text-align:center;">&quot;Golang&quot;[3]</td><td style="text-align:center;">a</td></tr></tbody></table><h3 id="比较" tabindex="-1"><a class="header-anchor" href="#比较" aria-hidden="true">#</a> 比较</h3><p>支持各种比较关系运算符: <code>==</code>、<code>!=</code>、<code>&gt;=</code>、<code>&lt;=</code>、<code>&gt;</code>、<code>&lt;</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// ==</span>
	s1 <span class="token operator">:=</span> <span class="token string">&quot;世界和平&quot;</span>
	s2 <span class="token operator">:=</span> <span class="token string">&quot;世界&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;和平&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span> <span class="token comment">// true</span>

	<span class="token comment">// !=</span>
	s1 <span class="token operator">=</span> <span class="token string">&quot;Go&quot;</span>
	s2 <span class="token operator">=</span> <span class="token string">&quot;C&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">!=</span> s2<span class="token punctuation">)</span> <span class="token comment">// true</span>

	<span class="token comment">// &lt; and &lt;=</span>
	s1 <span class="token operator">=</span> <span class="token string">&quot;12345&quot;</span>
	s2 <span class="token operator">=</span> <span class="token string">&quot;23456&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">&lt;</span> s2<span class="token punctuation">)</span>  <span class="token comment">// true</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">&lt;=</span> s2<span class="token punctuation">)</span> <span class="token comment">// true</span>

	<span class="token comment">// &gt; and &gt;=</span>
	s1 <span class="token operator">=</span> <span class="token string">&quot;12345&quot;</span>
	s2 <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">&gt;</span> s2<span class="token punctuation">)</span>  <span class="token comment">// true</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">&gt;=</span> s2<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Go语言支持UTF-8格式编码，因此字符串中字符可以是ASCII字符，也可以是Unicode字符</p><ul><li><code>byte</code>类型来表示ASCII字符</li><li><code>rune</code>类型来表示Unicode字符</li></ul></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>str <span class="token operator">:=</span> <span class="token string">&quot;中国欢迎您&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因此Go字符串遍历也支持两种方式：<code>byte</code>和<code>rune</code></p><h4 id="byte遍历" tabindex="-1"><a class="header-anchor" href="#byte遍历" aria-hidden="true">#</a> byte遍历</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>  str <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
  <span class="token comment">// 0 h</span>
  <span class="token comment">// 1 e</span>
  <span class="token comment">// 2 l</span>
  <span class="token comment">// 3 l</span>
  <span class="token comment">// 4 o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),r={class:"hint-container warning"},d=n("p",{class:"hint-container-title"},"注意",-1),k=a(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>	str <span class="token operator">:=</span> <span class="token string">&quot;你好&quot;</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 0 ä</span>
	<span class="token comment">// 1 ½</span>
	<span class="token comment">// 2</span>
	<span class="token comment">// 3 å</span>
	<span class="token comment">// 4 ¥</span>
	<span class="token comment">// 5 ½</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rune遍历" tabindex="-1"><a class="header-anchor" href="#rune遍历" aria-hidden="true">#</a> rune遍历</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>rune实际上类型是int32，因此打印时展示的是数字类型</p></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>  str <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>
  <span class="token keyword">for</span> i<span class="token punctuation">,</span>s <span class="token operator">:=</span> <span class="token keyword">range</span> str<span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 0 h</span>
  <span class="token comment">// 1 e</span>
  <span class="token comment">// 2 l</span>
  <span class="token comment">// 3 l</span>
  <span class="token comment">// 4 o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v={class:"hint-container warning"},m=n("p",{class:"hint-container-title"},"注意",-1),b=a(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>  str <span class="token operator">:=</span> <span class="token string">&quot;你好&quot;</span>
  <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
  <span class="token comment">//0 20320 你</span>
  <span class="token comment">//3 22909 好</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="底层结构" tabindex="-1"><a class="header-anchor" href="#底层结构" aria-hidden="true">#</a> 底层结构</h2><p>参见<code>$GOROOT/src/runtime/string.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> stringStruct <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	str unsafe<span class="token punctuation">.</span>Pointer
	<span class="token builtin">len</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>str是指针，指向底层数据结构，其实是<code>[]byte</code></li><li>len是字符串长度，因此len(s)是O(1)复杂度的操作</li></ul><p>因此传参是可以将字符串作为参数，而不必传字符串指针。</p>`,6),g={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"注意",-1),y=a(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
	s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	s1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;z&#39;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//hello zello</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串高效构造方式" tabindex="-1"><a class="header-anchor" href="#字符串高效构造方式" aria-hidden="true">#</a> 字符串高效构造方式</h2><p>Go语言构造字符串的方式有：</p><ul><li><code>+</code></li><li><code>fmt.Sprintf</code></li><li><code>strings.Join</code></li><li><code>strings.Build</code></li><li><code>bytes.Buffer</code></li></ul><p>但哪种方法最为高效呢？</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> sl <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
	<span class="token string">&quot;Rob Pike &quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;Robert Griesemer &quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;Ken Thompson &quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">concatStringByOperator</span><span class="token punctuation">(</span>sl <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s <span class="token builtin">string</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> sl <span class="token punctuation">{</span>
		s <span class="token operator">+=</span> v
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> s
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">concatStringBySprintf</span><span class="token punctuation">(</span>sl <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s <span class="token builtin">string</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> sl <span class="token punctuation">{</span>
		s <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s%s&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> s
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">concatStringByJoin</span><span class="token punctuation">(</span>sl <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>sl<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">concatStringByStringsBuilder</span><span class="token punctuation">(</span>sl <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> b strings<span class="token punctuation">.</span>Builder
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> sl <span class="token punctuation">{</span>
		b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">concatStringByStringsBuilderWithInitSize</span><span class="token punctuation">(</span>sl <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> b strings<span class="token punctuation">.</span>Builder
	b<span class="token punctuation">.</span><span class="token function">Grow</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> sl <span class="token punctuation">{</span>
		b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">concatStringByBytesBuffer</span><span class="token punctuation">(</span>sl <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> b bytes<span class="token punctuation">.</span>Buffer
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> sl <span class="token punctuation">{</span>
		b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">concatStringByBytesBufferWithInitSize</span><span class="token punctuation">(</span>sl <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
	b <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> sl <span class="token punctuation">{</span>
		b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们进行基准测试如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> concat

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	testing
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkConcatStringByOperator</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token function">concatStringByOperator</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkConcatStringBySprintf</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token function">concatStringBySprintf</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkConcatStringByJoin</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token function">concatStringByJoin</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkConcatStringByStringsBuilder</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token function">concatStringByStringsBuilder</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkConcatStringByStringsBuilderWithInitSize</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token function">concatStringByStringsBuilderWithInitSize</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkConcatStringByBytesBuffer</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token function">concatStringByBytesBuffer</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkConcatStringByBytesBufferWithInitSize</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token function">concatStringByBytesBufferWithInitSize</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go test -benchmem -bench=. concat.go concat_test.go 
goos: darwin
goarch: amd64
cpu: Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz
BenchmarkConcatStringByOperator-8                        9819921               118.6 ns/op            80 B/op          2 allocs/op
BenchmarkConcatStringBySprintf-8                         2001465               596.3 ns/op           176 B/op          8 allocs/op
BenchmarkConcatStringByJoin-8                           16353861                69.96 ns/op           48 B/op          1 allocs/op
BenchmarkConcatStringByStringsBuilder-8                  8713630               134.5 ns/op           112 B/op          3 allocs/op
BenchmarkConcatStringByStringsBuilderWithInitSize-8     19554391                60.47 ns/op           64 B/op          1 allocs/op
BenchmarkConcatStringByBytesBuffer-8                    11406288               102.7 ns/op           112 B/op          2 allocs/op
BenchmarkConcatStringByBytesBufferWithInitSize-8        18708632                62.37 ns/op           48 B/op          1 allocs/op
PASS
ok      command-line-arguments  9.939s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👀</p><ul><li>预初始化的strings.Builder构建字符串效率最高</li><li>fmt.Sprintf性能最差</li><li>未知字符串长度情况下使用strings.Join比较好</li></ul>`,12);function h(B,w){const t=o("Badge");return i(),c("div",null,[u,n("div",r,[d,n("p",null,[s("由于UTF-8中，大多数中文字符都使用三字节表示，因此通过rune方式遍历中文字符串是不可取的"),e(t,{text:"注意",type:"warning"})])]),k,n("div",v,[m,n("p",null,[s("遍历中文字符索引的变化"),e(t,{text:"注意",type:"warning"})])]),b,n("div",g,[f,n("p",null,[s("字符串的内容可以用类似数组下标的方式获取，例如str[0]，但与数组不同，字符串的内容初始化后不可修改"),e(t,{text:"注意",type:"warning"}),s("，只能重新构造新的字符串，带来的好处是线程安全")])]),y])}const x=p(l,[["render",h],["__file","string.html.vue"]]);export{x as default};
