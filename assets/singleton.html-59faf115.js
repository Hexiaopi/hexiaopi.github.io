import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as p,f as i,a as n,e as a,b as s}from"./app-fc6f1344.js";const c="/assets/singleton-d13150f4.png",o={},l=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/singleton/singleton-2x.png",alt:"singleton",tabindex:"0",loading:"lazy"}),n("figcaption",null,"singleton")],-1),u=a('<p>单例模式(Singleton Pattern)指一个类只允许创建一个对象或者实例，那这个类就是一个单例类，这种设计模式就叫做单例设计模式。</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>开发过程中常常遇见需要一个对象实例，统一处理相关事宜，多个实例可能会导致不一致问题。例如：日志客户端，多个日志客户端可能会导致文件日志内容被覆盖、被插入问题。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色" aria-hidden="true">#</a> 角色</h3><figure><img src="'+c+'" alt="singleton" tabindex="0" loading="lazy"><figcaption>singleton</figcaption></figure><ul><li><p>Singleton：单例类</p><p>单例类提供getInstance方法获取实例</p></li></ul><h3 id="类别" tabindex="-1"><a class="header-anchor" href="#类别" aria-hidden="true">#</a> 类别</h3><p>单例模式从实现上分为两种：饿汉模式和懒汉模式</p><h4 id="饿汉模式" tabindex="-1"><a class="header-anchor" href="#饿汉模式" aria-hidden="true">#</a> 饿汉模式</h4><p>类加载时，instance静态实例就已经创建并初始化好了<br> 好处在于：对于耗时较高的初始化操作，提前到程序启动的时候完成，这样就能避免在程序运行的时候，再去初始化导致的性能问题。如果初始化有问题，基于fail-fast的设计原则（有问题及早暴露），而不是等待使用的时候才反馈问题会更好。</p><h4 id="懒汉模式" tabindex="-1"><a class="header-anchor" href="#懒汉模式" aria-hidden="true">#</a> 懒汉模式</h4><p>程序需要某个变量的时候才会去初始化<br> 缺点在于：需要增加一把锁，导致并发度低。频繁的使用，也会频繁的加锁、释放锁，可能导致性能瓶颈。通常我们会采用双重检测，一旦instance创建之后就不再加锁。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ul><li>单例类只有一个实例对象；</li><li>该单例对象必须由单例类自行创建；</li><li>单例类对外提供一个访问该单例的全局访问点；</li></ul><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h2><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li>配置文件实例--通常我们在应用运行期间，只使用一个配置文件实例；</li><li>DB实例--我们只想创建DB对象的一个实例，并且该实例将在整个应用程序中使用；</li><li>日志实例--同样，只应创建一个日志实例，并应在整个应用程序中使用它；</li></ul><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>可以减少内存开销，提高程序的运行效率，避免对资源的过多占用，方便定位问题</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>不能被继承，很难进行类的扩展，违背了<code>单一职责</code>原则，忽略了外部关系，不适用于变化对象，可能存在线程安全问题</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>Go语言创建单例的办法</p><ul><li>Sync.Mutex方式，在GetInstance方法中加锁（懒汉方式）</li><li>init()函数方式，引入singleton包时进行初始化（饿汉方式）</li><li>sync.Once方式，在GetInstance方法中调用once.Do方法</li></ul><h3 id="sync-mutex-方式" tabindex="-1"><a class="header-anchor" href="#sync-mutex-方式" aria-hidden="true">#</a> Sync.Mutex 方式</h3>',27),r=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{go:"",class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` singleton

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"sync"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(" lock "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("sync"),n("span",{class:"token punctuation"},"."),s("RWMutex"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" single1 "),n("span",{class:"token keyword"},"struct"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"var"),s(" singleInstance1 "),n("span",{class:"token operator"},"*"),s(`single1

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"GetInstance1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("single1 "),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" singleInstance1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		lock`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"defer"),s(" lock"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" singleInstance1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Creating Single Instance Now"'),n("span",{class:"token punctuation"},")"),s(`
			singleInstance1 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("single1"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Single Instance already created-1"'),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Single Instance already created-2"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` singleInstance1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d=a(`<p>其中：</p><ul><li>18行再次判断的原因是：如果多个goroutine通过第一次检查（15行），其中一个goroutine获得锁并初始化了instance示例，那么剩余的goroutine就不必在获得锁之后再去初始化实例了。</li></ul><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> singleton

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestGetInstance1</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token function">GetInstance1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过atomic保证原子性也是可行的方案</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> singleton

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;sync/atomic&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> single4 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> rwlock <span class="token operator">=</span> <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> singleInstance4 <span class="token operator">*</span>single4
<span class="token keyword">var</span> flag <span class="token builtin">uint32</span>

<span class="token keyword">func</span> <span class="token function">GetInstance4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>single4 <span class="token punctuation">{</span>
	<span class="token keyword">if</span> atomic<span class="token punctuation">.</span><span class="token function">LoadUint32</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>flag<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		rwlock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">defer</span> rwlock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> atomic<span class="token punctuation">.</span><span class="token function">LoadUint32</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>flag<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Creating Single Instance Now&quot;</span><span class="token punctuation">)</span>
			singleInstance4 <span class="token operator">=</span> <span class="token operator">&amp;</span>single4<span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token keyword">defer</span> atomic<span class="token punctuation">.</span><span class="token function">StoreUint32</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>flag<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Single Instance already created-1&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Single Instance already created-2&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> singleInstance4
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="init-函数方式" tabindex="-1"><a class="header-anchor" href="#init-函数方式" aria-hidden="true">#</a> init() 函数方式</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> singleton

<span class="token keyword">type</span> single2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> singleInstance2 <span class="token operator">*</span>single2

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	singleInstance2 <span class="token operator">=</span> <span class="token operator">&amp;</span>single2<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetInstance2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>single2 <span class="token punctuation">{</span>
	<span class="token keyword">return</span> singleInstance2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> singleton

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestGetInstance2</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			instance2 <span class="token operator">:=</span> <span class="token function">GetInstance2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get single instance address %p and is nil? %t\\n&quot;</span><span class="token punctuation">,</span> instance2<span class="token punctuation">,</span> instance2 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sync-once-方式" tabindex="-1"><a class="header-anchor" href="#sync-once-方式" aria-hidden="true">#</a> sync.Once 方式</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> singleton

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> once sync<span class="token punctuation">.</span>Once

<span class="token keyword">type</span> single3 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> singleInstance3 <span class="token operator">*</span>single3

<span class="token keyword">func</span> <span class="token function">GetInstance3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>single3 <span class="token punctuation">{</span>
	<span class="token keyword">if</span> singleInstance3 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>
			<span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Creating Single Instance Now&quot;</span><span class="token punctuation">)</span>
				singleInstance3 <span class="token operator">=</span> <span class="token operator">&amp;</span>single3<span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Single Instance already created-2&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> singleInstance3
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> singleton

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestGetInstance3</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token function">GetInstance3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function k(v,m){return e(),p("div",null,[l,i(" more "),u,r,d])}const h=t(o,[["render",k],["__file","singleton.html.vue"]]);export{h as default};
