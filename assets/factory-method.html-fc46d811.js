import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as e,a as n,e as c}from"./app-8a0efb98.js";const o="/assets/factory-method-3bbfb10e.png",p={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/factory-method/factory-method-zh-2x.png",alt:"factory-method",tabindex:"0",loading:"lazy"}),n("figcaption",null,"factory-method")],-1),l=c('<p>工厂方法模式(Factory Method Pattern)也叫虚拟构造器(Virtual Constructor)模式</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>由于简单工厂模式违背了<code>开闭原则</code>，而工厂方法模式对简单工厂模式进一步抽象，其好处是可以使系统在不修改原来代码的情况下引进新的产品，即满足开闭原则。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色" aria-hidden="true">#</a> 角色</h3><figure><img src="'+o+`" alt="工厂方法模式" tabindex="0" loading="lazy"><figcaption>工厂方法模式</figcaption></figure><ul><li><p>Abstract Factory：抽象工厂</p><p>提供了创建产品的接口，调用者通过它访问具体工厂的工厂方法来创建产品。</p></li><li><p>Concrete Factory：具体工厂</p><p>实现了抽象工厂的方法，完成具体产品的创建。</p></li><li><p>Product：抽象产品</p><p>定义了产品的规范，描述了产品的主要特性和功能。</p></li><li><p>Concrete Product：具体产品</p><p>实现了抽象产品定义的接口，由具体工厂来创建，它同具体工厂之间一一对应。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> factory_method

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 抽象产品</span>
<span class="token keyword">type</span> Product <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂</span>
<span class="token keyword">type</span> AbstractFactory <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">NewProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品1</span>
<span class="token keyword">type</span> ConcreteProduct1 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ConcreteProduct1<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Product1 show&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂1</span>
<span class="token keyword">type</span> ConcreteFactory1 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ConcreteFactory1<span class="token punctuation">)</span> <span class="token function">NewProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcreteProduct1<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品2</span>
<span class="token keyword">type</span> ConcreteProduct2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ConcreteProduct2<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Product2 show&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂2</span>
<span class="token keyword">type</span> ConcreteFactory2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ConcreteFactory2<span class="token punctuation">)</span> <span class="token function">NewProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcreteProduct2<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用工厂创建产品示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> factory_method

<span class="token keyword">func</span> <span class="token function">ExampleConcreteFactory1_NewProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> factory AbstractFactory
	factory <span class="token operator">=</span> ConcreteFactory1<span class="token punctuation">{</span><span class="token punctuation">}</span>
	product <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">NewProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	product<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// Product1 show</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleConcreteFactory2_NewProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> factory AbstractFactory
	factory <span class="token operator">=</span> ConcreteFactory2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	product <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">NewProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	product<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// Product2 show</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h2><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>遵循了<code>开闭原则</code>，扩展性极强。增加新的产品类时，只需增加对应的工厂类，不需要修改原有代码。</li><li>降低了系统的耦合性，将对象的创建和使用分离，使得各个模块各司其职。</li><li>利用了面向接口编程的思路，创建的对象是一个符合通用接口的通用对象，这个对象的具体实现可以随意替换。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>增加了系统的复杂度，类的个数容易过多，增加了系统抽象性和理解难度。</li><li>增加了系统的开销，每次创建对象时都要创建一个工厂对象，消耗资源和时间。</li><li><strong>抽象产品只能是一种产品</strong>。此弊端可使用抽象工厂模式解决。</li></ul><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li>当创建对象需要使用大量重复的代码时，可以使用工厂方法模式来简化代码和提高可读性。</li><li>当客户端不关心对象的创建过程和实现细节时，可以使用工厂方法模式来隐藏对象的创建逻辑，只需要知道工厂类和产品接口即可。</li><li>当一个类通过其子类来指定创建哪个对象时，可以使用工厂方法模式来实现多态和动态绑定，让子类决定具体的产品类。</li><li>当需要根据不同的环境或条件来创建不同的对象时，可以使用工厂方法模式来根据不同的工厂类来创建对应的产品类。</li></ul><p>举例：</p><ul><li>换灯泡：假设你有一个灯泡接口，它有一个方法是发光，你有不同的灯泡实现类，比如白炽灯、节能灯、LED灯等，每种灯泡都有自己的工厂类，负责创建对应的灯泡对象。这样你就可以根据需要选择不同的工厂来创建不同的灯泡，而不用直接使用new关键字。</li><li>日志记录器：假设你有一个日志记录器接口，它有一个方法是记录日志，你有不同的日志记录器实现类，比如文件日志记录器、数据库日志记录器、网络日志记录器等，每种日志记录器都有自己的工厂类，负责创建对应的日志记录器对象。这样你就可以根据需要选择不同的工厂来创建不同的日志记录器，而不用直接使用new关键字。</li><li>电脑商店：假设你有一个电脑接口，它有一些方法是显示配置、运行程序等，你有不同的电脑实现类，比如联想电脑、华为电脑、苹果电脑等，每种电脑都有自己的工厂类，负责创建对应的电脑对象。这样你就可以根据需要选择不同的工厂来创建不同的电脑，而不用直接使用new关键字。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>工厂方法模式通过定义工厂接口和产品接口，并由具体的工厂类和产品类来实现，实现了对象的创建和使用的分离，提高了代码的可扩展性和可维护性。</p>`,23);function u(r,d){return a(),t("div",null,[i,e(" more "),l])}const m=s(p,[["render",u],["__file","factory-method.html.vue"]]);export{m as default};
