import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-ede0c30a.js";const t={},p=e(`<p>defer 语句能够帮助我们确保在函数结束时执行一些必要的操作，比如：<strong>关闭文件句柄</strong>、<strong>释放资源</strong>、<strong>解锁互斥锁</strong>等。defer 关键字只能作用函数或函数调用。</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><h3 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序" aria-hidden="true">#</a> 执行顺序</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>defer 语句的执行顺序是按照先进后出（FILO）的，即先进去 defer 语句将最后执行。</p></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>43210</p></details><h3 id="参数计算时机" tabindex="-1"><a class="header-anchor" href="#参数计算时机" aria-hidden="true">#</a> 参数计算时机</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>defer 语句中的函数参数会在 defer 语句被声明时进行求值，而不是在实际执行时。</p></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	i <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>1</p></details><h3 id="延迟函数体" tabindex="-1"><a class="header-anchor" href="#延迟函数体" aria-hidden="true">#</a> 延迟函数体</h3><h4 id="延迟函数体未传参" tabindex="-1"><a class="header-anchor" href="#延迟函数体未传参" aria-hidden="true">#</a> 延迟函数体未传参</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	i <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>2</p></details><h4 id="延迟函数体传参" tabindex="-1"><a class="header-anchor" href="#延迟函数体传参" aria-hidden="true">#</a> 延迟函数体传参</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	i <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>1</p></details><p>demo3和demo4的唯一区别是执行函数体是否传参，却得到完全不同的结果。</p><ul><li>demo3没有传参，无法直接计算，但是可以引用</li><li>demo4传入参数，可以直接计算</li></ul><h3 id="可能会操作并影响返回值" tabindex="-1"><a class="header-anchor" href="#可能会操作并影响返回值" aria-hidden="true">#</a> 可能会操作并影响返回值</h3><h4 id="函数签名返回具名返回值" tabindex="-1"><a class="header-anchor" href="#函数签名返回具名返回值" aria-hidden="true">#</a> 函数签名返回具名返回值</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token operator">++</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> i
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><p>2</p></details><p>这是由于return并非原子操作，上面函数等价于</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  i <span class="token operator">:=</span> <span class="token number">1</span>
  result <span class="token operator">=</span> i
  result<span class="token operator">++</span>
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数签名返回匿名返回值" tabindex="-1"><a class="header-anchor" href="#函数签名返回匿名返回值" aria-hidden="true">#</a> 函数签名返回匿名返回值</h4><div class="hint-container danger"><p class="hint-container-title">警告</p><p>这种情况下defer语句可以引用返回值，但不会改变返回值</p></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	i <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> i
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleDeferDemo6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">DeferDemo6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里等价于返回了一个<code>anony</code>的匿名变量，如下所示：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>anony <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i <span class="token operator">:=</span> <span class="token number">1</span>
  anony <span class="token operator">=</span> i
  i<span class="token operator">++</span>
	<span class="token keyword">return</span> anony
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="显示return常量也可能会影响返回值" tabindex="-1"><a class="header-anchor" href="#显示return常量也可能会影响返回值" aria-hidden="true">#</a> 显示return常量也可能会影响返回值</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo7</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token operator">++</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>执行结果</summary><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleDeferDemo7</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">DeferDemo7</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然显示返回0，但由于return不是原子操作。等价于：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DeferDemo7</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	result <span class="token operator">=</span> <span class="token number">0</span>
	result<span class="token operator">++</span>
	<span class="token keyword">return</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,32),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","defer.html.vue"]]);export{d as default};