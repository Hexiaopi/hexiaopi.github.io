import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,b as e,e as n,a as p}from"./app-ac29efd4.js";const o="/assets/prototype-d07e4341.png",i={},l=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/prototype/prototype-2x.png",alt:"prototype",tabindex:"0",loading:"lazy"}),n("figcaption",null,"prototype")],-1),c=p('<h2 id="什么是原型模式" tabindex="-1"><a class="header-anchor" href="#什么是原型模式" aria-hidden="true">#</a> 什么是原型模式</h2><p>原型模式(Prototype Pattern)用一个已经创建的实例作为原型，通过复制该原型对象来创建一个和原型相同或相似的新对象。它的核心思想是通过复制一个已经存在的对象来创建新的对象，而不是通过调用构造函数或者其他初始化方法。这样可以避免一些复杂的或者耗时的对象创建过程，提高程序的效率和灵活性。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+o+`" alt="prototype" tabindex="0" loading="lazy"><figcaption>prototype</figcaption></figure><ul><li><p>Prototype：抽象原型</p><p>抽象原型规定了clone()接口来复制新的对象</p></li><li><p>ConcretePrototype：具体原型</p><p>具体原型实现抽象原型的clone()方法，是可被复制的对象</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> prototype

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> inode <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">print</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
	<span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> inode
<span class="token punctuation">}</span>

<span class="token keyword">type</span> file <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>file<span class="token punctuation">)</span> <span class="token function">print</span><span class="token punctuation">(</span>indentation <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>indentation <span class="token operator">+</span> f<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>file<span class="token punctuation">)</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> inode <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>file<span class="token punctuation">{</span>name<span class="token punctuation">:</span> f<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;_clone&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> folder <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	children <span class="token punctuation">[</span><span class="token punctuation">]</span>inode
	name     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>folder<span class="token punctuation">)</span> <span class="token function">print</span><span class="token punctuation">(</span>indentation <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>indentation <span class="token operator">+</span> f<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> f<span class="token punctuation">.</span>children <span class="token punctuation">{</span>
		i<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>indentation <span class="token operator">+</span> indentation<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>folder<span class="token punctuation">)</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> inode <span class="token punctuation">{</span>
	cloneFolder <span class="token operator">:=</span> <span class="token operator">&amp;</span>folder<span class="token punctuation">{</span>name<span class="token punctuation">:</span> f<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;_clone&quot;</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> tempChildren <span class="token punctuation">[</span><span class="token punctuation">]</span>inode
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> f<span class="token punctuation">.</span>children <span class="token punctuation">{</span>
		<span class="token builtin">copy</span> <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		tempChildren <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tempChildren<span class="token punctuation">,</span> <span class="token builtin">copy</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	cloneFolder<span class="token punctuation">.</span>children <span class="token operator">=</span> tempChildren
	<span class="token keyword">return</span> cloneFolder
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> prototype

<span class="token keyword">func</span> <span class="token function">ExampleFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>file<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;file1&quot;</span><span class="token punctuation">}</span>
	cloneFile <span class="token operator">:=</span> file1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	cloneFile<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;example_&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// example_file1_clone</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleFolder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>file<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;file1&quot;</span><span class="token punctuation">}</span>
	file2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>file<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;file2&quot;</span><span class="token punctuation">}</span>
	file3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>file<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;file3&quot;</span><span class="token punctuation">}</span>
	folder1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>folder<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span>     <span class="token string">&quot;folder1&quot;</span><span class="token punctuation">,</span>
		children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>inode<span class="token punctuation">{</span>file1<span class="token punctuation">,</span> file2<span class="token punctuation">,</span> file3<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	cloneFolder <span class="token operator">:=</span> folder1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	cloneFolder<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;example_&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// example_folder1_clone</span>
	<span class="token comment">// example_example_file1_clone</span>
	<span class="token comment">// example_example_file2_clone</span>
	<span class="token comment">// example_example_file3_clone</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li>当对象创建过程很复杂或者很耗时时，可以通过复制一个已经存在的对象来简化和加快对象创建过程。</li><li>当需要生成大量相同或者相似的对象时，可以通过复制一个原型对象来减少内存消耗和提高性能。</li><li>当需要根据不同的需求和环境来动态地生成对象时，可以通过选择不同的原型对象来实现多态性和灵活性。</li></ul><p>例如：</p><p>游戏中的子弹，通常数量规模很大，通过原型设计模式可以复制已经创建好的字段对象，这样可以节省内存和性能。</p><h3 id="有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#有哪些优缺点" aria-hidden="true">#</a> 有哪些优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>可以避免重复的对象创建过程，节省时间和资源。</li><li>可以动态地生成对象，根据不同的需求和环境来选择合适的原型。</li><li>可以隐藏对象创建的细节，降低代码的耦合度和依赖性。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>需要实现克隆方法，可能会增加代码的复杂度和维护成本。</li><li>需要注意深拷贝和浅拷贝的区别，避免出现意外的副作用和错误。</li><li>需要保证原型对象的稳定性和安全性，避免被修改或者破坏。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>原型设计模式是一种创建型设计模式，它通过复制一个已经存在的对象来创建新的对象，而不是通过调用构造函数或者其他初始化方法。<br> 在Go语言中，我们还需要注意深拷贝和浅拷贝的区别。深拷贝是指完全复制一个对象及其所有关联的对象，使得新对象和旧对象完全独立。浅拷贝是指只复制一个对象本身，而不复制其关联的对象，使得新对象和旧对象共享部分数据。</p>`,20);function u(r,d){return a(),t("div",null,[l,e(" more "),c])}const m=s(i,[["render",u],["__file","prototype.html.vue"]]);export{m as default};
