import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as e,a as n,e as p}from"./app-bfd127c2.js";const i="/assets/iterator-259b3a31.png",o={},c=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/iterator/iterator-zh-2x.png",alt:"iterator",tabindex:"0",loading:"lazy"}),n("figcaption",null,"iterator")],-1),l=p('<h2 id="什么是迭代器模式" tabindex="-1"><a class="header-anchor" href="#什么是迭代器模式" aria-hidden="true">#</a> 什么是迭代器模式</h2><p>迭代器模式是一种行为设计模式，让你能在不暴露集合底层结构（列表、栈、树等）的情况下遍历集合中的所有元素。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+i+`" alt="iterator" tabindex="0" loading="lazy"><figcaption>iterator</figcaption></figure><ul><li><p>Iterator: 迭代器接口</p><p>声明了遍历集合所需的操作</p></li><li><p>IterableCollection: 集合接口</p><p>声明一个方法或多个方法来获取与集合兼容的迭代器。</p></li><li><p>ConcreteIterator: 具体迭代器</p><p>实现遍历集合的一种特定算法，迭代器对象必须跟踪自身遍历进度。</p></li><li><p>ConcreteCollection: 具体集合</p><p>会在客户端请求迭代器时返回一个特定的具体迭代器类实体。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> iterator

<span class="token keyword">type</span> Aggregate <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Iterator
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Iterator <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">HasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
	<span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteIterator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	numbers <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	next    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>ConcreteIterator<span class="token punctuation">)</span> <span class="token function">HasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> i<span class="token punctuation">.</span>next <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>numbers<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>ConcreteIterator<span class="token punctuation">)</span> <span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> i<span class="token punctuation">.</span><span class="token function">HasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		numer <span class="token operator">:=</span> i<span class="token punctuation">.</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">.</span>next<span class="token punctuation">]</span>
		i<span class="token punctuation">.</span>next <span class="token operator">+=</span> <span class="token number">1</span>
		<span class="token keyword">return</span> numer
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteAggregate <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Length <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>ConcreteAggregate<span class="token punctuation">)</span> <span class="token function">Iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Iterator <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcreteIterator<span class="token punctuation">{</span>
		numbers<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">,</span>
		next<span class="token punctuation">:</span>    <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> iterator

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">ExampleIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> aggregate Aggregate
	aggregate <span class="token operator">=</span> <span class="token operator">&amp;</span>ConcreteAggregate<span class="token punctuation">{</span>Length<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span>
	iterator <span class="token operator">:=</span> aggregate<span class="token punctuation">.</span><span class="token function">Iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	i <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> iterator<span class="token punctuation">.</span><span class="token function">HasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token boolean">_</span> <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		i<span class="token operator">++</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// 0</span>
	<span class="token comment">// 1</span>
	<span class="token comment">// 2</span>
	<span class="token comment">// 3</span>
	<span class="token comment">// 4</span>
	<span class="token comment">// 5</span>
	<span class="token comment">// 6</span>
	<span class="token comment">// 7</span>
	<span class="token comment">// 8</span>
	<span class="token comment">// 9</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>访问一个聚合对象的内容而无须暴露它的内部表示。</li><li>遍历任务交由迭代器完成，这简化了聚合类。</li><li>它支持以不同方式遍历一个聚合，甚至可以自定义迭代器的子类以支持新的遍历。</li><li>增加新的聚合类和迭代器类都很方便，无须修改原有代码。</li><li>封装性良好，为遍历不同的聚合结构提供一个统一的接口。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>增加了类的个数，这在一定程度上增加了系统的复杂性。</li></ul>`,14);function u(r,d){return a(),t("div",null,[c,e(" more "),l])}const m=s(o,[["render",u],["__file","iterator.html.vue"]]);export{m as default};
