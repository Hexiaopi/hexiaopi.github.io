import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,e as n,b as e,o as p}from"./app-hO4--mKO.js";const o={},i=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"由于Go语言不支持重载函数，当我们需要使用不同的方式构建对象时，不得不使用多个构造函数进行初始化。")],-1),c=e(`<h2 id="对于多参数的类的初始化遇到哪些困境" tabindex="-1"><a class="header-anchor" href="#对于多参数的类的初始化遇到哪些困境"><span>对于多参数的类的初始化遇到哪些困境？</span></a></h2><p>例如：HTTP Server的初始化</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> Server <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Addr     <span class="token builtin">string</span>
	Port     <span class="token builtin">int</span>
	Protocol <span class="token builtin">string</span>
	Timeout  time<span class="token punctuation">.</span>Duration
	MaxConns <span class="token builtin">int</span>
	TLS      <span class="token operator">*</span>tls<span class="token punctuation">.</span>Config
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了支持不同功能的Server，我们不得不通过不同的函数命名和参数，构造初始化函数。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// NewTLSServer 带TLS的初始化函数</span>
<span class="token keyword">func</span> <span class="token function">NewTLSServer</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">,</span> port <span class="token builtin">int</span><span class="token punctuation">,</span> tls <span class="token operator">*</span>tls<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Server<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>     addr<span class="token punctuation">,</span>
		Port<span class="token punctuation">:</span>     port<span class="token punctuation">,</span>
		Protocol<span class="token punctuation">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
		Timeout<span class="token punctuation">:</span>  time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">,</span>
		MaxConns<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
		TLS<span class="token punctuation">:</span>      tls<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewServerWithTimeout 带超时时间的初始化函数</span>
<span class="token keyword">func</span> <span class="token function">NewServerWithTimeout</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">,</span> port <span class="token builtin">int</span><span class="token punctuation">,</span> timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Server<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>     addr<span class="token punctuation">,</span>
		Port<span class="token punctuation">:</span>     port<span class="token punctuation">,</span>
		Protocol<span class="token punctuation">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
		Timeout<span class="token punctuation">:</span>  timeout<span class="token punctuation">,</span>
		MaxConns<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
		TLS<span class="token punctuation">:</span>      <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewTLSServerWithMaxConnAndTimeout 支持TLS和最大连接数和超时时间的初始化函数</span>
<span class="token keyword">func</span> <span class="token function">NewTLSServerWithMaxConnAndTimeout</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">,</span> port <span class="token builtin">int</span><span class="token punctuation">,</span> maxconns <span class="token builtin">int</span><span class="token punctuation">,</span> timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">,</span> tls <span class="token operator">*</span>tls<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Server<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>     addr<span class="token punctuation">,</span>
		Port<span class="token punctuation">:</span>     port<span class="token punctuation">,</span>
		Protocol<span class="token punctuation">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
		Timeout<span class="token punctuation">:</span>  timeout<span class="token punctuation">,</span>
		MaxConns<span class="token punctuation">:</span> maxconns<span class="token punctuation">,</span>
		TLS<span class="token punctuation">:</span>      tls<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一圈写下来，发现这仅不禁无法列举所有的功能场景，而且代码冗余非常多。</p><h2 id="那么option-选项模式-是如何解决这个问题的呢" tabindex="-1"><a class="header-anchor" href="#那么option-选项模式-是如何解决这个问题的呢"><span>那么Option(选项模式)是如何解决这个问题的呢？</span></a></h2><h3 id="首先-定义一个option函数-参数为server指针" tabindex="-1"><a class="header-anchor" href="#首先-定义一个option函数-参数为server指针"><span>首先：定义一个Option函数，参数为Server指针</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> Option <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>Server<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果关注错误的话，可以定义如下</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> Option <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>Server<span class="token punctuation">)</span> <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="其次-定义各种初始化选项函数-通常返回上文定义的option" tabindex="-1"><a class="header-anchor" href="#其次-定义各种初始化选项函数-通常返回上文定义的option"><span>其次：定义各种初始化选项函数，通常返回上文定义的Option</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">WithProtocol</span><span class="token punctuation">(</span>protocol <span class="token builtin">string</span><span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token operator">*</span>Server<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		s<span class="token punctuation">.</span>Protocol <span class="token operator">=</span> protocol
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithTimeout</span><span class="token punctuation">(</span>timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token operator">*</span>Server<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		s<span class="token punctuation">.</span>Timeout <span class="token operator">=</span> timeout
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithMaxConns</span><span class="token punctuation">(</span>maxconns <span class="token builtin">int</span><span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token operator">*</span>Server<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		s<span class="token punctuation">.</span>MaxConns <span class="token operator">=</span> maxconns
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WihtTLS</span><span class="token punctuation">(</span>tls <span class="token operator">*</span>tls<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token operator">*</span>Server<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		s<span class="token punctuation">.</span>TLS <span class="token operator">=</span> tls
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通常-我们定义一个全局的初始化函数-使用go语言可变参数option" tabindex="-1"><a class="header-anchor" href="#通常-我们定义一个全局的初始化函数-使用go语言可变参数option"><span>通常：我们定义一个全局的初始化函数，使用Go语言可变参数Option</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewServer</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">,</span> port <span class="token builtin">int</span><span class="token punctuation">,</span> options <span class="token operator">...</span>Option<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Server<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	srv <span class="token operator">:=</span> Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>     addr<span class="token punctuation">,</span>
		Port<span class="token punctuation">:</span>     port<span class="token punctuation">,</span>
		Protocol<span class="token punctuation">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
		Timeout<span class="token punctuation">:</span>  time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">,</span>
		MaxConns<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
		TLS<span class="token punctuation">:</span>      <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> option <span class="token operator">:=</span> <span class="token keyword">range</span> options <span class="token punctuation">{</span>
		<span class="token function">option</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>srv<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//...</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>srv<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最后-我们看看最终效果" tabindex="-1"><a class="header-anchor" href="#最后-我们看看最终效果"><span>最后，我们看看最终效果</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>s1<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token comment">//默认的Server</span>
s2<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">2048</span><span class="token punctuation">,</span> <span class="token function">WithProtocol</span><span class="token punctuation">(</span><span class="token string">&quot;udp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//协议为udp的Server</span>
s3<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">,</span> <span class="token function">WithTimeout</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">WithMaxConns</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//支持超时时间和最大连接的Server</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>由于Go语言函数不支持重载，因此在多参数的类的初始化中，我们遇到初始化函数冗余问题， 我们可以通过Option(选项模式)，可以很自由的定义类的初始化，解决前面遇到的问题。</p><p>这里本质上使用了Go语言以下特点：</p><ul><li>闭包，<code>With...</code>等Option的定义，通过闭包的方式，扩展了Option的场景;</li><li>可变参数，<code>(options ...option)</code>，通过可变参数，我们可以自由选择Option;</li></ul><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><p><a href="https://coolshell.cn/articles/21146.html" target="_blank" rel="noopener noreferrer">GO 编程模式：FUNCTIONAL OPTIONS</a></p>`,23);function l(u,r){return p(),a("div",null,[i,t(" more "),c])}const v=s(o,[["render",l],["__file","option.html.vue"]]),m=JSON.parse('{"path":"/design-pattern/function/option.html","title":"选项模式","lang":"zh-CN","frontmatter":{"title":"选项模式","date":"2023-08-06T00:00:00.000Z","tag":["Go","函数模式"],"category":["设计模式"],"description":"提示 由于Go语言不支持重载函数，当我们需要使用不同的方式构建对象时，不得不使用多个构造函数进行初始化。","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/design-pattern/function/option.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"选项模式"}],["meta",{"property":"og:description","content":"提示 由于Go语言不支持重载函数，当我们需要使用不同的方式构建对象时，不得不使用多个构造函数进行初始化。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-05T15:52:14.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"函数模式"}],["meta",{"property":"article:published_time","content":"2023-08-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-05T15:52:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"选项模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-05T15:52:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"对于多参数的类的初始化遇到哪些困境？","slug":"对于多参数的类的初始化遇到哪些困境","link":"#对于多参数的类的初始化遇到哪些困境","children":[]},{"level":2,"title":"那么Option(选项模式)是如何解决这个问题的呢？","slug":"那么option-选项模式-是如何解决这个问题的呢","link":"#那么option-选项模式-是如何解决这个问题的呢","children":[{"level":3,"title":"首先：定义一个Option函数，参数为Server指针","slug":"首先-定义一个option函数-参数为server指针","link":"#首先-定义一个option函数-参数为server指针","children":[]},{"level":3,"title":"其次：定义各种初始化选项函数，通常返回上文定义的Option","slug":"其次-定义各种初始化选项函数-通常返回上文定义的option","link":"#其次-定义各种初始化选项函数-通常返回上文定义的option","children":[]},{"level":3,"title":"通常：我们定义一个全局的初始化函数，使用Go语言可变参数Option","slug":"通常-我们定义一个全局的初始化函数-使用go语言可变参数option","link":"#通常-我们定义一个全局的初始化函数-使用go语言可变参数option","children":[]},{"level":3,"title":"最后，我们看看最终效果","slug":"最后-我们看看最终效果","link":"#最后-我们看看最终效果","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1690708801000,"updatedTime":1714924334000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":2},{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":2.31,"words":693},"filePathRelative":"design-pattern/function/option.md","localizedDate":"2023年8月6日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>由于Go语言不支持重载函数，当我们需要使用不同的方式构建对象时，不得不使用多个构造函数进行初始化。</p>\\n</div>\\n","autoDesc":true}');export{v as comp,m as data};