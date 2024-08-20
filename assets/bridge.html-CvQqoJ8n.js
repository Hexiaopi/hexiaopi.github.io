import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,e as n,b as e,o as p}from"./app-Dw5okklM.js";const i="/assets/bridge-question-BPz2aQKK.png",c="/assets/bridge-CnsPyP7H.png",o={},l=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/bridge/bridge-2x.png",alt:"bridge",tabindex:"0",loading:"lazy"}),n("figcaption",null,"bridge")],-1),u=e('<h2 id="场景问题" tabindex="-1"><a class="header-anchor" href="#场景问题"><span>场景问题</span></a></h2><p>假设你有一个几何形状类Shape，从它扩展出两个子类：圆形Cicle和方形Square，你希望对这样的类进行扩展使其包含两种颜色：Blue、Red。</p><figure><img src="'+i+'" alt="bridge-question" tabindex="0" loading="lazy"><figcaption>bridge-question</figcaption></figure><p>很快你会发现，如果新增形状类，例如: 三角形，椭圆形。或者新增颜色，子类的数量将会暴躁式增长。</p><p>为了解决这些问题，我们可以用桥接模式来将图形的形状和颜色分离为两个层次结构，让它们可以独立地变化。</p><h2 id="什么是桥接模式" tabindex="-1"><a class="header-anchor" href="#什么是桥接模式"><span>什么是桥接模式</span></a></h2><p>桥接模式(Bridge Pattern)：是一种结构型设计模式，能将抽象与实现分离，使二者可以各自单独变化而不受对方约束，使用时再将它们组合起来，就像架设桥梁一样链接它们的功能，如此降低了抽象与实现这两个可变维度的耦合度，以保证系统的可扩展性。</p><p>桥接模式通过将继承改为组合的方式来解决这个问题，具体来说，就是抽取其中一个维度并使之成为独立的类层次，这样就可以在初始类中引用这个新层次的对象，从而使得一个类不必拥有所有的状态和行为。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色"><span>包含哪些角色</span></a></h3><figure><img src="'+c+`" alt="bridge" tabindex="0" loading="lazy"><figcaption>bridge</figcaption></figure><ul><li><p>Abstraction: 抽象角色</p><p>定义抽象类，并包含一个对实现对象的引用</p></li><li><p>RefinedAbstraction: 扩展抽象角色</p><p>抽象角色的子类，实现父类中的业务方法，并通过组合关系调用实现角色中的业务方法。</p></li><li><p>Implementor: 实现角色</p><p>定义实现类的接口，该接口不一定要与抽象角色的接口完全一致，而是根据实际情况来设计</p></li><li><p>ConCreteImplementor: 具体实现角色</p><p>实现角色接口的具体实现</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> bridge

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Implementor <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">OperationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreateImplA <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ConcreateImplA<span class="token punctuation">)</span> <span class="token function">OperationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreateImplA&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreateImplB <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ConcreateImplB<span class="token punctuation">)</span> <span class="token function">OperationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreateImplB&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Abstraction <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> RefineAbstractionA <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Impl Implementor
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ra RefineAbstractionA<span class="token punctuation">)</span> <span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;RefineAbstractionA&quot;</span><span class="token punctuation">)</span>
	ra<span class="token punctuation">.</span>Impl<span class="token punctuation">.</span><span class="token function">OperationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> RefineAbstractionB <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Impl Implementor
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ra RefineAbstractionB<span class="token punctuation">)</span> <span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;RefineAbstractionB&quot;</span><span class="token punctuation">)</span>
	ra<span class="token punctuation">.</span>Impl<span class="token punctuation">.</span><span class="token function">OperationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> bridge

<span class="token keyword">func</span> <span class="token function">ExampleOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a <span class="token operator">:=</span> ConcreateImplA<span class="token punctuation">{</span><span class="token punctuation">}</span>
	b <span class="token operator">:=</span> ConcreateImplB<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> abstract Abstraction
	abstract <span class="token operator">=</span> RefineAbstractionA<span class="token punctuation">{</span>Impl<span class="token punctuation">:</span> a<span class="token punctuation">}</span>
	abstract<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	abstract <span class="token operator">=</span> RefineAbstractionA<span class="token punctuation">{</span>Impl<span class="token punctuation">:</span> b<span class="token punctuation">}</span>
	abstract<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	abstract <span class="token operator">=</span> RefineAbstractionB<span class="token punctuation">{</span>Impl<span class="token punctuation">:</span> a<span class="token punctuation">}</span>
	abstract<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	abstract <span class="token operator">=</span> RefineAbstractionB<span class="token punctuation">{</span>Impl<span class="token punctuation">:</span> b<span class="token punctuation">}</span>
	abstract<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// RefineAbstractionA</span>
	<span class="token comment">// ConcreateImplA</span>
	<span class="token comment">// RefineAbstractionA</span>
	<span class="token comment">// ConcreateImplB</span>
	<span class="token comment">// RefineAbstractionB</span>
	<span class="token comment">// ConcreateImplA</span>
	<span class="token comment">// RefineAbstractionB</span>
	<span class="token comment">// ConcreateImplB</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决场景问题" tabindex="-1"><a class="header-anchor" href="#解决场景问题"><span>解决场景问题</span></a></h3><p>回到本文前面的问题，那么我们如何使用桥接模式解决该问题呢</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> shape

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// Implementor</span>
<span class="token keyword">type</span> Color <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// Concrete Implementor</span>
<span class="token keyword">type</span> Red <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r Red<span class="token punctuation">)</span> <span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&quot;red&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Concrete Implementor</span>
<span class="token keyword">type</span> Blue <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b Blue<span class="token punctuation">)</span> <span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&quot;blue&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Abstraction</span>
<span class="token keyword">type</span> Shape <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Refined Abstraction</span>
<span class="token keyword">type</span> Circle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	color Color <span class="token comment">//组合关系</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c Circle<span class="token punctuation">)</span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; circle&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Refined Abstraction</span>
<span class="token keyword">type</span> Square <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	color Color <span class="token comment">//组合关系</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Square<span class="token punctuation">)</span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">GetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; square&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> shape

<span class="token keyword">func</span> <span class="token function">ExampleBridge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	red <span class="token operator">:=</span> Red<span class="token punctuation">{</span><span class="token punctuation">}</span>
	blue <span class="token operator">:=</span> Blue<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token keyword">var</span> shape Shape
	shape <span class="token operator">=</span> Circle<span class="token punctuation">{</span>red<span class="token punctuation">}</span>
	shape<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	shape <span class="token operator">=</span> Circle<span class="token punctuation">{</span>blue<span class="token punctuation">}</span>
	shape<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	shape <span class="token operator">=</span> Square<span class="token punctuation">{</span>red<span class="token punctuation">}</span>
	shape<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	shape <span class="token operator">=</span> Square<span class="token punctuation">{</span>blue<span class="token punctuation">}</span>
	shape<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// red circle</span>
	<span class="token comment">// blue circle</span>
	<span class="token comment">// red square</span>
	<span class="token comment">// blue square</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#有哪些优缺点"><span>有哪些优缺点</span></a></h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h4><ul><li>实现了抽象和实现部分的分离，从而极大地提高了系统的灵活性，让抽象部分和实现部分独立开来，这有助于系统进行分层设计，从而产生更好的结构化系统。</li><li>符合开闭原则，抽象部分和实现部分可以分别独立地扩展，而不会相互影响，对系统的修改是通过增加代码进行的，而不是修改原有代码。</li><li>符合合成复用原则，可以使用不同的实现部分来组合不同的抽象部分，实现更多的功能组合。</li><li>其实现细节对客户透明，客户只需要关心抽象部分的接口，不用了解具体的实现细节。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h4><ul><li>增加了系统的理解和设计难度，由于关联关系建立在抽象层，要求开发者一开始就针对抽象层进行设计和编程，能正确地识别出系统中两个独立变化的维度，这增加了系统的复杂性和学习成本。</li><li>要求正确识别出系统中两个独立变化的维度，因此其使用范围有一定的局限性，如果系统中只有一个变化维度或者两个变化维度之间有很强的耦合关系，那么桥接模式就不适用了。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><h3 id="桥接设计模式和适配器设计模式的区别" tabindex="-1"><a class="header-anchor" href="#桥接设计模式和适配器设计模式的区别"><span>桥接设计模式和适配器设计模式的区别</span></a></h3><p>适配器模式是为了复用已有接口的功能，而通过适配将已有接口功能引入到所需接口的一种模式，目的是能够结合。适配器是先定义了新接口，然后才与旧接口进行适配，即先接口后关系。</p><p>桥接模式是在一个系统中解决多个维度独立变化的类之间的耦合度问题，先定义了一个桥（即实现和抽象的关系），通过多个实现的不同组合达到其灵活性的目的，即先关系后组合。</p><ul><li><p>适配器模式中适配器角色只需要一个，解决两个接口适配问题。</p></li><li><p>桥接模式中扩展抽象角色通常有多个，解决抽象和实现组合爆炸问题。</p></li><li><p>适配器模式中适配者通常只有一个。</p></li><li><p>桥接模式中具体抽象和实现的关系可以有多个，使得多个维度独立变化。</p></li></ul>`,30);function r(d,k){return p(),a("div",null,[l,t(" more "),u])}const b=s(o,[["render",r],["__file","bridge.html.vue"]]),g=JSON.parse('{"path":"/design-pattern/structural/bridge.html","title":"桥接","lang":"zh-CN","frontmatter":{"title":"桥接","date":"2022-12-10T00:00:00.000Z","tag":["Go","结构型模式"],"category":["设计模式"],"description":"bridgebridge","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/design-pattern/structural/bridge.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"桥接"}],["meta",{"property":"og:description","content":"bridgebridge"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://refactoringguru.cn/images/patterns/content/bridge/bridge-2x.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-31T14:52:38.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"结构型模式"}],["meta",{"property":"article:published_time","content":"2022-12-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-31T14:52:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"桥接\\",\\"image\\":[\\"https://refactoringguru.cn/images/patterns/content/bridge/bridge-2x.png\\"],\\"datePublished\\":\\"2022-12-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-31T14:52:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"场景问题","slug":"场景问题","link":"#场景问题","children":[]},{"level":2,"title":"什么是桥接模式","slug":"什么是桥接模式","link":"#什么是桥接模式","children":[{"level":3,"title":"包含哪些角色","slug":"包含哪些角色","link":"#包含哪些角色","children":[]},{"level":3,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":3,"title":"解决场景问题","slug":"解决场景问题","link":"#解决场景问题","children":[]},{"level":3,"title":"有哪些优缺点","slug":"有哪些优缺点","link":"#有哪些优缺点","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"桥接设计模式和适配器设计模式的区别","slug":"桥接设计模式和适配器设计模式的区别","link":"#桥接设计模式和适配器设计模式的区别","children":[]}]}],"git":{"createdTime":1690708801000,"updatedTime":1690815158000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":4.67,"words":1401},"filePathRelative":"design-pattern/structural/bridge.md","localizedDate":"2022年12月10日","excerpt":"<figure><img src=\\"https://refactoringguru.cn/images/patterns/content/bridge/bridge-2x.png\\" alt=\\"bridge\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>bridge</figcaption></figure>\\n","autoDesc":true}');export{b as comp,g as data};
