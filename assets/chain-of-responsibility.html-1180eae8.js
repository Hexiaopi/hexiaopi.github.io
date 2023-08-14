import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as i,a as n,e as t}from"./app-1350196b.js";const l={},c=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/chain-of-responsibility/chain-of-responsibility-2x.png",alt:"责任链",tabindex:"0",loading:"lazy"}),n("figcaption",null,"责任链")],-1),p=t(`<h2 id="什么是责任链模式" tabindex="-1"><a class="header-anchor" href="#什么是责任链模式" aria-hidden="true">#</a> 什么是责任链模式</h2><p>责任链模式(Chain of Responsibility)：为了避免请求发送者与多个请求处理者耦合在一起，将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。</p><div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>     ┌─────────┐
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><ul><li><p>Handler: 抽象处理者</p><p>包含一个处理请求的接口和一个设置后续处理者</p></li><li><p>Concrete Handler: 具体处理者</p><p>实现抽象处理者接口</p></li><li><p>Client: 客户端</p><p>创建处理链，并让链头开始执行处理</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chainofresponsibility

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> chainofresponsibility

<span class="token keyword">func</span> <span class="token function">ExampleHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	h1 <span class="token operator">:=</span> ConcreteHandler1<span class="token punctuation">{</span><span class="token punctuation">}</span>
	h2 <span class="token operator">:=</span> ConcreteHandler2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	h1<span class="token punctuation">.</span><span class="token function">SetNext</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>h2<span class="token punctuation">)</span>
	h1<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// concrete handler1</span>
	<span class="token comment">// concrete handler2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><ul><li>审批流程：经理、主管、Boss</li><li>医院流程：挂号处、医生、收银处、药房</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>可以控制请求处理的顺序；</li><li>单一职责原则，具体的处理者只关心自己的业务；</li><li>开闭原则，可以不更改现有代码的情况下新增处理者；</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>各个处理者须有共同的处理函数</li></ul>`,16);function o(u,d){return a(),e("div",null,[c,i(" more "),p])}const k=s(l,[["render",o],["__file","chain-of-responsibility.html.vue"]]);export{k as default};
