import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,b as t,e as n,a as p}from"./app-20160e5e.js";const i="/assets/adapter-2f720252.png",c={},l=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/adapter/adapter-zh-2x.png",alt:"adapter",tabindex:"0",loading:"lazy"}),n("figcaption",null,"adapter")],-1),o=p('<h2 id="什么是适配器模式" tabindex="-1"><a class="header-anchor" href="#什么是适配器模式" aria-hidden="true">#</a> 什么是适配器模式</h2><p>适配器模式(Adapter Pattern)：它将一个接口转换成用户期望的另一个接口，使的接口不兼容的那些类可以相互合作。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+i+`" alt="适配器" tabindex="0" loading="lazy"><figcaption>适配器</figcaption></figure><ul><li><p>Target: 目标角色</p><p>该角色定义是用户期望的接口</p></li><li><p>Adapter: 适配器角色</p><p>将适配者的接口转换为目标接口的类，它是适配器模式的核心</p></li><li><p>Adaptee: 适配者</p><p>需要被适配的接口，它与目标角色接口不一致</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> adapter

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// Target是适配的目标接口</span>
<span class="token keyword">type</span> Target <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Adaptee是被适配的目标接口</span>
<span class="token keyword">type</span> Adaptee <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// AdapteeImpl是被适配的目标类</span>
<span class="token keyword">type</span> AdapteeImpl <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>impl <span class="token operator">*</span>AdapteeImpl<span class="token punctuation">)</span> <span class="token function">SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;adapteeImpl SpecificRequest&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewAdaptee是被适配接口的工厂函数</span>
<span class="token keyword">func</span> <span class="token function">NewAdaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Adaptee <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>AdapteeImpl<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Adapter是转换Adaptee为Target接口的适配器</span>
<span class="token keyword">type</span> Adapter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Adaptee
<span class="token punctuation">}</span>

<span class="token comment">// Adapter适配器实现目标接口</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a Adapter<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a<span class="token punctuation">.</span><span class="token function">SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewAdapter是Adapter的工厂函数，将Adaptee转化为Target</span>
<span class="token keyword">func</span> <span class="token function">NewAdapter</span><span class="token punctuation">(</span>adaptee Adaptee<span class="token punctuation">)</span> Target <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Adapter<span class="token punctuation">{</span>Adaptee<span class="token punctuation">:</span> adaptee<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> adapter

<span class="token keyword">func</span> <span class="token function">ExampleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	adaptee <span class="token operator">:=</span> <span class="token function">NewAdaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	target <span class="token operator">:=</span> <span class="token function">NewAdapter</span><span class="token punctuation">(</span>adaptee<span class="token punctuation">)</span>
	target<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// adapteeImpl SpecificRequest</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li>当我们想要使用一个已经存在的类，但是它的接口不符合我们的需求时，我们可以使用适配器来转换接口，而不需要修改原来的类。</li><li>当我们想要复用一些已有的功能，但是这些功能来自于不同的系统或者库时，我们可以使用适配器来统一接口，而不需要修改原来的系统或者库。</li><li>当我们想要在不同的环境中使用同一个类时，我们可以使用适配器来适应不同的环境，而不需要修改原来的类。</li></ul><h3 id="有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#有哪些优缺点" aria-hidden="true">#</a> 有哪些优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>提高代码的重用性：适配器设计模式可以将已经存在的代码与新的代码进行整合，提高了现有代码的重用率。</li><li>可以让不兼容的代码协同工作：适配器设计模式可以将一个类的接口转换成另一个类的接口，让其它不兼容的代码可以一起工作。</li><li>保证系统的稳定性：适配器设计模式可以让已有的系统保持稳定，不必对其进行修改，只是增加新的功能，满足<code>开闭原则</code>。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>增加代码复杂性：适配器设计模式需要在原有的类和适配器类中定义大量的代码，会增加系统的复杂度。</li><li>降低代码的可读性：适配器设计模式在现有类的基础上增加了适配器类，使得代码的可读性下降。</li><li>新增了一个中间层，可能会影响系统的性能：适配器设计模式新增了适配器类，可能会影响系统的性能，增加系统的运行开销。</li></ul>`,16);function u(d,r){return s(),e("div",null,[l,t(" more "),o])}const m=a(c,[["render",u],["__file","adapter.html.vue"]]);export{m as default};
