import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as i,f as l,a as n,b as s,d as e,e as a}from"./app-1350196b.js";const u={},r=n("p",null,"Go语言推荐CSP模型进行并发处理，而非通过共享内存。这里总结一些并发模式或者称作范式，去管理控制协程。",-1),k=a('<h2 id="go并发模式" tabindex="-1"><a class="header-anchor" href="#go并发模式" aria-hidden="true">#</a> Go并发模式</h2><p>我们都知道Go语言开启协程只需要<code>go func(){ }</code>，有时候需要与goroutine之间建立联系，方便进一步控制与处理。<br> 因此总结一些范式，优雅的管理goroutine。</p><h3 id="退出模式" tabindex="-1"><a class="header-anchor" href="#退出模式" aria-hidden="true">#</a> 退出模式</h3><p>使用关键字<code>go</code>很容易启动goroutine，这样创建的协程和当前协程已经分离，我们并不知道</p><h4 id="等待指定协程退出" tabindex="-1"><a class="header-anchor" href="#等待指定协程退出" aria-hidden="true">#</a> 等待指定协程退出</h4>',5),d=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{go:"",class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"time"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"type"),s(" signal "),n("span",{class:"token keyword"},"struct"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"worker"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"worker is working..."'),n("span",{class:"token punctuation"},")"),s(`
	time`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sleep"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"*"),s(" time"),n("span",{class:"token punctuation"},"."),s("Second"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"spawn"),n("span",{class:"token punctuation"},"("),s("f "),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<-"),n("span",{class:"token keyword"},"chan"),s(" signal "),n("span",{class:"token punctuation"},"{"),s(`
	c `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(" signal"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"worker start to work..."'),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		c `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token function"},"signal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"struct"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` c
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"start a worker..."'),n("span",{class:"token punctuation"},")"),s(`
	c `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"spawn"),n("span",{class:"token punctuation"},"("),s("worker"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token operator"},"<-"),s(`c
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"worker work done!"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"spawn函数创建的新goroutine与调用spawn函数的goroutine（main goroutine）之间通过channel建立了联系。")],-1),b=n("h4",{id:"等待多个协程退出",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#等待多个协程退出","aria-hidden":"true"},"#"),s(" 等待多个协程退出")],-1),m=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{go:"",class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"sync"'),s(`
	`),n("span",{class:"token string"},'"time"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"type"),s(" signal "),n("span",{class:"token keyword"},"struct"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"worker"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"worker %d: is working...\\n"'),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
	time`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sleep"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"*"),s(" time"),n("span",{class:"token punctuation"},"."),s("Second"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"worker %d: works done\\n"'),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"spawnGroup"),n("span",{class:"token punctuation"},"("),s("f "),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" num "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<-"),n("span",{class:"token keyword"},"chan"),s(" signal "),n("span",{class:"token punctuation"},"{"),s(`
	c `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(" signal"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" wg sync"),n("span",{class:"token punctuation"},"."),s(`WaitGroup

	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" num"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		wg`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"worker %d: start to work...\\n"'),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(`
			wg`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		wg`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Wait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		c `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token function"},"signal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"struct"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` c
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"the group of workers start to work..."'),n("span",{class:"token punctuation"},")"),s(`
	c `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"spawnGroup"),n("span",{class:"token punctuation"},"("),s("worker"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token operator"},"<-"),s(`c
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"the group of workers work done!"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=a(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过sync.WaitGroup，对于每一个协程处理前进行wg.Add(1)，退出时执行wg.Done()，并等待所有的协程退出wg.Wait()。保障所有的协程都会结束。</p></div><h3 id="管道模式-pipeline" tabindex="-1"><a class="header-anchor" href="#管道模式-pipeline" aria-hidden="true">#</a> 管道模式-pipeline</h3><p>管道是Unix/Linux上一种典型的并发程序设计模式，例如执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;\\.go&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以利用管道机制过滤出当前路径下以&quot;.go&quot;结尾的文件列表。</p><p><code>ls -l</code>的输出作为<code>grep &quot;\\.go&quot;</code>的输入很容易将两个功能模块串在一起。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   ┌──────────────┐                                      ┌───────────────┐                                   ┌──────────────┐
   │    channel   │  ───────────►  goroutines ──────────►│    channel    │ ──────────► goroutines ─────────► │   channel    │
   └──────────────┘                                      └───────────────┘                                   └──────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go通常使用channel原语构建管道模式</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>echo</code>的结果作为<code>odd</code>的入参，<code>odd</code>的结果作为<code>square</code>的入参。这样我们很容易扩展其他功能函数，例如：<code>sum</code></p><p>参考资料：</p>`,11),f={href:"https://go.dev/blog/pipelines",target:"_blank",rel:"noopener noreferrer"},w={href:"https://coolshell.cn/articles/21228.html",target:"_blank",rel:"noopener noreferrer"},h=a(`<h3 id="扇出-扇入模式" tabindex="-1"><a class="header-anchor" href="#扇出-扇入模式" aria-hidden="true">#</a> 扇出，扇入模式</h3><p>扇出模式，即多个相同goroutine从同一个channel读取数据并处理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扇入模式，从多个channel读取数据并处理，将结果放入一个channel</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p><ul><li>c1、c2是两个相同的goroutine从同一个channel取数据进行平方计算，这就是扇出；</li><li>merge从c1、c2两个channel里取数据合并到一个channel里，这就是扇入；</li></ul><h2 id="超时与取消模式" tabindex="-1"><a class="header-anchor" href="#超时与取消模式" aria-hidden="true">#</a> 超时与取消模式</h2>`,9);function y(_,x){const t=p("ExternalLinkIcon");return c(),i("div",null,[r,l(" more "),k,d,v,b,m,g,n("p",null,[n("a",f,[s("Go Concurrency Patterns: Pipelines and cancellation"),e(t)])]),n("p",null,[n("a",w,[s("GO编程模式：PIPELINE"),e(t)])]),h])}const G=o(u,[["render",y],["__file","index.html.vue"]]);export{G as default};
