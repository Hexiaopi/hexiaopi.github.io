import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,b as e,o as t}from"./app-B3c3qJUn.js";const p={},i=e(`<p>defer 语句能够帮助我们确保在函数结束时执行一些必要的操作，比如：<strong>关闭文件句柄</strong>、<strong>释放资源</strong>、<strong>解锁互斥锁</strong>等。defer 关键字只能作用函数或函数调用。</p><h1 id="defer注意事项" tabindex="-1"><a class="header-anchor" href="#defer注意事项"><span>defer注意事项</span></a></h1><h2 id="大多数内置函数不可以直接调用" tabindex="-1"><a class="header-anchor" href="#大多数内置函数不可以直接调用"><span>大多数内置函数不可以直接调用</span></a></h2><blockquote><p>大多数内置函数（除了<code>copy</code>和<code>recover</code>）的调用的返回结果都不可以舍弃，而defer延迟调用的返回结果都必须舍弃掉，所以，很多内置函数是不能被被延迟直接调用的。当然可以通过匿名函数来解决。</p></blockquote><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">}</span>
	<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// [a x y d]</span>
	<span class="token comment">// defer append(s[:1], &quot;x&quot;, &quot;y&quot;) // 编译错误</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token boolean">_</span> <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;y&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序"><span>执行顺序</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>defer 语句的执行顺序是按照先进后出（FILO）的，即先进去 defer 语句将最后执行。</p></div><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>43210</p></details><h2 id="参数计算时机" tabindex="-1"><a class="header-anchor" href="#参数计算时机"><span>参数计算时机</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>defer 语句中的函数参数会在 defer 语句被声明时进行求值，而不是在实际执行时。</p></div><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	i <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>1</p></details><p>我们再看一个复杂的例子：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> T <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t T<span class="token punctuation">)</span> <span class="token function">M</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> T <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token keyword">return</span> t
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> t T
	<span class="token comment">// 由于需要估值M(2)的属主实参，因此需要先计算t.M(1)。</span>
	<span class="token keyword">defer</span> t<span class="token punctuation">.</span><span class="token function">M</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">M</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	t<span class="token punctuation">.</span><span class="token function">M</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">M</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>1342</p></details><h2 id="遇见异常" tabindex="-1"><a class="header-anchor" href="#遇见异常"><span>遇见异常</span></a></h2><h3 id="遇见panic" tabindex="-1"><a class="header-anchor" href="#遇见panic"><span>遇见panic</span></a></h3><blockquote><p>遇见panic，defer将会执行。这也是recover为什么要包含在defer中的原因。</p></blockquote><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;此行可以被执行到&quot;</span><span class="token punctuation">)</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>此行可以被执行到
panic: xxx

goroutine 1 [running]:
main.main()
        D:/code/test/test/main.go:7 +0x59
exit status 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="遇见os-exit" tabindex="-1"><a class="header-anchor" href="#遇见os-exit"><span>遇见os.Exit</span></a></h3><blockquote><p>主动调用os.Exit(int)退出进程时，defer将不再被执行</p></blockquote><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;defer&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;some thing...&quot;</span><span class="token punctuation">)</span>
	os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>some thing...
exit status 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="延迟函数体" tabindex="-1"><a class="header-anchor" href="#延迟函数体"><span>延迟函数体</span></a></h2><h3 id="延迟函数体未传参" tabindex="-1"><a class="header-anchor" href="#延迟函数体未传参"><span>延迟函数体未传参</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	i <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>2</p></details><h3 id="延迟函数体传参" tabindex="-1"><a class="header-anchor" href="#延迟函数体传参"><span>延迟函数体传参</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	i <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>1</p></details><p>demo3和demo4的唯一区别是执行函数体是否传参，却得到完全不同的结果。</p><ul><li>demo3没有传参，无法直接计算，但是可以引用</li><li>demo4传入参数，可以直接计算</li></ul><h2 id="可能会操作并影响返回值" tabindex="-1"><a class="header-anchor" href="#可能会操作并影响返回值"><span>可能会操作并影响返回值</span></a></h2><h3 id="函数签名返回具名返回值" tabindex="-1"><a class="header-anchor" href="#函数签名返回具名返回值"><span>函数签名返回具名返回值</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token operator">++</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> i
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>2</p></details><p>这是由于return并非原子操作，上面函数等价于</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  i <span class="token operator">:=</span> <span class="token number">1</span>
  result <span class="token operator">=</span> i
  result<span class="token operator">++</span>
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数签名返回匿名返回值" tabindex="-1"><a class="header-anchor" href="#函数签名返回匿名返回值"><span>函数签名返回匿名返回值</span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>这种情况下defer语句可以引用返回值，但不会改变返回值</p></div><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	i <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> i
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleDeferDemo6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">DeferDemo6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里等价于返回了一个<code>anony</code>的匿名变量，如下所示：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>anony <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i <span class="token operator">:=</span> <span class="token number">1</span>
  anony <span class="token operator">=</span> i
  i<span class="token operator">++</span>
	<span class="token keyword">return</span> anony
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="显示return常量也可能会影响返回值" tabindex="-1"><a class="header-anchor" href="#显示return常量也可能会影响返回值"><span>显示return常量也可能会影响返回值</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo7</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token operator">++</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleDeferDemo7</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">DeferDemo7</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然显示返回0，但由于return不是原子操作。等价于：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo7</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	result <span class="token operator">=</span> <span class="token number">0</span>
	result<span class="token operator">++</span>
	<span class="token keyword">return</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="可能会造成短暂性内存泄漏" tabindex="-1"><a class="header-anchor" href="#可能会造成短暂性内存泄漏"><span>可能会造成短暂性内存泄漏</span></a></h2><blockquote><p>当需要处理大量的文件，下面函数退出之前，将有大量的文件句柄得不到释放。</p></blockquote><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">writeManyFiles</span><span class="token punctuation">(</span>files <span class="token punctuation">[</span><span class="token punctuation">]</span>File<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
		f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>
		<span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>

		err <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">Sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>对上面的函数改进如下：</p></blockquote><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">writeManyFiles</span><span class="token punctuation">(</span>files <span class="token punctuation">[</span><span class="token punctuation">]</span>File<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
			f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> err
			<span class="token punctuation">}</span>
			<span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 将在此循环步内执行</span>

			<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> err
			<span class="token punctuation">}</span>

			<span class="token keyword">return</span> f<span class="token punctuation">.</span><span class="token function">Sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52);function o(c,l){return t(),s("div",null,[a(" more "),i])}const d=n(p,[["render",o],["__file","defer.html.vue"]]),k=JSON.parse('{"path":"/language/go/base/defer.html","title":"defer注意事项","lang":"zh-CN","frontmatter":{"title":"defer注意事项","date":"2023-08-27T00:00:00.000Z","order":12,"tag":["Go","基础"],"category":["编程语言"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/language/go/base/defer.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"defer注意事项"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T07:00:58.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:published_time","content":"2023-08-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-16T07:00:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"defer注意事项\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-16T07:00:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"大多数内置函数不可以直接调用","slug":"大多数内置函数不可以直接调用","link":"#大多数内置函数不可以直接调用","children":[]},{"level":2,"title":"执行顺序","slug":"执行顺序","link":"#执行顺序","children":[]},{"level":2,"title":"参数计算时机","slug":"参数计算时机","link":"#参数计算时机","children":[]},{"level":2,"title":"遇见异常","slug":"遇见异常","link":"#遇见异常","children":[{"level":3,"title":"遇见panic","slug":"遇见panic","link":"#遇见panic","children":[]},{"level":3,"title":"遇见os.Exit","slug":"遇见os-exit","link":"#遇见os-exit","children":[]}]},{"level":2,"title":"延迟函数体","slug":"延迟函数体","link":"#延迟函数体","children":[{"level":3,"title":"延迟函数体未传参","slug":"延迟函数体未传参","link":"#延迟函数体未传参","children":[]},{"level":3,"title":"延迟函数体传参","slug":"延迟函数体传参","link":"#延迟函数体传参","children":[]}]},{"level":2,"title":"可能会操作并影响返回值","slug":"可能会操作并影响返回值","link":"#可能会操作并影响返回值","children":[{"level":3,"title":"函数签名返回具名返回值","slug":"函数签名返回具名返回值","link":"#函数签名返回具名返回值","children":[]},{"level":3,"title":"函数签名返回匿名返回值","slug":"函数签名返回匿名返回值","link":"#函数签名返回匿名返回值","children":[]},{"level":3,"title":"显示return常量也可能会影响返回值","slug":"显示return常量也可能会影响返回值","link":"#显示return常量也可能会影响返回值","children":[]}]},{"level":2,"title":"可能会造成短暂性内存泄漏","slug":"可能会造成短暂性内存泄漏","link":"#可能会造成短暂性内存泄漏","children":[]}],"git":{"createdTime":1692713124000,"updatedTime":1729062058000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":4}]},"readingTime":{"minutes":3.36,"words":1009},"filePathRelative":"language/go/base/defer.md","localizedDate":"2023年8月27日","excerpt":""}');export{d as comp,k as data};
