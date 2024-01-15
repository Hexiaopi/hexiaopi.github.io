import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as p,a as n,e}from"./app-95ff9c18.js";const o="/assets/state-0b94d43e.png",c={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/state/state-zh-2x.png",alt:"state",tabindex:"0",loading:"lazy"}),n("figcaption",null,"state")],-1),u=e('<h2 id="什么是状态模式" tabindex="-1"><a class="header-anchor" href="#什么是状态模式" aria-hidden="true">#</a> 什么是状态模式</h2><p>状态模式(State Pattern) 允许对象在其内部状态发生变化时改变其行为。通过将状态转换代码从主逻辑中抽离并封装在状态对象中，使得对象能够在行为上进行更灵活的变化。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+o+`" alt="state" tabindex="0" loading="lazy"><figcaption>state</figcaption></figure><ul><li><p>Context: 上下文</p><p>它是包含状态的主对象。它还包含一些用于在状态之间切换的方法。</p></li><li><p>State: 状态</p><p>它定义一个接口，用于封装与上下文的特定状态相关的行为。</p></li><li><p>ConcreteStates: 具体状态类</p><p>实现State接口，每个具体状态都提供各自的实现方式。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> state

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Context <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	state State
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token function">ChangeState</span><span class="token punctuation">(</span>state State<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>state <span class="token operator">=</span> state
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> State <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Start</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span>
	<span class="token function">Stop</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span>
	<span class="token function">Run</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> StartState <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>StartState<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;already start&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>StartState<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;change start state to stop&quot;</span><span class="token punctuation">)</span>
	ctx<span class="token punctuation">.</span><span class="token function">ChangeState</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>StopState<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>StartState<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;change start state to run&quot;</span><span class="token punctuation">)</span>
	ctx<span class="token punctuation">.</span><span class="token function">ChangeState</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>RunState<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> StopState <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>StopState<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;change stop state to start&quot;</span><span class="token punctuation">)</span>
	ctx<span class="token punctuation">.</span><span class="token function">ChangeState</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>StartState<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>StopState<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;already stop&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>StopState<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;can&#39;t change stop state to run&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> RunState <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>RunState<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;can&#39;t change run state to start&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>RunState<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;change run state to stop&quot;</span><span class="token punctuation">)</span>
	ctx<span class="token punctuation">.</span><span class="token function">ChangeState</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>StopState<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>RunState<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;already run&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> state

<span class="token keyword">func</span> <span class="token function">ExampleState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	start <span class="token operator">:=</span> <span class="token operator">&amp;</span>StartState<span class="token punctuation">{</span><span class="token punctuation">}</span>
	context <span class="token operator">:=</span> Context<span class="token punctuation">{</span>state<span class="token punctuation">:</span> start<span class="token punctuation">}</span>
	context<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	context<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	context<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	context<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// already start</span>
	<span class="token comment">// change start state to run</span>
	<span class="token comment">// change run state to stop</span>
	<span class="token comment">// can&#39;t change stop state to run</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>将状态抽象成对象，使得状态之间的转换更加清晰明了。通过将每种状态封装成具体的类，可以使代码更加简单易懂，避免了状态转换时大量的条件判断。</li><li>状态之间的转换变得容易扩展。由于状态之间的转换是由状态对象自身完成的，因此只需要增加、修改或删除对应的状态类即可扩展或修改状态转换，而不影响其他部分。</li><li>提高代码的复用性和灵活性。由于每个状态都是一个独立的对象，因此可以在不同的上下文中重复使用。这样，就可以实现更多的组合方式，从而提高代码的复用性和灵活性。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li><p>对于简单的状态机，引入状态模式会增加额外的复杂度。如果状态机只有几个状态，那么引入状态模式可能会让代码更加复杂，难以维护。</p></li><li><p>增加了系统的类和对象数量。引入状态模式会增加额外的类和对象，在一定程度上增加了系统的复杂度和开销。</p></li></ul>`,14);function l(k,r){return a(),t("div",null,[i,p(" more "),u])}const m=s(c,[["render",l],["__file","state.html.vue"]]);export{m as default};
