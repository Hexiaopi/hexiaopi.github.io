import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as e,a as n,e as p}from"./app-582e91a2.js";const o="/assets/memento-75b53412.png",i={},c=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/memento/memento-zh-2x.png",alt:"memento",tabindex:"0",loading:"lazy"}),n("figcaption",null,"memento")],-1),u=p('<h2 id="什么是备忘录模式" tabindex="-1"><a class="header-anchor" href="#什么是备忘录模式" aria-hidden="true">#</a> 什么是备忘录模式</h2><p>备忘录模式(Memento Pattern)允许在不暴露对象实现细节的情况下保存和恢复对象之前的状态。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+o+`" alt="memento" tabindex="0" loading="lazy"><figcaption>memento</figcaption></figure><ul><li><p>Originator: 原发器</p><p>用于生成自身状态的快照，在需要时可以通过快照恢复自身状态</p></li><li><p>Memento: 备忘录</p><p>原发器状态快照，通常将备忘录设置为不可变的类，并且通过构造函数一次性传递数据</p></li><li><p>Caretaker: 负责人</p><p>存储备忘录的历史记录</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> memento

<span class="token keyword">type</span> Originator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	state <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewOriginator</span><span class="token punctuation">(</span>value <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Originator <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Originator<span class="token punctuation">{</span>state<span class="token punctuation">:</span> value<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>o <span class="token operator">*</span>Originator<span class="token punctuation">)</span> <span class="token function">ChangeState</span><span class="token punctuation">(</span>value <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	o<span class="token punctuation">.</span>state <span class="token operator">=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>o <span class="token operator">*</span>Originator<span class="token punctuation">)</span> <span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Memento <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">NewMemento</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>o <span class="token operator">*</span>Originator<span class="token punctuation">)</span> <span class="token function">Restore</span><span class="token punctuation">(</span>memento Memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	o<span class="token punctuation">.</span>state <span class="token operator">=</span> memento<span class="token punctuation">.</span><span class="token function">GetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Memento <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	state <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewMemento</span><span class="token punctuation">(</span>state <span class="token builtin">string</span><span class="token punctuation">)</span> Memento <span class="token punctuation">{</span>
	<span class="token keyword">return</span> Memento<span class="token punctuation">{</span>state<span class="token punctuation">:</span> state<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m Memento<span class="token punctuation">)</span> <span class="token function">GetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> m<span class="token punctuation">.</span>state
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Caretaker <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	history <span class="token punctuation">[</span><span class="token punctuation">]</span>Memento
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Caretaker<span class="token punctuation">)</span> <span class="token function">AddMemento</span><span class="token punctuation">(</span>memento Memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>history<span class="token punctuation">,</span> memento<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Caretaker<span class="token punctuation">)</span> <span class="token function">GetMemento</span><span class="token punctuation">(</span>index <span class="token builtin">int</span><span class="token punctuation">)</span> Memento <span class="token punctuation">{</span>
	<span class="token keyword">return</span> c<span class="token punctuation">.</span>history<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> memento

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">ExampleMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	caretaker <span class="token operator">:=</span> Caretaker<span class="token punctuation">{</span>history<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Memento<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
	originator <span class="token operator">:=</span> <span class="token function">NewOriginator</span><span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span>
	caretaker<span class="token punctuation">.</span><span class="token function">AddMemento</span><span class="token punctuation">(</span>originator<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>originator<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
	originator<span class="token punctuation">.</span><span class="token function">ChangeState</span><span class="token punctuation">(</span><span class="token string">&quot;two&quot;</span><span class="token punctuation">)</span>
	caretaker<span class="token punctuation">.</span><span class="token function">AddMemento</span><span class="token punctuation">(</span>originator<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>originator<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
	originator<span class="token punctuation">.</span><span class="token function">ChangeState</span><span class="token punctuation">(</span><span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span>
	caretaker<span class="token punctuation">.</span><span class="token function">AddMemento</span><span class="token punctuation">(</span>originator<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>originator<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
	originator<span class="token punctuation">.</span><span class="token function">Restore</span><span class="token punctuation">(</span>caretaker<span class="token punctuation">.</span><span class="token function">GetMemento</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>originator<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// one</span>
	<span class="token comment">// two</span>
	<span class="token comment">// three</span>
	<span class="token comment">// two</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>可以在不破坏对象封装性的前提下捕获并存储对象的状态；</li><li>简化了对象在不同状态之间的切换过程，避免了大量的 if-else 语句；</li><li>原发器和负责人之间的解耦，原发器只需要知道如何创建备忘录和恢复备忘录即可，而负责人则负责保存备忘录。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>使用备忘录会占用一定的内存空间；</li><li>当原发器的状态改变很频繁时，备忘录对象的数量会很大，会占用较大的内存空间；</li><li>如果原发器需要保存的状态很多，那么备忘录对象的创建和恢复操作就会变得很慢。</li></ul>`,14);function l(r,k){return a(),t("div",null,[c,e(" more "),u])}const v=s(i,[["render",l],["__file","memento.html.vue"]]);export{v as default};
