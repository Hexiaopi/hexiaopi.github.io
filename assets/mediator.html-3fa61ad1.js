import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as t,a as n,e as p}from"./app-3c1a2ea7.js";const o="/assets/mediator-571b38b6.png",c={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/mediator/mediator-2x.png",alt:"mediator",tabindex:"0",loading:"lazy"}),n("figcaption",null,"mediator")],-1),l=p('<h2 id="什么是中介者模式" tabindex="-1"><a class="header-anchor" href="#什么是中介者模式" aria-hidden="true">#</a> 什么是中介者模式</h2><p>中介者模式(Mediator Pattern)又叫调停者模式，通过在中间引入中介对象来协调各个对象之间交互，使得对象之间不直接交互，而是通过中介者进行通信和协调，从而使得各个对象能够更加灵活地进行组合和拆分，增强系统的可维护性和扩展性。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+o+`" alt="mediator" tabindex="0" loading="lazy"><figcaption>mediator</figcaption></figure><ul><li><p>Mediator：中介者</p><p>定义了中介者的接口，即通过该接口与其他组件交互</p></li><li><p>ConcreteMediator：具体中介者</p><p>实现了中介者的接口，维护其他组件之间的交互关系。</p></li><li><p>Colleague：同事</p><p>定义组件的接口，即通过该接口与中介者交互。</p></li><li><p>ConcreteColleague：具体同事</p><p>实现了组件的接口，维护自己与其他组件之间的交互关系。注意，同事之间不会直接交互，而是通过中介者来完成交互。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> mediator

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Mediator <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Coordinate</span><span class="token punctuation">(</span>colleague Colleague<span class="token punctuation">,</span> message <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Colleague <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">SendMessage</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span>
	<span class="token function">ReceiveMessage</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteColleague1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	mediator Mediator
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreteColleague1<span class="token punctuation">)</span> <span class="token function">SendMessage</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreateColleague1 send message:&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>mediator<span class="token punctuation">.</span><span class="token function">Coordinate</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreteColleague1<span class="token punctuation">)</span> <span class="token function">ReceiveMessage</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreateColleague1 receive message:&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteColleague2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	mediator Mediator
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreteColleague2<span class="token punctuation">)</span> <span class="token function">SendMessage</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreateColleague2 send message:&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>mediator<span class="token punctuation">.</span><span class="token function">Coordinate</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ConcreteColleague2<span class="token punctuation">)</span> <span class="token function">ReceiveMessage</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreateColleague2 receive message:&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteMediator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ConcreteColleague1
	ConcreteColleague2
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteMediator<span class="token punctuation">)</span> <span class="token function">Coordinate</span><span class="token punctuation">(</span>colleague Colleague<span class="token punctuation">,</span> message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> colleague<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">*</span>ConcreteColleague1<span class="token punctuation">:</span>
		c<span class="token punctuation">.</span>ConcreteColleague2<span class="token punctuation">.</span><span class="token function">ReceiveMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token operator">*</span>ConcreteColleague2<span class="token punctuation">:</span>
		c<span class="token punctuation">.</span>ConcreteColleague1<span class="token punctuation">.</span><span class="token function">ReceiveMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> mediator

<span class="token keyword">func</span> <span class="token function">ExampleMediator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	mediator <span class="token operator">:=</span> ConcreteMediator<span class="token punctuation">{</span><span class="token punctuation">}</span>
	colleague1 <span class="token operator">:=</span> ConcreteColleague1<span class="token punctuation">{</span>mediator<span class="token punctuation">:</span> mediator<span class="token punctuation">}</span>
	colleague2 <span class="token operator">:=</span> ConcreteColleague2<span class="token punctuation">{</span>mediator<span class="token punctuation">:</span> mediator<span class="token punctuation">}</span>
	mediator<span class="token punctuation">.</span>ConcreteColleague1 <span class="token operator">=</span> colleague1
	mediator<span class="token punctuation">.</span>ConcreteColleague2 <span class="token operator">=</span> colleague2

	colleague1<span class="token punctuation">.</span><span class="token function">SendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
	colleague2<span class="token punctuation">.</span><span class="token function">SendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// ConcreateColleague1 send message: hello</span>
	<span class="token comment">// ConcreateColleague2 receive message: hello</span>
	<span class="token comment">// ConcreateColleague2 send message: hi</span>
	<span class="token comment">// ConcreateColleague1 receive message: hi</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li><p>降低系统复杂度：通过中介者对象，可以将系统中多个对象之间的直接交互关系转化为对中介者对象的请求调用，从而简化了系统的复杂度；</p></li><li><p>减低系统维护成本：通过减少对象之间的直接耦合度，提高了系统的灵活性和可维护性，降低了系统维护的成本；</p></li><li><p>提高系统扩展性：由于中介者对象独立负责对象之间的通信协调，因此增加、删除或修改一个对象都不会影响其他对象的交互关系，从而提高了系统的可扩展性。</p></li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li><p>中介者对象会引入系统的复杂度：虽然中介者对象可以简化系统的复杂度，但如果中介者对象本身过于复杂，可能会引入新的复杂度；</p></li><li><p>中介者对象可能成为系统的<strong>瓶颈</strong>：由于所有的交互都要经过中介者对象，当系统中对象数量较多或交互复杂时，中介者对象可能成为系统的瓶颈。</p></li></ul>`,14);function u(r,d){return a(),e("div",null,[i,t(" more "),l])}const m=s(c,[["render",u],["__file","mediator.html.vue"]]);export{m as default};
