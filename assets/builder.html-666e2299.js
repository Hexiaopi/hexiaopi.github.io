import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as p,a as n,e}from"./app-3325ab7c.js";const c="/assets/builder-c479473b.png",i={},o=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/builder/builder-zh-2x.png",alt:"builder",tabindex:"0",loading:"lazy"}),n("figcaption",null,"builder")],-1),u=e('<h2 id="什么是建造者模式" tabindex="-1"><a class="header-anchor" href="#什么是建造者模式" aria-hidden="true">#</a> 什么是建造者模式</h2><p>建造者模式(Builder Pattern)又叫生成器模式，它将一个复杂对象的构建与它的表示分离。使统一的构建过程可以创建不同的表示。</p><p>它将一个复杂的对象分解为多个简单的对象，然后一步一步构建而成，它将变与不变相分离，即产品的组成部分是不变的，但每一部分是可以灵活选择的。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+c+`" alt="建造者模式" tabindex="0" loading="lazy"><figcaption>建造者模式</figcaption></figure><ul><li><p>Product：产品角色</p><p>包含多个组成部分的复杂对象，由具体建造者来创建各个零部件。</p></li><li><p>Builder：抽象建造者</p><p>为创建产品各个子部件指定抽象接口，一般是buildXXX()方法，通常还包含一个返回复杂产品的方法getResult()。</p></li><li><p>Concrete Builder：具体建造者</p><p>实现Builder接口，完成复杂产品的各个部件的具体创建方法。</p></li><li><p>Director：指挥者</p><p>调用建造者对象中的部件构建与装配方法完成复杂对象的创建，在指挥者中不涉及具体产品的信息。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> builder

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Product <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	partA <span class="token builtin">string</span>
	partB <span class="token builtin">string</span>
	partC <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Product<span class="token punctuation">)</span> <span class="token function">setPartA</span><span class="token punctuation">(</span>partA <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>partA <span class="token operator">=</span> partA
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Product<span class="token punctuation">)</span> <span class="token function">setPartB</span><span class="token punctuation">(</span>partB <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>partB <span class="token operator">=</span> partB
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Product<span class="token punctuation">)</span> <span class="token function">setPartC</span><span class="token punctuation">(</span>partC <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>partC <span class="token operator">=</span> partC
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Product<span class="token punctuation">)</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;A:%s\\tB:%s\\tC:%s&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>partA<span class="token punctuation">,</span> p<span class="token punctuation">.</span>partB<span class="token punctuation">,</span> p<span class="token punctuation">.</span>partC<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Builder <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">buildPartA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">buildPartB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">buildPartC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Director <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	builder Builder
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Director<span class="token punctuation">)</span> <span class="token function">Director</span><span class="token punctuation">(</span>builder Builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	d<span class="token punctuation">.</span>builder <span class="token operator">=</span> builder
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d Director<span class="token punctuation">)</span> <span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product <span class="token punctuation">{</span>
	d<span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">buildPartA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	d<span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">buildPartB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	d<span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">buildPartC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> d<span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteBuilder1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	product <span class="token operator">*</span>Product
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteBuilder1<span class="token punctuation">)</span> <span class="token function">buildPartA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">setPartA</span><span class="token punctuation">(</span><span class="token string">&quot;A1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteBuilder1<span class="token punctuation">)</span> <span class="token function">buildPartB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">setPartB</span><span class="token punctuation">(</span><span class="token string">&quot;B1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteBuilder1<span class="token punctuation">)</span> <span class="token function">buildPartC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">setPartC</span><span class="token punctuation">(</span><span class="token string">&quot;C1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteBuilder1<span class="token punctuation">)</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">*</span>c<span class="token punctuation">.</span>product
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteBuilder2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	product <span class="token operator">*</span>Product
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteBuilder2<span class="token punctuation">)</span> <span class="token function">buildPartA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">setPartA</span><span class="token punctuation">(</span><span class="token string">&quot;A2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteBuilder2<span class="token punctuation">)</span> <span class="token function">buildPartB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">setPartB</span><span class="token punctuation">(</span><span class="token string">&quot;B2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteBuilder2<span class="token punctuation">)</span> <span class="token function">buildPartC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">setPartC</span><span class="token punctuation">(</span><span class="token string">&quot;C2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteBuilder2<span class="token punctuation">)</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Product <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">*</span>c<span class="token punctuation">.</span>product
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> builder

<span class="token keyword">func</span> <span class="token function">ExampleDirector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	builder <span class="token operator">:=</span> ConcreteBuilder1<span class="token punctuation">{</span>product<span class="token punctuation">:</span> <span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> director Director
	director<span class="token punctuation">.</span><span class="token function">Director</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span>
	product <span class="token operator">:=</span> director<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	product<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output: A:A1	B:B1	C:C1</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleDirector_second</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	builder <span class="token operator">:=</span> ConcreteBuilder2<span class="token punctuation">{</span>product<span class="token punctuation">:</span> <span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> director Director
	director<span class="token punctuation">.</span><span class="token function">Director</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span>
	product <span class="token operator">:=</span> director<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	product<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output: A:A2	B:B2	C:C2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li>当要创建的对象是由多个部件组成，而且部件的组合方式可能有不同的变化时，可以使用建造者模式来封装复杂的创建逻辑，提高代码的复用性和可维护性。</li><li>当要创建的对象的构建过程需要分步进行，而且每一步都可能有不同的实现方式时，可以使用建造者模式来将构建过程和表示分离，提高代码的灵活性和扩展性。</li><li>当要创建的对象的表示和构建过程都需要根据不同的需求进行定制时，可以使用建造者模式来将客户端和具体建造者解耦，提高代码的可定制性和可配置性。</li></ul><p>例如：</p><p>房屋装修是一个复杂的过程，包含：地板的选择、墙体的装修颜色、天花板的设计、家具的布局等等。客户把装修要求告诉装修项目经理，项目经理指挥工人一步步装修，最后完成整个房屋的装修与布局。</p><p>汽车的建造通常包含：轮胎的选择、发动机的选择、车身设计、车内装潢等等，方案虽然不同，但步骤通常是一致的。</p><h3 id="有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#有哪些优缺点" aria-hidden="true">#</a> 有哪些优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>封装性好，创建和使用分离，调用者无需关注细节部分。</li><li>扩展性好，各个具体的建造者相互独立，有利于系统的解耦。</li><li>客户端不必知道产品内部组成的细节，建造者可以对创建过程逐步细化，而不对其他模块产生任何影响，便于控制细节风险。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>产品的组成部分必须相同，这限制了其使用范围。</li><li>如果产品内部发生变化，则建造者也要同步修改，后期维护成本较大。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>建造者设计模式是一种创建型模式，它可以用于创建复杂的对象，将对象的构建过程和表示分离开来。它适用于以下情况：</p><ul><li>当要创建的对象是由多个部件组成，而且部件的组合方式可能有不同的变化时。</li><li>当要创建的对象的构建过程需要分步进行，而且每一步都可能有不同的实现方式时。</li><li>当要创建的对象的表示和构建过程都需要根据不同的需求进行定制时。</li></ul>`,23);function l(r,d){return a(),t("div",null,[o,p(" more "),u])}const b=s(i,[["render",l],["__file","builder.html.vue"]]);export{b as default};
