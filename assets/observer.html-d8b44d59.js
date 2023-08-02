import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,b as e,e as n,a as p}from"./app-0fde354c.js";const o="/assets/observer-28909185.png",c={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/observer/observer-2x.png",alt:"observer",tabindex:"0",loading:"lazy"}),n("figcaption",null,"observer")],-1),l=p('<h2 id="什么是观察者模式" tabindex="-1"><a class="header-anchor" href="#什么是观察者模式" aria-hidden="true">#</a> 什么是观察者模式</h2><p>观察者模式(Observer Pattern)定义了对象之间的一对多依赖关系，当一个对象的状态发生变化时，所有依赖关系都会自动得到通知和更新。类似订阅机制，对象变化时通知多个<strong>观察</strong>该对象的其他对象。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+o+`" alt="observer" tabindex="0" loading="lazy"><figcaption>observer</figcaption></figure><ul><li><p>Observer: 观察者</p><p>声明了通知接口，在绝大数情况下，该接口仅包含一个<code>update</code>方法，该方法可以有多个参数</p></li><li><p>Subject: 主题</p><p>提供一个用于存储观察者对象的聚集类，该类通常包含<code>注册</code>和<code>取消注册</code>观察者的方法，以及通知所有观察者变化的方法。</p></li><li><p>ConcreteObserver: 具体的观察者</p><p>实现观察者接口定义的方法，根据自己的需要，实现对象变化时具体的行为。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> observer

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Context <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Id <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Observer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Update</span><span class="token punctuation">(</span>ctx Context<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteObserver1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteObserver1<span class="token punctuation">)</span> <span class="token function">Update</span><span class="token punctuation">(</span>ctx Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concrete observer 1 update ctx:&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteObserver2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c ConcreteObserver2<span class="token punctuation">)</span> <span class="token function">Update</span><span class="token punctuation">(</span>ctx Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concrete observer 2 update ctx:&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Subject <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ObserverCollection <span class="token punctuation">[</span><span class="token punctuation">]</span>Observer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Subject<span class="token punctuation">)</span> <span class="token function">Register</span><span class="token punctuation">(</span>observer Observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s<span class="token punctuation">.</span>ObserverCollection <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>ObserverCollection<span class="token punctuation">,</span> observer<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Subject<span class="token punctuation">)</span> <span class="token function">UnRegister</span><span class="token punctuation">(</span>observer Observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>ObserverCollection<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> s<span class="token punctuation">.</span>ObserverCollection<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> observer <span class="token punctuation">{</span>
			s<span class="token punctuation">.</span>ObserverCollection <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>ObserverCollection<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>ObserverCollection<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Subject<span class="token punctuation">)</span> <span class="token function">NotifyObservers</span><span class="token punctuation">(</span>ctx Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>ObserverCollection<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		s<span class="token punctuation">.</span>ObserverCollection<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> observer

<span class="token keyword">func</span> <span class="token function">ExampleObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ctx <span class="token operator">:=</span> Context<span class="token punctuation">{</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">}</span>
	co1 <span class="token operator">:=</span> ConcreteObserver1<span class="token punctuation">{</span><span class="token punctuation">}</span>
	co2 <span class="token operator">:=</span> ConcreteObserver2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	subject <span class="token operator">:=</span> Subject<span class="token punctuation">{</span>
		ObserverCollection<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Observer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	subject<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>co1<span class="token punctuation">)</span>
	subject<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>co2<span class="token punctuation">)</span>
	subject<span class="token punctuation">.</span><span class="token function">NotifyObservers</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	ctx<span class="token punctuation">.</span>Id <span class="token operator">=</span> <span class="token string">&quot;other&quot;</span>
	subject<span class="token punctuation">.</span><span class="token function">UnRegister</span><span class="token punctuation">(</span>co1<span class="token punctuation">)</span>
	subject<span class="token punctuation">.</span><span class="token function">NotifyObservers</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// concrete observer 1 update ctx: {test}</span>
	<span class="token comment">// concrete observer 2 update ctx: {test}</span>
	<span class="token comment">// concrete observer 2 update ctx: {other}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>松耦合：观察者模式使主题和观察者之间的依赖关系变得松散，让它们可以独立演化，这样就可以在不影响主题的情况下修改或扩展观察者。</li><li>可重用性：由于主题和观察者之间的关系被封装在抽象接口中，因此可以方便地添加新的观察者或主题，从而提高代码的可重用性和可维护性。</li><li>通知机制：一旦主题状态发生变化，观察者会自动被通知，并且可以及时更新自己的状态，从而保证了数据的一致性。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>性能问题：如果观察者过多，通知所有观察者会浪费很多资源，可能会导致系统运行缓慢。</li><li>难以理解：当涉及多个对象之间的交互时，观察者模式可能比较难以理解和调试</li></ul>`,14);function u(r,d){return a(),t("div",null,[i,e(" more "),l])}const b=s(c,[["render",u],["__file","observer.html.vue"]]);export{b as default};
