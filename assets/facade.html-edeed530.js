import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as e,a as n,e as p}from"./app-5ea49981.js";const i="/assets/facade-db36d8ac.png",c="/assets/facade-mvc-775f3acf.png",o={},u=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/facade/facade-2x.png",alt:"facade",tabindex:"0",loading:"lazy"}),n("figcaption",null,"facade")],-1),l=p('<h2 id="什么是外观模式" tabindex="-1"><a class="header-anchor" href="#什么是外观模式" aria-hidden="true">#</a> 什么是外观模式</h2><p>外观模式（Facade Pattern）：又叫作门面模式，是一种通过为多个复杂的子系统提供一个一致的接口，而使这些子系统更加容易被访问的模式。该模式对外有一个统一接口，外部应用程序不用关心内部子系统的具体细节，这样会大大降低应用程序的复杂度，提高了程序的可维护性。</p><figure><img src="'+i+'" alt="外观" tabindex="0" loading="lazy"><figcaption>外观</figcaption></figure><p>外观模式经常在我们不知不觉中使用，例如：MVC架构中，Controller层对外提供简单的接口，Controller层包含多个Service层进行功能划分，每个Service层也可能包含多个Dao层进行数据操作。</p><figure><img src="'+c+`" alt="mvc" tabindex="0" loading="lazy"><figcaption>mvc</figcaption></figure><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><ul><li><p>Facade: 外观角色</p><p>定义一个简单的接口</p></li><li><p>Subsystem：子系统角色</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> facade

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Facade <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	system1 Subsystem1
	system2 Subsystem2
	system3 Subsystem3
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f Facade<span class="token punctuation">)</span> <span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	f<span class="token punctuation">.</span>system1<span class="token punctuation">.</span><span class="token function">Operation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	f<span class="token punctuation">.</span>system2<span class="token punctuation">.</span><span class="token function">Operation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	f<span class="token punctuation">.</span>system3<span class="token punctuation">.</span><span class="token function">Operation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Subsystem1 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Subsystem1<span class="token punctuation">)</span> <span class="token function">Operation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;subsystem1 operation&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Subsystem2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Subsystem2<span class="token punctuation">)</span> <span class="token function">Operation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;subsystem2 operation&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Subsystem3 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Subsystem3<span class="token punctuation">)</span> <span class="token function">Operation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;subsystem3 operation&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> facade

<span class="token keyword">func</span> <span class="token function">ExampleOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	f <span class="token operator">:=</span> Facade<span class="token punctuation">{</span>
		system1<span class="token punctuation">:</span> Subsystem1<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		system2<span class="token punctuation">:</span> Subsystem2<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		system3<span class="token punctuation">:</span> Subsystem3<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	f<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// subsystem1 operation</span>
	<span class="token comment">// subsystem2 operation</span>
	<span class="token comment">// subsystem3 operation</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>降低了子系统与客户端之间的耦合度，使得子系统的变化不会影响调用它的客户类。</li><li>对客户屏蔽了子系统组件，减少了客户处理的对象数目，并使得子系统使用起来更加容易。</li><li>降低了大型软件系统中的编译依赖性，简化了系统在不同平台之间的移植过程，因为编译一个子系统不会影响其他的子系统，也不会影响外观对象。</li><li>只是提供了一个访问子系统的统一入口，并不影响用户直接使用子系统类。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>不能很好地限制客户使用子系统类，如果对客户访问子系统类做太多的限制则减少了可变性和灵活性。</li><li>在不引入抽象外观类的情况下，增加新的子系统可能需要修改外观类或客户端的源代码，违背了<strong>开闭原则</strong>。</li></ul>`,16);function d(r,k){return a(),t("div",null,[u,e(" more "),l])}const b=s(o,[["render",d],["__file","facade.html.vue"]]);export{b as default};
