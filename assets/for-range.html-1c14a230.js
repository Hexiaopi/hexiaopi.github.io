import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,b as s,d as t,f as l,e as p}from"./app-0fdcf53f.js";const u={},r={class:"hint-container danger"},d=n("p",{class:"hint-container-title"},"警告",-1),k=n("p",null,[n("code",null,"for range"),s("同常使用在遍历：数组、指向数组的指针、切片、字符串、map和channel等表达式")],-1),v=p(`<h2 id="for-range" tabindex="-1"><a class="header-anchor" href="#for-range" aria-hidden="true">#</a> for range</h2><p>for range使用短变量声明方式(:=)进行遍历时声明了变量<br> 例如</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span> <span class="token comment">//获取索引和值</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">//获取索引和值</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小心短变量声明" tabindex="-1"><a class="header-anchor" href="#小心短变量声明" aria-hidden="true">#</a> 小心短变量声明</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历1和遍历2仅在传递go func()参数有差别，结果却完全不一样</p>`,6),m={class:"hint-container details"},b=p(`<summary>查看运行结果</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4 5
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g=p("<ul><li>遍历1中，遍历结束后，开启的5个协程打印共用的变量<code>i</code>和<code>v</code>,此时<code>i=4</code>,<code>v=5</code>;</li><li>遍历2中，由于在各个协程中，重新声明了<code>i</code>和<code>v</code>变量，及时的将值传入各个协程，因此打印的是期望的结果，但因为各个协程调度时间不同，因此结果是乱序的。</li></ul>",1),f=n("h2",{id:"小心遍历过程中的修改",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#小心遍历过程中的修改","aria-hidden":"true"},"#"),s(" 小心遍历过程中的修改")],-1),h=p(`<h3 id="数组遍历" tabindex="-1"><a class="header-anchor" href="#数组遍历" aria-hidden="true">#</a> 数组遍历</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1 2 3 4 5]
[1 2 3 4 5]
[1 12 13 4 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在i=0时，我们修改了a[1]=12、a[2]=13，但v还是原来的值，这是因为遍历时使用的是数组a的副本，也就没有真实的反应到数组a本身，因此r拿到的数据时a副本的数据，数组a本身并未发生变化。</p></details><h3 id="数组指针遍历" tabindex="-1"><a class="header-anchor" href="#数组指针遍历" aria-hidden="true">#</a> 数组指针遍历</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1 2 3 4 5]
[1 12 13 4 5]
[1 12 13 4 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此次遍历的是*[5]int作为range的表达式，虽然也是副本，但副本所指向的内存空间是同样的。因此r的值可以改变</p></details><h3 id="切片遍历" tabindex="-1"><a class="header-anchor" href="#切片遍历" aria-hidden="true">#</a> 切片遍历</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1 2 3 4 5]
[1 12 13 4 5]
[1 12 13 4 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有切片的底层结构，我们知道切片由（<code>array</code>，<code>len</code>，<code>cap</code>）三元组组成，其中<code>array</code>指向底层数组。在range遍历时，它实际上复制的是一个切片，且切片的<code>array</code>指向的是同一个底层数组，因此会修改相同的底层数据。</p></details><p>👀<strong>但如果切片发生了扩容，导致长度发生了改变，for range遍历的仍是原来的长度</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看执行结果</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1 2 3 4 5]
[1 12 13 4 5 6 7]
[1 12 13 4 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切片a在遍历时附加了两个元素，len由5加到7，但由于for range使用的是切片a的副本，仍是长度5。</p></details><h3 id="字符串遍历" tabindex="-1"><a class="header-anchor" href="#字符串遍历" aria-hidden="true">#</a> 字符串遍历</h3><p><code>string</code>类型是不可变的，每次循环的单位是一个<code>rune</code>,而不是<code>byte</code>，虽然底层结构是<code>byte</code>。如果遍历过程中存在非法UTF8字节序列，那么将返回<code>0xfffd</code>这个特殊值，且下次遍历从下一个<code>byte</code>开始，而不是<code>rune</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">string</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %v 0x%x\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

  <span class="token comment">//修改为非法字符</span>
	sl<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0xd0</span>
	sl<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0xd6</span>
	sl<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0xb9</span>

	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">string</span><span class="token punctuation">(</span>sl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %v 0x%x\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>查看运行结果</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 中 0x4e2d
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在遍历第4个字节时，发现时非法UTF8字符，则返回的是特殊值，且下标i从4开始。</p></details><h3 id="字典遍历" tabindex="-1"><a class="header-anchor" href="#字典遍历" aria-hidden="true">#</a> 字典遍历</h3><p>字典遍历过程中，如果对其新增和删除，那么会有怎样的结果呢？</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),y={class:"hint-container details"},x=n("summary",null,"查看运行结果",-1),w=n("ul",null,[n("li",null,"3、3、4"),n("li",null,"3、2、4"),n("li",null,"3、3、3"),n("li",null,"3、2、3")],-1),q=n("p",null,"这是因为map的遍历是无序的",-1);function _(P,B){const a=o("Badge");return c(),i("div",null,[n("div",r,[d,k,n("p",null,[s("其中有不少坑需要小心！！！"),t(a,{text:"注意",type:"warning"})])]),l(" more "),v,n("details",m,[b,n("p",null,[s("其原因在于这些迭代变量在每次循环中都会被重用，而不是重新声明"),t(a,{text:"注意",type:"warning"})]),g]),f,n("p",null,[s("for range在遍历表达式时如果对其修改不同的类型影响是不一样的"),t(a,{text:"注意",type:"warning"})]),h,n("details",y,[x,n("blockquote",null,[n("p",null,[s("其输出结果是未知的"),t(a,{text:"注意",type:"warning"}),s("，可能counter是：")]),w,q])])])}const V=e(u,[["render",_],["__file","for-range.html.vue"]]);export{V as default};
