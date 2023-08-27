import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-04408f53.js";const p="/assets/fan-out-726f9e1b.png",e="/assets/fan-in-1cb610c8.png",o={},c=t('<h2 id="扇出模式" tabindex="-1"><a class="header-anchor" href="#扇出模式" aria-hidden="true">#</a> 扇出模式</h2><p>即多个相同goroutine从同一个channel读取数据并处理</p><figure><img src="'+p+`" alt="fan-out" tabindex="0" loading="lazy"><figcaption>fan-out</figcaption></figure><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestFanOut</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
	in <span class="token operator">:=</span> <span class="token function">echo</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
	c1 <span class="token operator">:=</span> <span class="token function">odd</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span>
	c2 <span class="token operator">:=</span> <span class="token function">odd</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span>
	c3 <span class="token operator">:=</span> <span class="token function">odd</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span>
	t<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;c1&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> c1 <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	t<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;c2&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> c2 <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	t<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;c3&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> c3 <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=== RUN   TestFanOut
    fan-in-fan-out_test.go:24: c1
    fan-in-fan-out_test.go:26: 1
    fan-in-fan-out_test.go:26: 7
    fan-in-fan-out_test.go:26: 9
    fan-in-fan-out_test.go:28: c2
    fan-in-fan-out_test.go:30: 3
    fan-in-fan-out_test.go:32: c3
    fan-in-fan-out_test.go:34: 5
--- PASS: TestFanOut (0.00s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用三个协程从一个channel中过滤2的倍数，分别放在三个channel输出。由于Go语言调度不确定性，因此测试结果可能不一致。</p><h2 id="扇入模式" tabindex="-1"><a class="header-anchor" href="#扇入模式" aria-hidden="true">#</a> 扇入模式</h2><p>从多个channel读取数据并处理，将结果放入一个channel</p><figure><img src="`+e+`" alt="fan-in" tabindex="0" loading="lazy"><figcaption>fan-in</figcaption></figure><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">merge</span><span class="token punctuation">(</span>cs <span class="token operator">...</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扇入使用示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestFanIn</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
	in <span class="token operator">:=</span> <span class="token function">echo</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
	c1 <span class="token operator">:=</span> <span class="token function">square</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span>
	c2 <span class="token operator">:=</span> <span class="token function">square</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span>

	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">merge</span><span class="token punctuation">(</span>c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=== RUN   TestFanIn
    fan-in-fan-out_test.go:14: 1
    fan-in-fan-out_test.go:14: 4
    fan-in-fan-out_test.go:14: 16
    fan-in-fan-out_test.go:14: 9
    fan-in-fan-out_test.go:14: 25
    fan-in-fan-out_test.go:14: 49
    fan-in-fan-out_test.go:14: 36
    fan-in-fan-out_test.go:14: 64
    fan-in-fan-out_test.go:14: 100
    fan-in-fan-out_test.go:14: 81
--- PASS: TestFanIn (0.00s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p><ul><li>c1、c2是两个相同的goroutine从同一个channel取数据进行平方计算，这就是扇出；</li><li>merge从c1、c2两个channel里取数据合并到一个channel里，这就是扇入；</li></ul>`,17),i=[c];function u(l,k){return s(),a("div",null,i)}const v=n(o,[["render",u],["__file","fan-in-fan-out.html.vue"]]);export{v as default};
