import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as e,a as n,e as p}from"./app-c0e959d1.js";const c="/assets/proxy-2e1a34f9.png",o={},i=n("figure",null,[n("img",{src:"https://refactoringguru.cn/images/patterns/content/proxy/proxy-2x.png",alt:"proxy",tabindex:"0",loading:"lazy"}),n("figcaption",null,"proxy")],-1),l=p('<h2 id="什么是代理模式" tabindex="-1"><a class="header-anchor" href="#什么是代理模式" aria-hidden="true">#</a> 什么是代理模式</h2><p>代理模式(Proxy Pattern)：它的主要思想是通过一个代理对象来代替真实对象的访问，从而在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。</p><h3 id="包含哪些角色" tabindex="-1"><a class="header-anchor" href="#包含哪些角色" aria-hidden="true">#</a> 包含哪些角色</h3><figure><img src="'+c+`" alt="代理模式" tabindex="0" loading="lazy"><figcaption>代理模式</figcaption></figure><ul><li><p>Subject: 抽象主题</p><p>通过接口或抽象类声明真实主题和代理对象实现的业务方法</p></li><li><p>RealSubject: 真实主题</p><p>实现了抽象主题中的具体业务，是代理对象所代表的真实对象，是最终要引用的对象</p></li><li><p>Proxy: 代理类</p><p>提供了与真实主题相同的接口，其内部包含有对真实主题的引用，它可以访问、控制或扩展真实主题的功能。</p></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> proxy

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Subject <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> RealSubject <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r RealSubject<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;do request&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Proxy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	realSubject Subject
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">preRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;pre request&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">postRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;post request&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span><span class="token function">preRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span>realSubject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span><span class="token function">postRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> proxy

<span class="token keyword">func</span> <span class="token function">ExampleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> subject Subject
	subject <span class="token operator">=</span> Proxy<span class="token punctuation">{</span>realSubject<span class="token punctuation">:</span> RealSubject<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
	subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// pre request</span>
	<span class="token comment">// do request</span>
	<span class="token comment">// post request</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><ul><li><p>静态代理：代理对象和目标对象在编译期就已经确定，代理对象需要实现和目标对象相同的接口，并持有目标对象的引用。静态代理的优点是简单易实现，缺点是代码冗余，每个代理类都需要重新编写。</p></li><li><p>远程代理：为一个位于不同地址空间的对象提供一个本地的代理对象，使客户端可以通过本地代理对象来访问远程对象，屏蔽了网络通信的细节。</p></li><li><p>虚拟代理：当一个对象的创建或者加载时需要很长时间，可以使用虚拟代理来延迟对象的加载或者创建，直到真正需要使用该对象时再进行加载或者创建。</p></li><li><p>保护代理：当对一个对象的访问需要进行安全控制时，可以使用安全代理来控制对象的访问权限，例如在对象被访问时需要进行认证或授权等。</p></li><li><p>缓存代理：当需要缓存一些计算结果时，可以使用缓存代理，以便在后续的访问中直接返回缓存的结果，避免重复计算。</p></li><li><p>日志记录代理：在访问被代理对象的过程中，使用日志记录代理可以记录所有访问记录，以便于问题排查和系统优化等。</p></li></ul><h3 id="远程代理" tabindex="-1"><a class="header-anchor" href="#远程代理" aria-hidden="true">#</a> 远程代理</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Subject 接口定义</span>
<span class="token keyword">type</span> Subject <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// RemoteSubject 结构体实现 Subject 接口</span>
<span class="token keyword">type</span> RemoteSubject <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    URL <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>rs <span class="token operator">*</span>RemoteSubject<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// 远程调用</span>
    response<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>URL<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Error: &quot;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> response<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    body<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Error: &quot;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Proxy 结构体实现 Subject 接口，并在内部包含了一个 RemoteSubject 对象</span>
<span class="token keyword">type</span> Proxy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    subject <span class="token operator">*</span>RemoteSubject
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在此处执行一些身份验证、日志记录等操作</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span>subject <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        p<span class="token punctuation">.</span>subject <span class="token operator">=</span> <span class="token operator">&amp;</span>RemoteSubject<span class="token punctuation">{</span>
            URL<span class="token punctuation">:</span> <span class="token string">&quot;http://www.example.com&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Proxy -&gt; &quot;</span> <span class="token operator">+</span> p<span class="token punctuation">.</span>subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// client 代码</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> subject Subject <span class="token operator">=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span><span class="token punctuation">}</span>
    result <span class="token operator">:=</span> subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式，我们可以将客户端和远程对象之间的耦合度降低，增加了系统的可维护性和可扩展性。</p><h3 id="虚拟代理" tabindex="-1"><a class="header-anchor" href="#虚拟代理" aria-hidden="true">#</a> 虚拟代理</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Image 接口定义</span>
<span class="token keyword">type</span> Image <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// RealImage 结构体实现 Image 接口</span>
<span class="token keyword">type</span> RealImage <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    filename <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ri <span class="token operator">*</span>RealImage<span class="token punctuation">)</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Displaying Real Image: &quot;</span><span class="token punctuation">,</span> ri<span class="token punctuation">.</span>filename<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Proxy 结构体实现 Image 接口，并在内部包含了一个 RealImage 对象</span>
<span class="token keyword">type</span> Proxy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    image <span class="token operator">*</span>RealImage
    filename <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用虚拟代理，在真正需要使用 RealImage 对象时才进行创建和加载</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span>image <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Creating Real Image: &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>filename<span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token operator">&amp;</span>RealImage<span class="token punctuation">{</span>
            filename<span class="token punctuation">:</span> p<span class="token punctuation">.</span>filename<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// client 代码</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> image Image <span class="token operator">=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span>
        filename<span class="token punctuation">:</span> <span class="token string">&quot;example.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 第一次调用 Display() 方法会创建和加载 RealImage 对象</span>
    image<span class="token punctuation">.</span><span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 第二次调用 Display() 方法直接使用已创建的 RealImage 对象</span>
    image<span class="token punctuation">.</span><span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式，我们可以延迟 RealImage 对象的加载或者创建，直到客户端真正需要访问该对象时才进行加载或者创建，从而减少了系统的资源消耗，优化了系统的性能。</p><h3 id="保护代理" tabindex="-1"><a class="header-anchor" href="#保护代理" aria-hidden="true">#</a> 保护代理</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Subject 接口定义</span>
<span class="token keyword">type</span> Subject <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// RealSubject 结构体实现 Subject 接口</span>
<span class="token keyword">type</span> RealSubject <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// RealSubject 对象需要进行身份认证或者授权等安全处理</span>
    Username <span class="token builtin">string</span>
    Password <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>rs <span class="token operator">*</span>RealSubject<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Request processed by Real Subject&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Proxy 结构体实现 Subject 接口，并在内部包含了一个 RealSubject 对象</span>
<span class="token keyword">type</span> Proxy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    subject <span class="token operator">*</span>RealSubject
    username <span class="token builtin">string</span>
    password <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">Authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在此处执行身份认证等操作</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span>username <span class="token operator">==</span> <span class="token string">&quot;admin&quot;</span> <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span>password <span class="token operator">==</span> <span class="token string">&quot;admin123&quot;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span>subject <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        p<span class="token punctuation">.</span>subject <span class="token operator">=</span> <span class="token operator">&amp;</span>RealSubject<span class="token punctuation">{</span>
            Username<span class="token punctuation">:</span> p<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
            Password<span class="token punctuation">:</span> p<span class="token punctuation">.</span>password<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 在此处执行授权等操作</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span><span class="token function">Authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p<span class="token punctuation">.</span>subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization failed!&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// client 代码</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> subject Subject <span class="token operator">=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span>
        username<span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
        password<span class="token punctuation">:</span> <span class="token string">&quot;admin123&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们通过认证和授权等操作来控制对 RealSubject 对象的访问权限，只有认证和授权成功之后才能访问 RealSubject 对象，否则返回授权失败的提示消息。通过这种方式，我们可以对系统中的访问进行更加细粒度的控制，增加了系统的安全性和鲁棒性。</p><h3 id="缓存代理" tabindex="-1"><a class="header-anchor" href="#缓存代理" aria-hidden="true">#</a> 缓存代理</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Subject 接口定义</span>
<span class="token keyword">type</span> Subject <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Request</span><span class="token punctuation">(</span>arg <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// RealSubject 结构体实现 Subject 接口</span>
<span class="token keyword">type</span> RealSubject <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>rs <span class="token operator">*</span>RealSubject<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span>arg <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Processing request with argument:&quot;</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
    <span class="token keyword">return</span> arg <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token comment">// Proxy 结构体实现 Subject 接口，并在内部包含了一个 RealSubject 对象和一个缓存 map</span>
<span class="token keyword">type</span> Proxy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    subject <span class="token operator">*</span>RealSubject
    cache <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span>arg <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// 尝试从缓存中获取结果</span>
    res<span class="token punctuation">,</span> ok <span class="token operator">:=</span> p<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>arg<span class="token punctuation">]</span>
    <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Return cached result:&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果缓存中没有结果，则使用 RealSubject 对象进行计算</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span>subject <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        p<span class="token punctuation">.</span>subject <span class="token operator">=</span> <span class="token operator">&amp;</span>RealSubject<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    res <span class="token operator">=</span> p<span class="token punctuation">.</span>subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
    <span class="token comment">// 将计算结果添加到缓存中，并返回结果</span>
    p<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>arg<span class="token punctuation">]</span> <span class="token operator">=</span> res
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// client 代码</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> subject Subject <span class="token operator">=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span>
        cache<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 缓存中没有结果，RealSubject 进行计算并添加到缓存中</span>
    subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 缓存中存在结果，直接返回缓存结果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式，我们可以减少一些需要重复计算的操作，优化了系统的性能，并且可以快速响应客户端的请求。</p><h3 id="日志记录代理" tabindex="-1"><a class="header-anchor" href="#日志记录代理" aria-hidden="true">#</a> 日志记录代理</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Subject 接口定义</span>
<span class="token keyword">type</span> Subject <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// RealSubject 结构体实现 Subject 接口</span>
<span class="token keyword">type</span> RealSubject <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>rs <span class="token operator">*</span>RealSubject<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Processing request...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Proxy 结构体实现 Subject 接口，并在内部包含了一个 RealSubject 对象和一个日志记录器</span>
<span class="token keyword">type</span> Proxy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    subject <span class="token operator">*</span>RealSubject
    logger <span class="token operator">*</span>log<span class="token punctuation">.</span>Logger
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Calling Request method...&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span>subject <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        p<span class="token punctuation">.</span>subject <span class="token operator">=</span> <span class="token operator">&amp;</span>RealSubject<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Request method finished.&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// client 代码</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> subject Subject <span class="token operator">=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span>
        logger<span class="token punctuation">:</span> log<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>Ldate<span class="token operator">|</span>log<span class="token punctuation">.</span>Ltime<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    subject<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 记录 Request 方法的调用信息和结果信息</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式，我们可以在系统中记录每一次对特定对象或方法的调用，以便后续系统调试或问题排查。</p><h3 id="有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#有哪些优缺点" aria-hidden="true">#</a> 有哪些优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>代理模式能够协调调用者和被调用者，在一定程度上降低了系统的耦合度。</li><li>远程代理使得客户端可以访问在远程机器上的对象，远程机器坑具有更好的计算性能与处理速度，可以加快相应并处理客户端请求。</li><li>虚拟代理通过使用一个小对象来代表一个大对象，可以减少系统资源的消耗，对系统进行优化并提高运行速度。</li><li>保护代理可以控制对真实对象的使用权限。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>由于客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。</li><li>实现代理模式需要额外的工作，有些代理模式的实现非常复杂。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="代理模式和装饰器模式" tabindex="-1"><a class="header-anchor" href="#代理模式和装饰器模式" aria-hidden="true">#</a> 代理模式和装饰器模式</h3><ul><li>语义上：代理模式是为了控制对被代理对象的访问，而装饰器模式是为了增加被装饰对象的功能。</li><li>使用方式上：装饰器模式需要将被装饰者作为参数传给装饰者的构造器，而被代理对象由代理对象创建，客户端不需要知道被代理类的存在。</li><li>使用者角度上：被代理对象是已经确定的，而被装饰者则在使用时根据需求进行组合。</li></ul><h3 id="代理模式和-middleware" tabindex="-1"><a class="header-anchor" href="#代理模式和-middleware" aria-hidden="true">#</a> 代理模式和 Middleware</h3><p>代理设计模式和 Middleware 之间存在相似之处，这两个模式都是为了实现对象间松耦合，增强维护性和扩展性。例如：日志记录、访问控制、速率限制等。唯一不同的地方是：代理模式是通过引入被代理类扩展其功能，而Go语言middleware是通过函数和闭包实现扩展函数功能，这归功于Go语言中函数是一等公民。</p>`,36);function u(r,d){return a(),t("div",null,[i,e(" more "),l])}const m=s(o,[["render",u],["__file","proxy.html.vue"]]);export{m as default};
