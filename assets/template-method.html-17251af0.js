import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as e,a as n,e as p}from"./app-896898d1.js";const c="/assets/template-method-a2d6830a.png",o={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/template-method/template-method-2x.png",alt:"template-method",tabindex:"0",loading:"lazy"}),n("figcaption",null,"template-method")],-1),l=p('<h2 id="场景问题" tabindex="-1"><a class="header-anchor" href="#场景问题" aria-hidden="true">#</a> 场景问题</h2><p>例如：假设开发一个文档的数据挖局程序，输入各种格式的文档（PDF、DOC、CSV、...），程序从这些文档中提取有意义的数据，进行处理和分析，并返回给用户。随着开发进行，实现三个类分别是：PDFDataMiner、DOCDataMiner、CSVDataMiner，它们都有相似的处理逻辑：打开文件、提取数据、转换数据、分析数据、发送报告。其中：分析数据和发送报告模块完全一致。<br> 那么我们就可以使用模版方法模式将步骤进行抽象，并提供步骤的默认实现，支持重写。</p><h2 id="什么是模版方法模式" tabindex="-1"><a class="header-anchor" href="#什么是模版方法模式" aria-hidden="true">#</a> 什么是模版方法模式</h2><p>模版方法模式（Template Method Pattern），将总结出来的规律沉淀为一种既定格式，并固化于模版中以供子类继承，对未确定下来的步骤方法进行抽象化，使其得以延续、多态化，最终架构起一个平台，使系统实现在不改变预设规则的前提下，对每个分步骤进行个性化定义的目的。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+c+`" alt="template-method" tabindex="0" loading="lazy"><figcaption>template-method</figcaption></figure><ul><li><p>AbstractClass: 抽象类</p><p>负责给出一个算法的轮廓和骨架。它由一个模版方法和若干个基本方法构成</p></li><li><p>ConCreteClass: 具体实现类</p><p>复用抽象类的方法，或者重写相关方法。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><p>由于Go语言没有抽象类这一概念，我们使用接口实现。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> templatemethod

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Templater <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Implement <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">step1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">step2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">step3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Abstract <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Implement
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newAbstract</span><span class="token punctuation">(</span>impl Implement<span class="token punctuation">)</span> <span class="token operator">*</span>Abstract <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Abstract<span class="token punctuation">{</span>Implement<span class="token punctuation">:</span> impl<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Abstract<span class="token punctuation">)</span> <span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	t<span class="token punctuation">.</span>Implement<span class="token punctuation">.</span><span class="token function">step1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	t<span class="token punctuation">.</span>Implement<span class="token punctuation">.</span><span class="token function">step2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	t<span class="token punctuation">.</span>Implement<span class="token punctuation">.</span><span class="token function">step3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Abstract<span class="token punctuation">)</span> <span class="token function">step2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default step2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Concreate1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>Abstract
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewConcreate1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Templater <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> <span class="token operator">&amp;</span>Concreate1<span class="token punctuation">{</span><span class="token punctuation">}</span>
	a <span class="token operator">:=</span> <span class="token function">newAbstract</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>Abstract <span class="token operator">=</span> a
	<span class="token keyword">return</span> c
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>Concreate1<span class="token punctuation">)</span> <span class="token function">step1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concreate1 step1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>Concreate1<span class="token punctuation">)</span> <span class="token function">step2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concreate1 step2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>Concreate1<span class="token punctuation">)</span> <span class="token function">step3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concreate1 step3&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Concreate2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>Abstract
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewConcreate2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Templater <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> <span class="token operator">&amp;</span>Concreate2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	a <span class="token operator">:=</span> <span class="token function">newAbstract</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>Abstract <span class="token operator">=</span> a
	<span class="token keyword">return</span> c
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>Concreate2<span class="token punctuation">)</span> <span class="token function">step1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concreate2 step1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>Concreate2<span class="token punctuation">)</span> <span class="token function">step3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;concreate2 step3&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> t Templater
	t <span class="token operator">=</span> <span class="token function">NewConcreate1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	t<span class="token punctuation">.</span><span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	t <span class="token operator">=</span> <span class="token function">NewConcreate2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	t<span class="token punctuation">.</span><span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// concreate1 step1</span>
	<span class="token comment">// concreate1 step2</span>
	<span class="token comment">// concreate1 step3</span>
	<span class="token comment">// concreate2 step1</span>
	<span class="token comment">// default step2</span>
	<span class="token comment">// concreate2 step3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中concreate2并未实现step2()，而是使用了默认的step2()</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>允许客户端重写一个大型算法中的特定部分，使得算法其他部分修改对其所造成的影响较小。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>部分客户端可能受到算法框架的限制</li><li>通过子类一直默认步骤实现可能会导致违反里氏替换原则</li><li>模版方法中的步骤越多，其维护工作就可能会越困难</li></ul>`,18);function u(r,d){return a(),t("div",null,[i,e(" more "),l])}const m=s(o,[["render",u],["__file","template-method.html.vue"]]);export{m as default};
