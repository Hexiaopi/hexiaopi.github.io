import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as p,a as n,e}from"./app-42f3c9f0.js";const o="/assets/composite-051cfae0.png",c={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/composite/composite-2x.png",alt:"composite",tabindex:"0",loading:"lazy"}),n("figcaption",null,"composite")],-1),l=e('<h2 id="某一场景问题" tabindex="-1"><a class="header-anchor" href="#某一场景问题" aria-hidden="true">#</a> 某一场景问题</h2><p>例如：有两类对象：<code>产品</code>和<code>盒子</code>，<code>盒子</code>中可以包含多个<code>产品</code>或者小<code>盒子</code>，在此基础需要知道这个盒子的总价格，如果直接打开所有的盒子，累加产品的价值，虽然可行。但对计算机会增加许多繁杂的细节。</p><p>那么使用组合模式，就可以很好的简化这个细节，如果是<code>产品</code>就直接返回价格，如果是<code>盒子</code>，则遍历盒子中的所有项目，累加价格。最大的优点，<code>产品</code>和<code>盒子</code>提供一致的接口，你无需了解内部结构，只需要调用这一个接口即可。</p><h2 id="什么是组合模式" tabindex="-1"><a class="header-anchor" href="#什么是组合模式" aria-hidden="true">#</a> 什么是组合模式</h2><p>组合模式（Composite Pattern）：是针对由多个节点对象（部分）组成的树形结构的对象（整体）而发展出的一种结构型设计模式，它能够使客户端在操作整体对象或者其下的每个节点对象时做出统一的响应，保证树形结构对象使用方法的一致性。使客户端不必关注对象的整体或部分，最终达到对象复杂的层次结构与客户端解耦的目的。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+o+`" alt="composite" tabindex="0" loading="lazy"><figcaption>composite</figcaption></figure><ul><li><p>Component: 抽象构件角色</p><p>它的主要作用是为树叶构件和树枝构件声明公共接口</p></li><li><p>Leaf: 树叶构件角色</p><p>组合模式中的叶节点对象，它没有子节点</p></li><li><p>Composite: 树枝构件角色</p><p>是组合模式中的分支节点对象，它与子节点。</p></li></ul><h3 id="有哪些分类" tabindex="-1"><a class="header-anchor" href="#有哪些分类" aria-hidden="true">#</a> 有哪些分类</h3><p>(1) 透明方式：在该方式中，由于抽象构件声明了所有子类中的全部方法，所以客户端无须区别树叶对象和树枝对象，对客户端来说是透明的。但其缺点是：树叶构件本来没有 Add()、Remove() 及 GetChild() 方法，却要实现它们（空实现或抛异常），这样会带来一些安全性问题。</p><p>(2) 安全方式：在该方式中，将管理子构件的方法移到树枝构件中，抽象构件和树叶构件没有对子对象的管理方法，这样就避免了上一种方式的安全性问题，但由于叶子和分支有不同的接口，客户端在调用时要知道树叶对象和树枝对象的存在，所以失去了透明性。</p><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> composite

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Component <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Leaf <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>Leaf<span class="token punctuation">)</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;leaf execute&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Composite <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	children <span class="token punctuation">[</span><span class="token punctuation">]</span>Component
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>composite <span class="token operator">*</span>Composite<span class="token punctuation">)</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> composite<span class="token punctuation">.</span>children <span class="token punctuation">{</span>
		v<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>composite <span class="token operator">*</span>Composite<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>c Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	composite<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>composite<span class="token punctuation">.</span>children<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>composite <span class="token operator">*</span>Composite<span class="token punctuation">)</span> <span class="token function">Remove</span><span class="token punctuation">(</span>c Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token keyword">switch</span> c<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">*</span>Leaf<span class="token punctuation">:</span>
		children <span class="token operator">:=</span> composite<span class="token punctuation">.</span>children
		<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> children <span class="token punctuation">{</span>
			<span class="token keyword">if</span> value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>Leaf<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
				<span class="token keyword">if</span> value <span class="token operator">==</span> c <span class="token punctuation">{</span>
					flag <span class="token operator">=</span> <span class="token boolean">true</span>
					<span class="token keyword">switch</span> i <span class="token punctuation">{</span>
					<span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
						composite<span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
					<span class="token keyword">case</span> <span class="token function">len</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
						composite<span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">[</span><span class="token number">0</span> <span class="token punctuation">:</span> <span class="token function">len</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
					<span class="token keyword">default</span><span class="token punctuation">:</span>
						composite<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> children<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
					<span class="token keyword">break</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token keyword">case</span> <span class="token operator">*</span>Composite<span class="token punctuation">:</span>
		children <span class="token operator">:=</span> composite<span class="token punctuation">.</span>children
		<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> children <span class="token punctuation">{</span>
			<span class="token keyword">if</span> value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>Composite<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
				<span class="token keyword">if</span> value <span class="token operator">==</span> c <span class="token punctuation">{</span>
					flag <span class="token operator">=</span> <span class="token boolean">true</span>
					<span class="token keyword">switch</span> i <span class="token punctuation">{</span>
					<span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
						composite<span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
					<span class="token keyword">case</span> <span class="token function">len</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
						composite<span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">[</span><span class="token number">0</span> <span class="token punctuation">:</span> <span class="token function">len</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
					<span class="token keyword">default</span><span class="token punctuation">:</span>
						composite<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> children<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>flag <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;not found&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>composite <span class="token operator">*</span>Composite<span class="token punctuation">)</span> <span class="token function">GetChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Component <span class="token punctuation">{</span>
	<span class="token keyword">return</span> composite<span class="token punctuation">.</span>children
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> composite

<span class="token keyword">func</span> <span class="token function">ExampleLeaf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> c Component
	l <span class="token operator">:=</span> Leaf<span class="token punctuation">{</span><span class="token punctuation">}</span>
	c <span class="token operator">=</span> <span class="token operator">&amp;</span>l
	c<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// leaf execute</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleComposite</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> c Component
	composite <span class="token operator">:=</span> <span class="token operator">&amp;</span>Composite<span class="token punctuation">{</span>
		children<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Component<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	composite<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Leaf<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	composite<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Leaf<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	c <span class="token operator">=</span> composite
	c<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// leaf execute</span>
	<span class="token comment">// leaf execute</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>组合模式使得客户端代码可以一致地处理单个对象和组合对象，无须关心自己处理的是单个对象，还是组合对象，这简化了客户端代码；</li><li>更容易在组合体内加入新的对象，客户端不会因为加入了新的对象而更改源代码，满足<strong>开闭原则</strong>；</li><li>组合模式适用于递归结构，使得代码的实现变得更加简单；</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>递归结构限制：递归结构对于计算机的性能来说是一种挑战，如果组合对象的结构过于复杂，这将会影响程序的性能和可维护性；</li><li>接口实现复杂：组合对象必须实现单个对象的所有方法。在组合对象中实现与单个对象相同的方法可能会导致代码冗余；</li></ul>`,20);function u(d,r){return a(),t("div",null,[i,p(" more "),l])}const m=s(c,[["render",u],["__file","composite.html.vue"]]);export{m as default};
