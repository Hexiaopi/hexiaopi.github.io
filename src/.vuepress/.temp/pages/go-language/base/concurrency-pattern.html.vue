<template><div><p>Go语言推荐CSP模型进行并发处理，而非通过共享内存。这里总结一些并发模式或者称作范式，去管理控制协程。</p>
<!-- more -->
<nav class="table-of-contents"><ul><li><router-link to="#go并发模式">Go并发模式</router-link><ul><li><router-link to="#退出模式">退出模式</router-link></li><li><router-link to="#管道模式-pipeline">管道模式-pipeline</router-link></li><li><router-link to="#扇出-扇入模式">扇出，扇入模式</router-link></li></ul></li><li><router-link to="#超时与取消模式">超时与取消模式</router-link></li></ul></nav>
<h2 id="go并发模式" tabindex="-1"><a class="header-anchor" href="#go并发模式" aria-hidden="true">#</a> Go并发模式</h2>
<p>我们都知道Go语言开启协程只需要<code v-pre>go func(){ }</code>，有时候需要与goroutine之间建立联系，方便进一步控制与处理。<br>
因此总结一些范式，优雅的管理goroutine。</p>
<h3 id="退出模式" tabindex="-1"><a class="header-anchor" href="#退出模式" aria-hidden="true">#</a> 退出模式</h3>
<p>使用关键字<code v-pre>go</code>很容易启动goroutine，这样创建的协程和当前协程已经分离，我们并不知道</p>
<h4 id="等待指定协程退出" tabindex="-1"><a class="header-anchor" href="#等待指定协程退出" aria-hidden="true">#</a> 等待指定协程退出</h4>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre go="" class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> signal <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"worker is working..."</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">spawn</span><span class="token punctuation">(</span>f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> signal <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> signal<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"worker start to work..."</span><span class="token punctuation">)</span>
		<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		c <span class="token operator">&lt;-</span> <span class="token function">signal</span><span class="token punctuation">(</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> c
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"start a worker..."</span><span class="token punctuation">)</span>
	c <span class="token operator">:=</span> <span class="token function">spawn</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span>c
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"worker work done!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>spawn函数创建的新goroutine与调用spawn函数的goroutine（main goroutine）之间通过channel建立了联系。</p>
</div>
<h4 id="等待多个协程退出" tabindex="-1"><a class="header-anchor" href="#等待多个协程退出" aria-hidden="true">#</a> 等待多个协程退出</h4>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre go="" class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sync"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> signal <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">worker</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"worker %d: is working...\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"worker %d: works done\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">spawnGroup</span><span class="token punctuation">(</span>f <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span> num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> signal <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> signal<span class="token punctuation">)</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"worker %d: start to work...\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
			<span class="token function">f</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
			wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		c <span class="token operator">&lt;-</span> <span class="token function">signal</span><span class="token punctuation">(</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> c
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"the group of workers start to work..."</span><span class="token punctuation">)</span>
	c <span class="token operator">:=</span> <span class="token function">spawnGroup</span><span class="token punctuation">(</span>worker<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span>c
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"the group of workers work done!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>通过sync.WaitGroup，对于每一个协程处理前进行wg.Add(1)，退出时执行wg.Done()，并等待所有的协程退出wg.Wait()。保障所有的协程都会结束。</p>
</div>
<h3 id="管道模式-pipeline" tabindex="-1"><a class="header-anchor" href="#管道模式-pipeline" aria-hidden="true">#</a> 管道模式-pipeline</h3>
<p>管道是Unix/Linux上一种典型的并发程序设计模式，例如执行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"\.go"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以利用管道机制过滤出当前路径下以&quot;.go&quot;结尾的文件列表。</p>
<p><code v-pre>ls -l</code>的输出作为<code v-pre>grep &quot;\.go&quot;</code>的输入很容易将两个功能模块串在一起。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>   ┌──────────────┐                                      ┌───────────────┐                                   ┌──────────────┐
   │    channel   │  ───────────►  goroutines ──────────►│    channel    │ ──────────► goroutines ─────────► │   channel    │
   └──────────────┘                                      └───────────────┘                                   └──────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go通常使用channel原语构建管道模式</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">echo</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
			out <span class="token operator">&lt;-</span> n
		<span class="token punctuation">}</span>
		<span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">square</span><span class="token punctuation">(</span>in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
			out <span class="token operator">&lt;-</span> n <span class="token operator">*</span> n
		<span class="token punctuation">}</span>
		<span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">odd</span><span class="token punctuation">(</span>in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
			<span class="token keyword">if</span> n<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
				out <span class="token operator">&lt;-</span> n
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token function">odd</span><span class="token punctuation">(</span><span class="token function">echo</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>echo</code>的结果作为<code v-pre>odd</code>的入参，<code v-pre>odd</code>的结果作为<code v-pre>square</code>的入参。这样我们很容易扩展其他功能函数，例如：<code v-pre>sum</code></p>
<p>参考资料：</p>
<p><a href="https://go.dev/blog/pipelines" target="_blank" rel="noopener noreferrer">Go Concurrency Patterns: Pipelines and cancellation<ExternalLinkIcon/></a></p>
<p><a href="https://coolshell.cn/articles/21228.html" target="_blank" rel="noopener noreferrer">GO编程模式：PIPELINE<ExternalLinkIcon/></a></p>
<h3 id="扇出-扇入模式" tabindex="-1"><a class="header-anchor" href="#扇出-扇入模式" aria-hidden="true">#</a> 扇出，扇入模式</h3>
<p>扇出模式，即多个相同goroutine从同一个channel读取数据并处理</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
                                                 ┌──────────────┐
               ┌──────────► goroutines ────────► │    channel   │
               │                                 └──────────────┘
               │
               │
  ┌────────────┴─┐                               ┌──────────────┐
  │    channel   ├────────► goroutines ────────► │    channel   │
  └────────────┬─┘                               └──────────────┘
               │
               │
               │                                 ┌──────────────┐
               └──────────► goroutines─────────► │    channel   │
                                                 └──────────────┘


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扇入模式，从多个channel读取数据并处理，将结果放入一个channel</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
 ┌──────────────┐
 │    channel   ├─────────┐
 └──────────────┘         │
                          │
                          │
 ┌──────────────┐         ▼                ┌──────────────┐
 │    channel   ├───────►goroutines───────►│    channel   │
 └──────────────┘         ▲                └──────────────┘
                          │
                          │
 ┌──────────────┐         │
 │    channel   ├─────────┘
 └──────────────┘

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sync"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">echo</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
			out <span class="token operator">&lt;-</span> n
		<span class="token punctuation">}</span>
		<span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">square</span><span class="token punctuation">(</span>in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
			out <span class="token operator">&lt;-</span> n <span class="token operator">*</span> n
		<span class="token punctuation">}</span>
		<span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">merge</span><span class="token punctuation">(</span>cs <span class="token operator">...</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	out <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	output <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> c <span class="token punctuation">{</span>
			out <span class="token operator">&lt;-</span> n
		<span class="token punctuation">}</span>
		wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>cs<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> cs <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">output</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> out
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
	in <span class="token operator">:=</span> <span class="token function">echo</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
	c1 <span class="token operator">:=</span> <span class="token function">square</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span>
	c2 <span class="token operator">:=</span> <span class="token function">square</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span>

	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">merge</span><span class="token punctuation">(</span>c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p>
<ul>
<li>c1、c2是两个相同的goroutine从同一个channel取数据进行平方计算，这就是扇出；</li>
<li>merge从c1、c2两个channel里取数据合并到一个channel里，这就是扇入；</li>
</ul>
<h2 id="超时与取消模式" tabindex="-1"><a class="header-anchor" href="#超时与取消模式" aria-hidden="true">#</a> 超时与取消模式</h2>
</div></template>


