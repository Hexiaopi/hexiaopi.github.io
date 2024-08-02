import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,e as n,b as e,o as p}from"./app--FSDv-O1.js";const i="/assets/flyweight-S1ijql94.png",l={},c=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/flyweight/flyweight-zh-2x.png",alt:"flyweight",tabindex:"0",loading:"lazy"}),n("figcaption",null,"flyweight")],-1),o=e('<h2 id="什么是享元模式" tabindex="-1"><a class="header-anchor" href="#什么是享元模式"><span>什么是享元模式</span></a></h2><p>享元模式（Flyweight Pattern）：有效地支持大量细粒度对象的复用,通过共享已经存在的对象来大幅度减少需要创建的对象数量、避免大量相似类的开销，从而提高系统资源的利用率。</p><p>享元对象能做到共享的关键是区分：内蕴状态（Internal State）和外蕴状态（External State），内蕴状态是存储在享元对象内部，并且不会随环境改变而改变，因此可以共享，外蕴状态是随着环境改变而改变，因此不可以共享。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色"><span>包含哪些角色</span></a></h3><figure><img src="'+i+`" alt="flyweight" tabindex="0" loading="lazy"><figcaption>flyweight</figcaption></figure><ul><li><p>Flyweight: 享元接口</p><p>所有元件的高层规范，声明与外蕴状态互动的接口标准</p></li><li><p>ConcreteFlyweight: 享元实现类</p><p>自身维护着内蕴状态，且能接受并相应外蕴状态，可以有多个实现。一个享元对象可以被称作一个<strong>元</strong>。</p></li><li><p>UnsharedFlyweight: 非享元角色</p><p>是不可以共享的外部状态，它以参数的形式注入具体享元的相关方法中</p></li><li><p>FlyweightFactory: 享元工厂</p><p>用来维护享元对象的工厂，负责对享元对象实例进行创建于管理，并对外提供获取享元对象的服务。</p></li><li><p>Client: 客户端</p><p>享元的使用者，负责维护外蕴状态。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> flyweight

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> UnsharedFlyweight <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ExternalState <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteFlyweight <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	InternalState <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>concrete ConcreteFlyweight<span class="token punctuation">)</span> <span class="token function">execute</span><span class="token punctuation">(</span>unshared UnsharedFlyweight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>concrete<span class="token punctuation">.</span>InternalState<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>unshared<span class="token punctuation">.</span>ExternalState<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Flyweight <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">execute</span><span class="token punctuation">(</span>unshared UnsharedFlyweight<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> FlyweightFactory <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	flyweights <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>Flyweight
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>factory FlyweightFactory<span class="token punctuation">)</span> <span class="token function">GetFlyweight</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> Flyweight <span class="token punctuation">{</span>
	<span class="token keyword">if</span> flyweight<span class="token punctuation">,</span> ok <span class="token operator">:=</span> factory<span class="token punctuation">.</span>flyweights<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> flyweight
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> flyweight

<span class="token keyword">func</span> <span class="token function">ExampleFlyweight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	factory <span class="token operator">:=</span> FlyweightFactory<span class="token punctuation">{</span>flyweights<span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>Flyweight<span class="token punctuation">{</span>
		<span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> ConcreteFlyweight<span class="token punctuation">{</span>InternalState<span class="token punctuation">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> ConcreteFlyweight<span class="token punctuation">{</span>InternalState<span class="token punctuation">:</span> <span class="token string">&quot;bb&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token string">&quot;c&quot;</span><span class="token punctuation">:</span> ConcreteFlyweight<span class="token punctuation">{</span>InternalState<span class="token punctuation">:</span> <span class="token string">&quot;ccc&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">}</span>
	a <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">GetFlyweight</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
	a<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>UnsharedFlyweight<span class="token punctuation">{</span>ExternalState<span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	b <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">GetFlyweight</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
	b<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>UnsharedFlyweight<span class="token punctuation">{</span>ExternalState<span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	c <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">GetFlyweight</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>UnsharedFlyweight<span class="token punctuation">{</span>ExternalState<span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// a</span>
	<span class="token comment">// 1</span>
	<span class="token comment">// bb</span>
	<span class="token comment">// 2</span>
	<span class="token comment">// ccc</span>
	<span class="token comment">// 3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>享元模式只是一种优化。在应用该模式之前，你要确定程序中存在与大量类似对象同时占用内存相关的内存消耗问题，并且确保该问题无法使用其他更好的方式来解决。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>享元模式的优点在于它可以极大减少内存中对象的数量，使得相同对象或相似对象在内存中只保存一份。</li><li>享元模式的外部状态相对独立，而且不会影响其内部状态，从而使得享元对象可以在不同的环境中被共享。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>增加系统复杂性。享元模式需要维护共享对象的状态，增加了代码的复杂度，同时也增加了系统的维护难度。</li><li>内部状态和外部状态的区分。享元模式需要区分内部状态和外部状态，内部状态可以被共享，但外部状态必须通过参数传递，增加了对象的可定制性，但也增加了系统的复杂度。</li></ul>`,16);function u(r,d){return p(),a("div",null,[c,t(" more "),o])}const h=s(l,[["render",u],["__file","flyweight.html.vue"]]),m=JSON.parse('{"path":"/design-pattern/structural/flyweight.html","title":"享元","lang":"zh-CN","frontmatter":{"title":"享元","date":"2022-12-06T00:00:00.000Z","tag":["Go","结构型模式"],"category":["设计模式"],"description":"flyweightflyweight","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/design-pattern/structural/flyweight.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"享元"}],["meta",{"property":"og:description","content":"flyweightflyweight"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://refactoringguru.cn/images/patterns/content/flyweight/flyweight-zh-2x.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-31T14:52:38.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"结构型模式"}],["meta",{"property":"article:published_time","content":"2022-12-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-31T14:52:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"享元\\",\\"image\\":[\\"https://refactoringguru.cn/images/patterns/content/flyweight/flyweight-zh-2x.png\\"],\\"datePublished\\":\\"2022-12-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-31T14:52:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"什么是享元模式","slug":"什么是享元模式","link":"#什么是享元模式","children":[{"level":3,"title":"包含哪些角色","slug":"包含哪些角色","link":"#包含哪些角色","children":[]},{"level":3,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]}],"git":{"createdTime":1690708801000,"updatedTime":1690815158000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":2.56,"words":767},"filePathRelative":"design-pattern/structural/flyweight.md","localizedDate":"2022年12月6日","excerpt":"<figure><img src=\\"https://refactoringguru.cn/images/patterns/content/flyweight/flyweight-zh-2x.png\\" alt=\\"flyweight\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>flyweight</figcaption></figure>\\n","autoDesc":true}');export{h as comp,m as data};