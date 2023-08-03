import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t,e}from"./app-a68aad8a.js";const c="/assets/simple-factory-9d4d1cdb.png",p={},o=e('<h2 id="什么是简单工厂模式" tabindex="-1"><a class="header-anchor" href="#什么是简单工厂模式" aria-hidden="true">#</a> 什么是简单工厂模式</h2><p>简单工厂模式(Simple Factory Pattern)又称为静态工厂方法(Static Factory Method)模式</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>它可以根据参数的不同，返回不同类的实例，而无需让客户端知道具体的创建细节。</p></div><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+c+`" alt="simple-factory" tabindex="0" loading="lazy"><figcaption>simple-factory</figcaption></figure><ul><li><p>SimpleFactory：简单工厂</p><p>简单工厂根据参数的不同创建并返回不同的产品实例。</p></li><li><p>Product：抽象产品</p><p>抽象产品负责描述所有实例所共有的公共接口。</p></li><li><p>ConcreteProduct：具体产品</p><p>具体产品实现产品的具体行为。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> simple_factory

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 抽象产品</span>
<span class="token keyword">type</span> Product <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	Product1 <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token boolean">iota</span>
	Product2
<span class="token punctuation">)</span>

<span class="token comment">// 工厂</span>
<span class="token keyword">type</span> SimpleFactory <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>SimpleFactory<span class="token punctuation">)</span> <span class="token function">NewProduct</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> Product <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> i <span class="token punctuation">{</span>
	<span class="token keyword">case</span> Product1<span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcreteProduct1<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">case</span> Product2<span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcreteProduct2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品1</span>
<span class="token keyword">type</span> ConcreteProduct1 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ConcreteProduct1<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Product1 show&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品2</span>
<span class="token keyword">type</span> ConcreteProduct2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ConcreteProduct2<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Product2 show&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例：只需要传入产品的参数，就可以获得该产品</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> simple_factory

<span class="token keyword">func</span> <span class="token function">ExampleSimpleFactory_NewProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	factory <span class="token operator">:=</span> SimpleFactory<span class="token punctuation">{</span><span class="token punctuation">}</span>
	product <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">NewProduct</span><span class="token punctuation">(</span>Product1<span class="token punctuation">)</span>
	product<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// Product1 show</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleSimpleFactory_NewProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	factory <span class="token operator">:=</span> SimpleFactory<span class="token punctuation">{</span><span class="token punctuation">}</span>
	product <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">NewProduct</span><span class="token punctuation">(</span>Product2<span class="token punctuation">)</span>
	product<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// Product2 show</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有哪些应用场景" tabindex="-1"><a class="header-anchor" href="#有哪些应用场景" aria-hidden="true">#</a> 有哪些应用场景</h3><ul><li>创建对象少：工厂类负责创建的对象比较少。</li><li>不关心创建过程：客户端只知道传入工厂类的参数，对于如何创建对象不关心。</li></ul><p>例如：</p><ul><li>对于<strong>门</strong>这个产品，我们只需要给定的<strong>材料</strong>参数，工厂就会给我们创建<code>木门</code>、<code>铁门</code>、<code>玻璃门</code>等等。</li></ul><h3 id="有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#有哪些优缺点" aria-hidden="true">#</a> 有哪些优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>实现了对象的创建和使用分离，降低了系统的耦合性。</li><li>通过该模式，实现了对责任的分配，提高了系统的灵活性和可维护性。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>扩展性差，如果要增加新的产品类，就需要修改工厂类的代码，违背了<strong>开闭</strong>原则</li><li>由于使用了静态工厂方法，造成工厂角色无法形成基于继承的结构</li><li>如果产品种类较多，工厂方法的代码将会非常复杂</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>简单工厂设计模式是一种创建型设计模式，它可以根据参数的不同，返回不同类的实例，而无需让客户端知道具体的创建细节。简单工厂设计模式有利于实现对象的创建和使用分离，降低了系统的耦合性，提高了系统的灵活性和可维护性。但是简单工厂设计模式也有缺点，首先，它扩展性差，如果要增加新的产品类，就需要修改工厂类的代码，违背了<code>开闭原则</code>。其次，工厂类的职责过重，如果产品种类较多，工厂方法的代码将会非常复杂。因此，简单工厂设计模式适用于创建对象少且不关心创建过程的场景。</p>`,21);function i(l,u){return s(),a("div",null,[t(" more "),o])}const k=n(p,[["render",i],["__file","simple-factory.html.vue"]]);export{k as default};
