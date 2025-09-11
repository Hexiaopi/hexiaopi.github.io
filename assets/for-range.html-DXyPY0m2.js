import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,c,e as n,f as s,d as t,a as i,b as e,o as l}from"./app-De2xQbSM.js";const u={},r={class:"hint-container caution"},d=n("p",{class:"hint-container-title"},"警告",-1),k=n("p",null,[n("code",null,"for range"),s("同常使用在遍历：数组、指向数组的指针、切片、字符串、map和channel等表达式")],-1),v=e(`<h2 id="for-range" tabindex="-1"><a class="header-anchor" href="#for-range"><span>for range</span></a></h2><p>for range使用短变量声明方式(:=)进行遍历时声明了变量 例如</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span> <span class="token comment">//获取索引和值</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> slice<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//获取索引和值</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小心短变量声明" tabindex="-1"><a class="header-anchor" href="#小心短变量声明"><span>小心短变量声明</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	<span class="token punctuation">{</span> <span class="token comment">//遍历1</span>
		<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
			<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;=====&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span> <span class="token comment">//遍历2</span>
		<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
			<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历1和遍历2仅在传递go func()参数有差别，结果却完全不一样</p><details class="hint-container details"><summary>查看运行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>4 5
4 5
4 5
4 5
4 5
=====
4 5
0 1
1 2
2 3
3 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>其原因在于这些迭代变量在每次循环中都会被重用，而不是重新声明</p>`,8),m=e('<ul><li>遍历1中，遍历结束后，开启的5个协程打印共用的变量<code>i</code>和<code>v</code>,此时<code>i=4</code>,<code>v=5</code>;</li><li>遍历2中，由于在各个协程中，重新声明了<code>i</code>和<code>v</code>变量，及时的将值传入各个协程，因此打印的是期望的结果，但因为各个协程调度时间不同，因此结果是乱序的。</li></ul><h2 id="小心遍历过程中的修改" tabindex="-1"><a class="header-anchor" href="#小心遍历过程中的修改"><span>小心遍历过程中的修改</span></a></h2>',2),b=e(`<h3 id="数组遍历" tabindex="-1"><a class="header-anchor" href="#数组遍历"><span>数组遍历</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> r <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span>
			a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">13</span>
		<span class="token punctuation">}</span>
		r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[1 2 3 4 5]
[1 2 3 4 5]
[1 12 13 4 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>在i=0时，我们修改了a[1]=12、a[2]=13，但v还是原来的值，这是因为遍历时使用的是数组a的副本，也就没有真实的反应到数组a本身，因此r拿到的数据时a副本的数据，副本本身并未发生变化。</p><h3 id="数组指针遍历" tabindex="-1"><a class="header-anchor" href="#数组指针遍历"><span>数组指针遍历</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> r <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token operator">&amp;</span>a <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span>
			a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">13</span>
		<span class="token punctuation">}</span>
		r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[1 2 3 4 5]
[1 12 13 4 5]
[1 12 13 4 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此次遍历的是*[5]int作为range的表达式，虽然也是副本，但副本所指向的内存空间是同样的。因此r的值可以改变</p></details><h3 id="切片遍历" tabindex="-1"><a class="header-anchor" href="#切片遍历"><span>切片遍历</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> r <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span>
			a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">13</span>
		<span class="token punctuation">}</span>
		r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[1 2 3 4 5]
[1 12 13 4 5]
[1 12 13 4 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>有切片的底层结构，我们知道切片由（<code>array</code>，<code>len</code>，<code>cap</code>）三元组组成，其中<code>array</code>指向底层数组。在range遍历时，它实际上复制的是一个切片，且切片的<code>array</code>指向的是同一个底层数组，因此会修改相同的底层数据。</p><p>👀<strong>但如果切片发生了扩容，导致长度发生了改变，for range遍历的仍是原来的长度</strong></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span>
			a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">13</span>
			a <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		r <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[1 2 3 4 5]
[1 12 13 4 5 6 7]
[1 12 13 4 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>切片a在遍历时附加了两个元素，len由5加到7，但由于for range使用的是切片a的副本，仍是长度5。</p><p>另外一个有趣的例子：</p>`,16),g=n("div",{class:"language-go line-numbers-mode","data-ext":"go","data-title":"go"},[n("pre",{v:"",class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	v `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" v "),n("span",{class:"token punctuation"},"{"),s(`
		v `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=e(`<details class="hint-container details"><summary>查看执行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[1 2 3 0 1 2 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><p>不了解的童鞋可能会觉得这个将一直运行下去，实际上不是的。</p><h3 id="字符串遍历" tabindex="-1"><a class="header-anchor" href="#字符串遍历"><span>字符串遍历</span></a></h3><p><code>string</code>类型是不可变的，每次循环的单位是一个<code>rune</code>,而不是<code>byte</code>，虽然底层结构是<code>byte</code>。如果遍历过程中存在非法UTF8字节序列，那么将返回<code>0xfffd</code>这个特殊值，且下次遍历从下一个<code>byte</code>开始，而不是<code>rune</code></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;中国人&quot;</span>

	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s 0x%x\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">//byte sequence of s: 0xe4 0xb8 0xad 0xe5 0x9b 0xbd 0xe4 0xba 0xba</span>
	<span class="token keyword">var</span> sl <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token number">0xe4</span><span class="token punctuation">,</span> <span class="token number">0xb8</span><span class="token punctuation">,</span> <span class="token number">0xad</span><span class="token punctuation">,</span> <span class="token number">0xe5</span><span class="token punctuation">,</span> <span class="token number">0x9b</span><span class="token punctuation">,</span> <span class="token number">0xbd</span><span class="token punctuation">,</span> <span class="token number">0xe4</span><span class="token punctuation">,</span> <span class="token number">0xba</span><span class="token punctuation">,</span> <span class="token number">0xba</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> sl <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;0x%x &quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">string</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %v 0x%x\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

  <span class="token comment">//修改为非法字符</span>
	sl<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0xd0</span>
	sl<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0xd6</span>
	sl<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0xb9</span>

	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">string</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %v 0x%x\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看运行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>0 中 0x4e2d
3 国 0x56fd
6 人 0x4eba

0xe4 0xb8 0xad 0xe5 0x9b 0xbd 0xe4 0xba 0xba 

0 中 0x4e2d
3 国 0x56fd
6 人 0x4eba


0 中 0x4e2d
3 � 0xfffd
4 ֹ 0x5b9
6 人 0x4eba
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>在遍历第4个字节时，发现时非法UTF8字符，则返回的是特殊值，且下标i从4开始。</p><h3 id="字典遍历" tabindex="-1"><a class="header-anchor" href="#字典遍历"><span>字典遍历</span></a></h3><p>字典遍历过程中，如果对其新增和删除，那么会有怎样的结果呢？</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
		<span class="token string">&quot;tony&quot;</span><span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
		<span class="token string">&quot;tom&quot;</span><span class="token punctuation">:</span>  <span class="token number">22</span><span class="token punctuation">,</span>
		<span class="token string">&quot;jim&quot;</span><span class="token punctuation">:</span>  <span class="token number">23</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">{</span> <span class="token comment">//原始</span>
		counter <span class="token operator">:=</span> <span class="token number">0</span>
		<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			counter<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;counter is &quot;</span><span class="token punctuation">,</span> counter<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;===&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">{</span> <span class="token comment">//测试删除</span>
		counter <span class="token operator">:=</span> <span class="token number">0</span>
		<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
			<span class="token keyword">if</span> counter <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
				<span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token string">&quot;tony&quot;</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			counter<span class="token operator">++</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;counter is &quot;</span><span class="token punctuation">,</span> counter<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;===&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">{</span> <span class="token comment">//测试增加</span>
		m<span class="token punctuation">[</span><span class="token string">&quot;tony&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">21</span>
		counter <span class="token operator">:=</span> <span class="token number">0</span>
		<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
			<span class="token keyword">if</span> counter <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
				m<span class="token punctuation">[</span><span class="token string">&quot;lucy&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">24</span>
			<span class="token punctuation">}</span>
			counter<span class="token operator">++</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;counter is &quot;</span><span class="token punctuation">,</span> counter<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),h={class:"hint-container details"},y=n("summary",null,"查看运行结果",-1),x=n("ul",null,[n("li",null,"3、3、4"),n("li",null,"3、2、4"),n("li",null,"3、3、3"),n("li",null,"3、2、3")],-1),w=n("p",null,"这是因为map的遍历是无序的",-1);function q(_,P){const a=o("Badge");return l(),c("div",null,[n("div",r,[d,k,n("p",null,[s("其中有不少坑需要小心！！！"),t(a,{text:"注意",type:"warning"})])]),i(" more "),v,t(a,{text:"Go版1.21版本已不会出现该状况，低于该版本需注意",type:"warning"}),m,n("p",null,[s("for range在遍历表达式时如果对其修改不同的类型影响是不一样的"),t(a,{text:"注意",type:"warning"})]),b,g,f,n("details",h,[y,n("blockquote",null,[n("p",null,[s("其输出结果是未知的"),t(a,{text:"注意",type:"warning"}),s("，可能counter是：")]),x,w])])])}const S=p(u,[["render",q],["__file","for-range.html.vue"]]),Z=JSON.parse('{"path":"/language/go/advance/for-range.html","title":"for-range避坑指南","lang":"zh-CN","frontmatter":{"title":"for-range避坑指南","date":"2023-02-09T00:00:00.000Z","tag":["Go","进阶"],"category":["编程语言"],"description":"警告 for range同常使用在遍历：数组、指向数组的指针、切片、字符串、map和channel等表达式 其中有不少坑需要小心！！！","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/language/go/advance/for-range.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"for-range避坑指南"}],["meta",{"property":"og:description","content":"警告 for range同常使用在遍历：数组、指向数组的指针、切片、字符串、map和channel等表达式 其中有不少坑需要小心！！！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-06T07:59:08.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"进阶"}],["meta",{"property":"article:published_time","content":"2023-02-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-06T07:59:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"for-range避坑指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-09T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-06T07:59:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"for range","slug":"for-range","link":"#for-range","children":[]},{"level":2,"title":"小心短变量声明","slug":"小心短变量声明","link":"#小心短变量声明","children":[]},{"level":2,"title":"小心遍历过程中的修改","slug":"小心遍历过程中的修改","link":"#小心遍历过程中的修改","children":[{"level":3,"title":"数组遍历","slug":"数组遍历","link":"#数组遍历","children":[]},{"level":3,"title":"数组指针遍历","slug":"数组指针遍历","link":"#数组指针遍历","children":[]},{"level":3,"title":"切片遍历","slug":"切片遍历","link":"#切片遍历","children":[]},{"level":3,"title":"字符串遍历","slug":"字符串遍历","link":"#字符串遍历","children":[]},{"level":3,"title":"字典遍历","slug":"字典遍历","link":"#字典遍历","children":[]}]}],"git":{"createdTime":1690708801000,"updatedTime":1741247948000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":4},{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":5.11,"words":1532},"filePathRelative":"language/go/advance/for-range.md","localizedDate":"2023年2月9日","excerpt":"<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">警告</p>\\n<p><code>for range</code>同常使用在遍历：数组、指向数组的指针、切片、字符串、map和channel等表达式</p>\\n<p>其中有不少坑需要小心！！！</p>\\n</div>\\n","autoDesc":true}');export{S as comp,Z as data};
