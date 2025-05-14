import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,c as o,a as i,e as n,f as s,d as c,b as a,o as l}from"./app-DUTJU2Ph.js";const u={},r=a(`<h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明"><span>声明</span></a></h2><p><strong>关键字定义：</strong> string</p><p><strong>零值：</strong> &quot;&quot;</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">var</span> str <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>字符串支持一些简单的运算或操作，如下：</p><table><thead><tr><th style="text-align:center;">操作</th><th style="text-align:center;">含义</th><th style="text-align:center;">示例</th><th style="text-align:center;">结果</th></tr></thead><tbody><tr><td style="text-align:center;">x+y</td><td style="text-align:center;">字符串连接</td><td style="text-align:center;">&quot;Go&quot;+&quot;lang&quot;</td><td style="text-align:center;">&quot;Golang&quot;</td></tr><tr><td style="text-align:center;">len(x)</td><td style="text-align:center;">计算字符串长度</td><td style="text-align:center;">len(&quot;Golang&quot;)</td><td style="text-align:center;">6</td></tr><tr><td style="text-align:center;">str[i]</td><td style="text-align:center;">取字符</td><td style="text-align:center;">&quot;Golang&quot;[3]</td><td style="text-align:center;">a</td></tr></tbody></table><h3 id="比较" tabindex="-1"><a class="header-anchor" href="#比较"><span>比较</span></a></h3><p>支持各种比较关系运算符: <code>==</code>、<code>!=</code>、<code>&gt;=</code>、<code>&lt;=</code>、<code>&gt;</code>、<code>&lt;</code></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">PrintStringCompare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s1 <span class="token operator">:=</span> <span class="token string">&quot;世界和平&quot;</span>
	s2 <span class="token operator">:=</span> <span class="token string">&quot;世界&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;和平&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span> <span class="token comment">//true</span>

	s1 <span class="token operator">=</span> <span class="token string">&quot;Go&quot;</span>
	s2 <span class="token operator">=</span> <span class="token string">&quot;c&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">!=</span> s2<span class="token punctuation">)</span> <span class="token comment">//true</span>

	s1 <span class="token operator">=</span> <span class="token string">&quot;12345&quot;</span>
	s2 <span class="token operator">=</span> <span class="token string">&quot;23456&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">&lt;</span> s2<span class="token punctuation">)</span>  <span class="token comment">//true</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">&lt;=</span> s2<span class="token punctuation">)</span> <span class="token comment">//true</span>

	s1 <span class="token operator">=</span> <span class="token string">&quot;12345&quot;</span>
	s2 <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">&gt;</span> s2<span class="token punctuation">)</span>  <span class="token comment">//true</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1 <span class="token operator">&gt;=</span> s2<span class="token punctuation">)</span> <span class="token comment">//true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Go语言支持UTF-8格式编码，因此字符串中字符可以是<code>ASCII</code>字符，也可以是<code>Unicode</code>字符，其中：</p><ul><li><code>byte</code>类型来表示<code>ASCII</code>字符</li><li><code>rune</code>类型来表示<code>Unicode</code>字符</li></ul></div><h4 id="byte遍历" tabindex="-1"><a class="header-anchor" href="#byte遍历"><span>byte遍历</span></a></h4><p>英文字符串遍历</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>  str <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
  <span class="token comment">// 0 h</span>
  <span class="token comment">// 1 e</span>
  <span class="token comment">// 2 l</span>
  <span class="token comment">// 3 l</span>
  <span class="token comment">// 4 o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中文字符串遍历</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>	str <span class="token operator">:=</span> <span class="token string">&quot;你好&quot;</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 0 ä</span>
	<span class="token comment">// 1 ½</span>
	<span class="token comment">// 2</span>
	<span class="token comment">// 3 å</span>
	<span class="token comment">// 4 ¥</span>
	<span class="token comment">// 5 ½</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>由于UTF-8中，大多数中文字符都使用三字节表示，因此通过byte方式遍历中文字符串是不可取的</p></div><h4 id="rune遍历" tabindex="-1"><a class="header-anchor" href="#rune遍历"><span>rune遍历</span></a></h4><p>英文字符串遍历</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>  str <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>
  <span class="token keyword">for</span> i<span class="token punctuation">,</span>s <span class="token operator">:=</span> <span class="token keyword">range</span> str<span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 0 h</span>
  <span class="token comment">// 1 e</span>
  <span class="token comment">// 2 l</span>
  <span class="token comment">// 3 l</span>
  <span class="token comment">// 4 o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>rune实际上类型是int32，因此打印时展示的是数字类型，因此需要显示转换成string类型</p></div><p>中文字符串遍历</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>  str <span class="token operator">:=</span> <span class="token string">&quot;你好&quot;</span>
  <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
  <span class="token comment">//0 20320 你</span>
  <span class="token comment">//3 22909 好</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>遍历中文字符索引的变化：</p><ul><li><code>你</code>的索引在0</li><li><code>好</code>的索引在3</li></ul></div><h2 id="底层结构" tabindex="-1"><a class="header-anchor" href="#底层结构"><span>底层结构</span></a></h2><p>参见<code>$GOROOT/src/runtime/string.go</code></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> stringStruct <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	str unsafe<span class="token punctuation">.</span>Pointer
	<span class="token builtin">len</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>str是指针，指向底层数据结构，其实是<code>[]byte</code></li><li>len是字符串长度，因此len(s)是O(1)复杂度的操作</li></ul><p>因此传参是可以将字符串作为参数，而不必传字符串指针。</p>`,30),d={class:"hint-container warning"},k=n("p",{class:"hint-container-title"},"注意",-1),v=a(`<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
	s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	s1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;z&#39;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//hello zello</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高效构造方式" tabindex="-1"><a class="header-anchor" href="#高效构造方式"><span>高效构造方式</span></a></h2><p>Go语言构造字符串的方式有：</p><ul><li><code>+</code></li><li><code>fmt.Sprintf</code></li><li><code>strings.Join</code></li><li><code>strings.Build</code></li><li><code>bytes.Buffer</code></li></ul><p>但哪种方法最为高效呢？</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> concat

<span class="token keyword">import</span> <span class="token punctuation">(</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们进行基准测试如下：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> concat

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>go test -benchmem -bench=. concat.go concat_test.go 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👀</p><ul><li>预初始化的strings.Builder构建字符串效率最高</li><li>fmt.Sprintf性能最差</li><li>未知字符串长度情况下使用strings.Join比较好</li></ul>`,12);function m(b,g){const t=p("Badge");return l(),o("div",null,[i(" more "),r,n("div",d,[k,n("p",null,[s("字符串的内容可以用类似数组下标的方式获取，例如str[0]，但与数组不同，字符串的内容初始化后不可修改"),c(t,{text:"注意",type:"warning"}),s("，只能重新构造新的字符串，带来的好处是线程安全")])]),v])}const h=e(u,[["render",m],["__file","string.html.vue"]]),B=JSON.parse('{"path":"/language/go/base/string.html","title":"字符串","lang":"zh-CN","frontmatter":{"title":"字符串","date":"2022-01-23T00:00:00.000Z","order":6,"tag":["Go","基础"],"category":["编程语言"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/language/go/base/string.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"字符串"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T14:25:55.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:published_time","content":"2022-01-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T14:25:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-23T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T14:25:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"声明","slug":"声明","link":"#声明","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"比较","slug":"比较","link":"#比较","children":[]},{"level":3,"title":"遍历","slug":"遍历","link":"#遍历","children":[]}]},{"level":2,"title":"底层结构","slug":"底层结构","link":"#底层结构","children":[]},{"level":2,"title":"高效构造方式","slug":"高效构造方式","link":"#高效构造方式","children":[]}],"git":{"createdTime":1690708801000,"updatedTime":1740666355000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":3},{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":3.4,"words":1020},"filePathRelative":"language/go/base/string.md","localizedDate":"2022年1月23日","excerpt":""}');export{h as comp,B as data};
