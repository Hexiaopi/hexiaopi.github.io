import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as e,e as n,b as t,o as p}from"./app-W4hHVE41.js";const i="/assets/adapter-GErBk65T.png",c={},l=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/adapter/adapter-zh-2x.png",alt:"adapter",tabindex:"0",loading:"lazy"}),n("figcaption",null,"adapter")],-1),o=t('<h2 id="什么是适配器模式" tabindex="-1"><a class="header-anchor" href="#什么是适配器模式"><span>什么是适配器模式</span></a></h2><p>适配器模式(Adapter Pattern)：它将一个接口转换成用户期望的另一个接口，使的接口不兼容的那些类可以相互合作。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色"><span>包含哪些角色</span></a></h3><figure><img src="'+i+`" alt="适配器" tabindex="0" loading="lazy"><figcaption>适配器</figcaption></figure><ul><li><p>Target: 目标角色</p><p>该角色定义是用户期望的接口</p></li><li><p>Adapter: 适配器角色</p><p>将适配者的接口转换为目标接口的类，它是适配器模式的核心</p></li><li><p>Adaptee: 适配者</p><p>需要被适配的接口，它与目标角色接口不一致</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> adapter

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> adapter

<span class="token keyword">func</span> <span class="token function">ExampleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	adaptee <span class="token operator">:=</span> <span class="token function">NewAdaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	target <span class="token operator">:=</span> <span class="token function">NewAdapter</span><span class="token punctuation">(</span>adaptee<span class="token punctuation">)</span>
	target<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// adapteeImpl SpecificRequest</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><ul><li>当我们想要使用一个已经存在的类，但是它的接口不符合我们的需求时，我们可以使用适配器来转换接口，而不需要修改原来的类。</li><li>当我们想要复用一些已有的功能，但是这些功能来自于不同的系统或者库时，我们可以使用适配器来统一接口，而不需要修改原来的系统或者库。</li><li>当我们想要在不同的环境中使用同一个类时，我们可以使用适配器来适应不同的环境，而不需要修改原来的类。</li></ul><h3 id="有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#有哪些优缺点"><span>有哪些优缺点</span></a></h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h4><ul><li>提高代码的重用性：适配器设计模式可以将已经存在的代码与新的代码进行整合，提高了现有代码的重用率。</li><li>可以让不兼容的代码协同工作：适配器设计模式可以将一个类的接口转换成另一个类的接口，让其它不兼容的代码可以一起工作。</li><li>保证系统的稳定性：适配器设计模式可以让已有的系统保持稳定，不必对其进行修改，只是增加新的功能，满足<code>开闭原则</code>。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h4><ul><li>增加代码复杂性：适配器设计模式需要在原有的类和适配器类中定义大量的代码，会增加系统的复杂度。</li><li>降低代码的可读性：适配器设计模式在现有类的基础上增加了适配器类，使得代码的可读性下降。</li><li>新增了一个中间层，可能会影响系统的性能：适配器设计模式新增了适配器类，可能会影响系统的性能，增加系统的运行开销。</li></ul>`,16);function r(d,u){return p(),s("div",null,[l,e(" more "),o])}const v=a(c,[["render",r],["__file","adapter.html.vue"]]),g=JSON.parse('{"path":"/design-pattern/structural/adapter.html","title":"适配器","lang":"zh-CN","frontmatter":{"title":"适配器","date":"2022-10-18T00:00:00.000Z","tag":["Go","结构型模式"],"category":["设计模式"],"description":"adapteradapter","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/design-pattern/structural/adapter.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"适配器"}],["meta",{"property":"og:description","content":"adapteradapter"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://refactoringguru.cn/images/patterns/content/adapter/adapter-zh-2x.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-31T14:52:38.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"结构型模式"}],["meta",{"property":"article:published_time","content":"2022-10-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-31T14:52:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"适配器\\",\\"image\\":[\\"https://refactoringguru.cn/images/patterns/content/adapter/adapter-zh-2x.png\\"],\\"datePublished\\":\\"2022-10-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-31T14:52:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"什么是适配器模式","slug":"什么是适配器模式","link":"#什么是适配器模式","children":[{"level":3,"title":"包含哪些角色","slug":"包含哪些角色","link":"#包含哪些角色","children":[]},{"level":3,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"有哪些优缺点","slug":"有哪些优缺点","link":"#有哪些优缺点","children":[]}]}],"git":{"createdTime":1690708801000,"updatedTime":1690815158000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":2.57,"words":772},"filePathRelative":"design-pattern/structural/adapter.md","localizedDate":"2022年10月18日","excerpt":"<figure><img src=\\"https://refactoringguru.cn/images/patterns/content/adapter/adapter-zh-2x.png\\" alt=\\"adapter\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>adapter</figcaption></figure>\\n","autoDesc":true}');export{v as comp,g as data};