import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,e as n,b as t,o as i}from"./app-BdlxyEd4.js";const l={},p=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/chain-of-responsibility/chain-of-responsibility-2x.png",alt:"责任链",tabindex:"0",loading:"lazy"}),n("figcaption",null,"责任链")],-1),c=t(`<h2 id="什么是责任链模式" tabindex="-1"><a class="header-anchor" href="#什么是责任链模式"><span>什么是责任链模式</span></a></h2><p>责任链模式(Chain of Responsibility)：为了避免请求发送者与多个请求处理者耦合在一起，将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。</p><div class="language-ascii line-numbers-mode" data-ext="ascii" data-title="ascii"><pre class="language-ascii"><code>     ┌─────────┐
     │ Request │
     └─────────┘
          │
┌ ─ ─ ─ ─ ┼ ─ ─ ─ ─ ┐
          ▼
│  ┌─────────────┐  │
   │ ProcessorA  │
│  └─────────────┘  │
          │
│         ▼         │
   ┌─────────────┐
│  │ ProcessorB  │  │
   └─────────────┘
│         │         │
          ▼
│  ┌─────────────┐  │
   │ ProcessorC  │
│  └─────────────┘  │
          │
└ ─ ─ ─ ─ ┼ ─ ─ ─ ─ ┘
          │
          ▼
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色"><span>包含哪些角色</span></a></h3><ul><li><p>Handler: 抽象处理者</p><p>包含一个处理请求的接口和一个设置后续处理者</p></li><li><p>Concrete Handler: 具体处理者</p><p>实现抽象处理者接口</p></li><li><p>Client: 客户端</p><p>创建处理链，并让链头开始执行处理</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> chainofresponsibility

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Handler <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">SetNext</span><span class="token punctuation">(</span>Handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteHandler1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	next Handler
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>ConcreteHandler1<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concrete handler1&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> h<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		h<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>ConcreteHandler1<span class="token punctuation">)</span> <span class="token function">SetNext</span><span class="token punctuation">(</span>handler Handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	h<span class="token punctuation">.</span>next <span class="token operator">=</span> handler
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteHandler2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	next Handler
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>ConcreteHandler2<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concrete handler2&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> h<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		h<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>ConcreteHandler2<span class="token punctuation">)</span> <span class="token function">SetNext</span><span class="token punctuation">(</span>handler Handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	h<span class="token punctuation">.</span>next <span class="token operator">=</span> handler
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> chainofresponsibility

<span class="token keyword">func</span> <span class="token function">ExampleHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	h1 <span class="token operator">:=</span> ConcreteHandler1<span class="token punctuation">{</span><span class="token punctuation">}</span>
	h2 <span class="token operator">:=</span> ConcreteHandler2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	h1<span class="token punctuation">.</span><span class="token function">SetNext</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>h2<span class="token punctuation">)</span>
	h1<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// concrete handler1</span>
	<span class="token comment">// concrete handler2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3><ul><li>审批流程：经理、主管、Boss</li><li>医院流程：挂号处、医生、收银处、药房</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>可以控制请求处理的顺序；</li><li>单一职责原则，具体的处理者只关心自己的业务；</li><li>开闭原则，可以不更改现有代码的情况下新增处理者；</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>各个处理者须有共同的处理函数</li></ul>`,16);function o(r,u){return i(),a("div",null,[p,e(" more "),c])}const m=s(l,[["render",o],["__file","chain-of-responsibility.html.vue"]]),k=JSON.parse('{"path":"/design-pattern/behavioral/chain-of-responsibility.html","title":"责任链","lang":"zh-CN","frontmatter":{"title":"责任链","date":"2022-12-13T00:00:00.000Z","tag":["Go","行为型模式"],"category":["设计模式"],"description":"责任链责任链","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/design-pattern/behavioral/chain-of-responsibility.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"责任链"}],["meta",{"property":"og:description","content":"责任链责任链"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://refactoringguru.cn/images/patterns/content/chain-of-responsibility/chain-of-responsibility-2x.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-31T14:52:38.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"行为型模式"}],["meta",{"property":"article:published_time","content":"2022-12-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-31T14:52:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"责任链\\",\\"image\\":[\\"https://refactoringguru.cn/images/patterns/content/chain-of-responsibility/chain-of-responsibility-2x.png\\"],\\"datePublished\\":\\"2022-12-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-31T14:52:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"什么是责任链模式","slug":"什么是责任链模式","link":"#什么是责任链模式","children":[{"level":3,"title":"包含哪些角色","slug":"包含哪些角色","link":"#包含哪些角色","children":[]},{"level":3,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]}],"git":{"createdTime":1690708801000,"updatedTime":1690815158000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"design-pattern/behavioral/chain-of-responsibility.md","localizedDate":"2022年12月13日","excerpt":"<figure><img src=\\"https://refactoringguru.cn/images/patterns/content/chain-of-responsibility/chain-of-responsibility-2x.png\\" alt=\\"责任链\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>责任链</figcaption></figure>\\n","autoDesc":true}');export{m as comp,k as data};
