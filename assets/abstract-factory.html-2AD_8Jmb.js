import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,e as n,b as e,o as c}from"./app-hO4--mKO.js";const p="/assets/abstract-factory-CA8fnCGp.png",o={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/abstract-factory/abstract-factory-zh-2x.png",alt:"abstract-factory",tabindex:"0",loading:"lazy"}),n("figcaption",null,"abstract-factory")],-1),l=e('<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>工厂方法模式只考虑生产同等级的产品，而抽象工厂模式(Abstract Factory Pattern)可生产多个等级的产品。抽象工厂模式用于生成<strong>产品族</strong>的工厂，所生成的对象是有关联的，同一个具体工厂所生产的位于不同等级的一组产品称为一个产品族，例如：</p><ul><li>桌子、椅子、沙发是一个产品族</li><li>欧洲牌、亚洲牌是一个产品等级</li></ul><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色"><span>角色</span></a></h3><figure><img src="'+p+`" alt="抽象工厂模式" tabindex="0" loading="lazy"><figcaption>抽象工厂模式</figcaption></figure><ul><li><p>Abstract Factory: 抽象工厂</p><p>它声明了一组用于创建一族产品的方法，每一个方法对应一种产品。</p></li><li><p>Concrete Factory: 具体工厂</p><p>它实现了在抽象工厂中声明的创建产品的方法，生成一组具体产品，这些产品构成了一个产品族，每一个产品都位于某个产品等级结构中。</p></li><li><p>Abstract Product: 抽象产品</p><p>它为每种产品声明接口，在抽象产品中声明了产品所具有的业务方法。</p></li><li><p>Product: 具体产品</p><p>它定义具体工厂生产的具体产品对象，实现抽象产品接口中声明的业务方法。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> abstract_factory

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 抽象产品1</span>
<span class="token keyword">type</span> Product1 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品2</span>
<span class="token keyword">type</span> Product2 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Use</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂</span>
<span class="token keyword">type</span> AbstractFactory <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">NewProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product1
	<span class="token function">NewProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product2
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品11</span>
<span class="token keyword">type</span> ConcreteProduct11 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ConcreteProduct11<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Product11 show&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品12</span>
<span class="token keyword">type</span> ConcreteProduct12 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ConcreteProduct12<span class="token punctuation">)</span> <span class="token function">Use</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Product12 use&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂1</span>
<span class="token keyword">type</span> ConcreteFactory1 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ConcreteFactory1<span class="token punctuation">)</span> <span class="token function">NewProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product1 <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcreteProduct11<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ConcreteFactory1<span class="token punctuation">)</span> <span class="token function">NewProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product2 <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcreteProduct12<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品21</span>
<span class="token keyword">type</span> ConcreteProduct21 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ConcreteProduct21<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Product21 show&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteProduct22 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ConcreteProduct22<span class="token punctuation">)</span> <span class="token function">Use</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Product22 use&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂2</span>
<span class="token keyword">type</span> ConcreteFactory2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ConcreteFactory2<span class="token punctuation">)</span> <span class="token function">NewProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product1 <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcreteProduct21<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ConcreteFactory2<span class="token punctuation">)</span> <span class="token function">NewProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product2 <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcreteProduct22<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> abstract_factory

<span class="token keyword">func</span> <span class="token function">ExampleConcreteFactory1_NewProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> factory AbstractFactory
	factory <span class="token operator">=</span> ConcreteFactory1<span class="token punctuation">{</span><span class="token punctuation">}</span>
	product1 <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">NewProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	Product2 <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">NewProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	product1<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	Product2<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// Product11 show</span>
	<span class="token comment">// Product12 use</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleConcreteFactory2_NewProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> factory AbstractFactory
	factory <span class="token operator">=</span> ConcreteFactory2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	product1 <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">NewProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	product2 <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">NewProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	product1<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	product2<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// Product21 show</span>
	<span class="token comment">// Product22 use</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果"><span>效果</span></a></h2><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><p>在以下情况下可以使用抽象工厂模式：</p><ul><li>一个系统不应当依赖于产品类实例如何被创建、组合和表达的细节，这对于所有类型的工厂模式都是重要的。</li><li>系统中有多于一个的产品族，而每次只使用其中某一产品族。</li><li>属于同一个产品族的产品将在一起使用，这一约束必须在系统的设计中体现出来。</li><li>系统提供一个产品类的库，所有的产品以同样的接口出现，从而使客户端不依赖于具体实现。</li></ul><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点"><span>优缺点</span></a></h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h4><ul><li>抽象工厂模式隔离了具体类的生产，使得客户并不需要知道什么被创建。</li><li>抽象工厂模式可以在类的内部对产品族进行约束，保证客户端始终只使用同一个产品族中的对象。</li><li>抽象工厂模式可以方便地切换产品系列，只需要更换具体工厂即可。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h4><ul><li>产品族扩展非常困难，要增加一个系列的某一产品，既要在抽象的工厂里加代码，又要在具体的工厂里加代码。<strong>产品族难扩展，产品等级易扩展</strong></li><li>抽象工厂模式增加了系统的抽象性和理解难度。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>抽象工厂模式通过引入抽象工厂接口和抽象产品接口，提供了一种统一的接口用于创建一组相关的产品对象。它可以将产品的创建过程封装起来，使得客户端代码可以与具体产品的实现细节解耦。抽象工厂模式的灵活性和可扩展性允许在运行时动态切换不同的具体工厂和产品族。</p>`,22);function u(r,d){return c(),a("div",null,[i,t(" more "),l])}const m=s(o,[["render",u],["__file","abstract-factory.html.vue"]]),b=JSON.parse('{"path":"/design-pattern/creational/abstract-factory.html","title":"抽象工厂","lang":"zh-CN","frontmatter":{"title":"抽象工厂","date":"2022-10-15T00:00:00.000Z","order":4,"tag":["Go","创建型模式"],"category":["设计模式"],"description":"abstract-factoryabstract-factory","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/design-pattern/creational/abstract-factory.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"抽象工厂"}],["meta",{"property":"og:description","content":"abstract-factoryabstract-factory"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://refactoringguru.cn/images/patterns/content/abstract-factory/abstract-factory-zh-2x.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T10:01:59.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"创建型模式"}],["meta",{"property":"article:published_time","content":"2022-10-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T10:01:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抽象工厂\\",\\"image\\":[\\"https://refactoringguru.cn/images/patterns/content/abstract-factory/abstract-factory-zh-2x.png\\"],\\"datePublished\\":\\"2022-10-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-15T10:01:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[{"level":3,"title":"角色","slug":"角色","link":"#角色","children":[]},{"level":3,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]}]},{"level":2,"title":"效果","slug":"效果","link":"#效果","children":[{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1690708801000,"updatedTime":1715767319000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":3},{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":3.31,"words":993},"filePathRelative":"design-pattern/creational/abstract-factory.md","localizedDate":"2022年10月15日","excerpt":"<figure><img src=\\"https://refactoringguru.cn/images/patterns/content/abstract-factory/abstract-factory-zh-2x.png\\" alt=\\"abstract-factory\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>abstract-factory</figcaption></figure>\\n","autoDesc":true}');export{m as comp,b as data};