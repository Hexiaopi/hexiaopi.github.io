import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,b as e,e as n,a as c}from"./app-2efc0a4c.js";const o="/assets/decorator-be34e891.png",p={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/decorator/decorator-2x.png",alt:"decorator",tabindex:"0",loading:"lazy"}),n("figcaption",null,"decorator")],-1),u=c('<h2 id="什么是装饰器模式" tabindex="-1"><a class="header-anchor" href="#什么是装饰器模式" aria-hidden="true">#</a> 什么是装饰器模式</h2><p>装饰器模式(Decorator Pattern)：它可以在不改变原有对象的结构和功能的情况下，动态地给对象添加新的功能或者增强原有功能。装饰器设计模式的核心思想是使用一个装饰器对象来包装原有对象，从而实现对原有对象的功能扩展或修改。</p><p>装饰器非常类似于<strong>继承</strong>，它们都是为了增强原始对象的功能，区别在于方式的不同，后者是在编译时(compile-time)静态地通过对原始类的继承完成，而前者则是在程序运行时(run-time)通过对原始对象地<strong>包装</strong>完成。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+o+`" alt="decorator" tabindex="0" loading="lazy"><figcaption>decorator</figcaption></figure><ul><li><p>Component: 组件接口</p><p>所有被装饰组件及装饰器对应的接口标准</p></li><li><p>ConcreteComponent: 具体组件</p><p>需要被装饰的组件，实现组件接口标准</p></li><li><p>Decorator: 装饰器</p><p>持有一个组件（Component）对象的实例，并定义一个与组件接口一致的接口。</p></li><li><p>ConcreteDecorator: 装饰器实现</p><p>继承自装饰器抽象类的具体子类装饰器，可以有多种实现，在被装饰组件对象的基础上为其添加新的特性。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> decorator

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Component <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteComponent <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteComponent<span class="token punctuation">)</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concrete component execute&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Decorator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	component Component
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Decorator<span class="token punctuation">)</span> <span class="token function">Decorator</span><span class="token punctuation">(</span>c Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	d<span class="token punctuation">.</span>component <span class="token operator">=</span> c
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d Decorator<span class="token punctuation">)</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	d<span class="token punctuation">.</span>component<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteDecortor1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Decorator
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteDecortor1<span class="token punctuation">)</span> <span class="token function">addedFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concrete decortor1 add function&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteDecortor1<span class="token punctuation">)</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span><span class="token function">addedFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>Decorator<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteDecortor2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Decorator
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteDecortor2<span class="token punctuation">)</span> <span class="token function">addedFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concrete decortor2 add function&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteDecortor2<span class="token punctuation">)</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span><span class="token function">addedFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>Decorator<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> ConcreteComponent<span class="token punctuation">{</span><span class="token punctuation">}</span>
	c<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//c1扩展c的功能</span>
	<span class="token keyword">var</span> c1 ConcreteDecortor1
	c1<span class="token punctuation">.</span>Decorator<span class="token punctuation">.</span><span class="token function">Decorator</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	c1<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//c2又扩展c1的功能</span>
	<span class="token keyword">var</span> c2 ConcreteDecortor2
	c2<span class="token punctuation">.</span>Decorator<span class="token punctuation">.</span><span class="token function">Decorator</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span>
	c2<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// concrete component execute</span>
	<span class="token comment">// concrete decortor1 add function</span>
	<span class="token comment">// concrete component execute</span>
	<span class="token comment">// concrete decortor2 add function</span>
	<span class="token comment">// concrete decortor1 add function</span>
	<span class="token comment">// concrete component execute</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li>当需要在不改变原有对象的结构和功能的情况下，给对象添加新的功能或者增强原有功能时。</li><li>当需要根据不同的需求，灵活地组合不同的功能扩展或修改时。</li><li>当需要保持原有对象的接口不变，保证了装饰后的对象和原有对象的兼容性时。</li></ul><h3 id="有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#有哪些优缺点" aria-hidden="true">#</a> 有哪些优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>可以在不修改原有对象的代码的情况下，给对象添加新的功能或者增强原有功能，符合开闭原则。</li><li>可以保持原有对象的接口不变，保证了装饰后的对象和原有对象的兼容性。</li><li>可以根据需要灵活地组合不同的装饰器对象，实现多种功能扩展或修改。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>会增加系统的复杂度，因为需要创建多个装饰器对象和管理它们之间的关系。</li><li>会增加系统的运行时开销，因为每次调用原有对象的方法时，都需要经过装饰器对象的转发和处理。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="装饰器设计模式和适配器设计模式" tabindex="-1"><a class="header-anchor" href="#装饰器设计模式和适配器设计模式" aria-hidden="true">#</a> 装饰器设计模式和适配器设计模式</h3><p>装饰器模式和适配器模式的区别在于它们的应用场景和目的不同。装饰器模式可以应用于任何需要对对象进行功能扩展或修改的场景，例如日志记录、缓存、验证等。适配器模式主要应用于两个不兼容的接口之间的转换，例如不同类型的电源插头、不同格式的数据源等。</p>`,20);function l(r,d){return a(),t("div",null,[i,e(" more "),u])}const m=s(p,[["render",l],["__file","decorator.html.vue"]]);export{m as default};
