import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,f as o,a as n,e as t}from"./app-75201acf.js";const i={},l=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"iota的出现使得枚举值更加方便，但注意哦，并不简单。主要是对iota定义不理解，我整理了一些iota的使用注意事项")],-1),c=t(`<h2 id="iota" tabindex="-1"><a class="header-anchor" href="#iota" aria-hidden="true">#</a> iota</h2><blockquote><p>iota是Go语言的一个预定义标识符，它表示的是const声明块或声明行中每个常量所处位置的<strong>偏移值</strong>（从0开始）。</p></blockquote><h3 id="规则-如果按行递增-可省略后续的iota关键字" tabindex="-1"><a class="header-anchor" href="#规则-如果按行递增-可省略后续的iota关键字" aria-hidden="true">#</a> 规则：如果按行递增，可省略后续的iota关键字</h3><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	Sunday    <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//0</span>
	Monday           <span class="token comment">//1</span>
	Tuesday          <span class="token comment">//2</span>
	Wednesday        <span class="token comment">//3</span>
	Thursday         <span class="token comment">//4</span>
	Friday           <span class="token comment">//5</span>
	Saturday         <span class="token comment">//6</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这与常量的规则：<strong>如果不指定类型和初始化值，则默认表示使用上行的赋值表达式</strong>一致</p><p>上面等价于</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	Sunday    <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//0</span>
	Monday    <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//1</span>
	Tuesday   <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//2</span>
	Wednesday <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//3</span>
	Thursday  <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//4</span>
	Friday    <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//5</span>
	Saturday  <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//6</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规则-iota只跟常量组的偏移位置有关" tabindex="-1"><a class="header-anchor" href="#规则-iota只跟常量组的偏移位置有关" aria-hidden="true">#</a> 规则：iota只跟常量组的偏移位置有关</h3><p>‼️</p><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	a <span class="token operator">=</span> <span class="token char">&#39;A&#39;</span>
	b
	c <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//iota=2</span>
	d        <span class="token comment">//iota=3</span>

	e <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//iota=4</span>
	f        <span class="token comment">//iota=5</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然c是第一次使用iota标识符定义，但在const块中位置属于第3，此时iota为2；</p><p>d与e之间虽然有空行，但e的偏移位置属于第5，因此iota为4；</p><h3 id="规则-每遇到一个const关键字-iota就会重置为0" tabindex="-1"><a class="header-anchor" href="#规则-每遇到一个const关键字-iota就会重置为0" aria-hidden="true">#</a> 规则：每遇到一个const关键字，iota就会重置为0</h3><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//iota=0</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">//iota=0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规则-iota跟个数无关-即便是同一行-值也都一样" tabindex="-1"><a class="header-anchor" href="#规则-iota跟个数无关-即便是同一行-值也都一样" aria-hidden="true">#</a> 规则：iota跟个数无关，即便是同一行，值也都一样</h3><p>‼️</p><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	g<span class="token punctuation">,</span> h <span class="token operator">=</span> <span class="token boolean">iota</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">10</span> <span class="token comment">//0,10 (iota=0)</span>
	i<span class="token punctuation">,</span> j                   <span class="token comment">//1,11 (iota=1)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然g,h是两个常量，但由于在同一行，iota的值一样</p><h3 id="规则-如果想从1开始-则可以通过-忽略第一个iota" tabindex="-1"><a class="header-anchor" href="#规则-如果想从1开始-则可以通过-忽略第一个iota" aria-hidden="true">#</a> 规则：如果想从1开始，则可以通过<code>_</code>忽略第一个iota</h3><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	<span class="token boolean">_</span>          <span class="token operator">=</span> <span class="token boolean">iota</span>
	KB <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token boolean">iota</span><span class="token punctuation">)</span> <span class="token comment">//2^10</span>
	MB                            <span class="token comment">//2^20</span>
	GB                            <span class="token comment">//...</span>
	TB
	PB
	EB
	ZB
	YB
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function p(d,r){return s(),e("div",null,[l,o(" more "),c])}const v=a(i,[["render",p],["__file","iota.html.vue"]]);export{v as default};
