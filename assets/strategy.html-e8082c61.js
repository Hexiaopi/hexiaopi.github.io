import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as e,a as n,e as c}from"./app-cf5e0735.js";const p="/assets/strategy-350216fe.png",i={},o=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/strategy/strategy-2x.png",alt:"strategy",tabindex:"0",loading:"lazy"}),n("figcaption",null,"strategy")],-1),l=c('<h2 id="什么是策略模式" tabindex="-1"><a class="header-anchor" href="#什么是策略模式" aria-hidden="true">#</a> 什么是策略模式</h2><p>策略模式(Strategy Pattern)定义了算法族，分别封装起来，让他们之间可以互相替换，此模式让算法的变化独立于使用算法的客户。策略模式属于对象行为模式，它通过对算法进行封装，把使用算法的责任和算法的实现分割开来，并委派给不同的对象对这些算法进行管理。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+p+`" alt="strategy" tabindex="0" loading="lazy"><figcaption>strategy</figcaption></figure><ul><li><p>Strategy: 策略接口</p><p>是所有具体策略的通用接口，它声明了一个上下文用于执行策略的方法</p></li><li><p>Concrete Strategies: 具体策略，实现了上下文所用算法的各种不同变体；</p></li><li><p>Context: 上下文，维护指向具体策略的引用，且仅通过策略接口与该对象进行交流；</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> strategy

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Strategy <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteStrategy1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s ConcreteStrategy1<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concrete strategy1 execute&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteStrategy2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s ConcreteStrategy2<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concrete strategy2 execute&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Context <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	strategy Strategy
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token function">SetStrategy</span><span class="token punctuation">(</span>strategy Strategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token function">Do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;do something&quot;</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> strategy

<span class="token keyword">func</span> <span class="token function">ExampleStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> Context<span class="token punctuation">{</span><span class="token punctuation">}</span>
	s1 <span class="token operator">:=</span> ConcreteStrategy1<span class="token punctuation">{</span><span class="token punctuation">}</span>
	c<span class="token punctuation">.</span><span class="token function">SetStrategy</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	s2 <span class="token operator">:=</span> ConcreteStrategy2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	c<span class="token punctuation">.</span><span class="token function">SetStrategy</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// do something</span>
	<span class="token comment">// concrete strategy1 execute</span>
	<span class="token comment">// do something</span>
	<span class="token comment">// concrete strategy2 execute</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>可以在运行时切换对象内的算法。</li><li>可以将算法的实现和使用算法的代码隔离开来。</li><li>可以使用组合来代替继承。</li><li>开闭原则，无需对上下文进行修改就能够引入新的策略。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>如果你的算法极少发生改变， 那么没有任何理由引入新的类和接口。 使用该模式只会让程序过于复杂。</li><li>客户端必须知晓策略间的不同——它需要选择合适的策略。</li><li>许多现代编程语言支持函数类型功能， 允许你在一组匿名函数中实现不同版本的算法。 这样， 你使用这些函数的方式就和使用策略对象时完全相同， 无需借助额外的类和接口来保持代码简洁。</li></ul>`,14);function u(r,d){return a(),t("div",null,[o,e(" more "),l])}const m=s(i,[["render",u],["__file","strategy.html.vue"]]);export{m as default};
