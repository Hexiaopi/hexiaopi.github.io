import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as t}from"./app-DE5Wz_61.js";const e={},o=t(`<h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量"><span>常量</span></a></h2><blockquote><p>常量（constant），顾名思义，程序运行期间，其值不能改变的量。</p></blockquote><h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明"><span>声明</span></a></h3><h4 id="一个常量" tabindex="-1"><a class="header-anchor" href="#一个常量"><span>一个常量</span></a></h4><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token operator">&lt;</span>constant_name<span class="token operator">&gt;</span> <span class="token punctuation">[</span>constant_type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>赋值表达式<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">const</span> PI <span class="token builtin">float32</span> <span class="token operator">=</span> <span class="token number">3.1415926</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;Go&quot;</span> <span class="token comment">//编译器自动推断类型为string类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多个常量" tabindex="-1"><a class="header-anchor" href="#多个常量"><span>多个常量</span></a></h4><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">const</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Go&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span> <span class="token comment">//自动推断a是整型、b是字符串类型、c是字节型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="常量组" tabindex="-1"><a class="header-anchor" href="#常量组"><span>常量组</span></a></h4><p>例如：<code>$GOROOT/src/net/http/method.go</code></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	MethodGet     <span class="token operator">=</span> <span class="token string">&quot;GET&quot;</span>
	MethodHead    <span class="token operator">=</span> <span class="token string">&quot;HEAD&quot;</span>
	MethodPost    <span class="token operator">=</span> <span class="token string">&quot;POST&quot;</span>
	MethodPut     <span class="token operator">=</span> <span class="token string">&quot;PUT&quot;</span>
	MethodPatch   <span class="token operator">=</span> <span class="token string">&quot;PATCH&quot;</span> <span class="token comment">// RFC 5789</span>
	MethodDelete  <span class="token operator">=</span> <span class="token string">&quot;DELETE&quot;</span>
	MethodConnect <span class="token operator">=</span> <span class="token string">&quot;CONNECT&quot;</span>
	MethodOptions <span class="token operator">=</span> <span class="token string">&quot;OPTIONS&quot;</span>
	MethodTrace   <span class="token operator">=</span> <span class="token string">&quot;TRACE&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👀</p><blockquote><p>如果不指定类型和初始化值，则默认表示使用上行的赋值表达式</p></blockquote><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	x <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
	y						<span class="token comment">//y为1</span>
	a <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span>
	b						<span class="token comment">//b为&quot;a&quot;</span>
	c <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
	d						<span class="token comment">//d为&quot;&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h3><p>规则：</p><ul><li><p><strong>常量值必须是确定的，不能使用程序运行期间不确定的值</strong> 👀</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
  x <span class="token operator">=</span> runtime<span class="token punctuation">.</span><span class="token function">NumCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">//编译不通过，因为runtime.NumCPU()是在程序运行期间获取到的机器CPU个数</span>
  y <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span> <span class="token comment">//编译通过，内置函数len等可以使用</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>常量的值在编译过程已确定，作为指令数据使用，没有内存分配</strong> ‼️</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span>x<span class="token punctuation">)</span>		<span class="token comment">//编译不通过，获取不到地址</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,18),p=[o];function c(l,i){return a(),s("div",null,p)}const u=n(e,[["render",c],["__file","constant.html.vue"]]),m=JSON.parse('{"path":"/go-language/base/constant.html","title":"常量","lang":"zh-CN","frontmatter":{"title":"常量","date":"2022-05-03T00:00:00.000Z","tag":["Go","基础"],"category":["Go语言"],"description":"常量 常量（constant），顾名思义，程序运行期间，其值不能改变的量。 声明 一个常量 例如 多个常量 常量组 例如：$GOROOT/src/net/http/method.go 👀 如果不指定类型和初始化值，则默认表示使用上行的赋值表达式 初始化 规则： 常量值必须是确定的，不能使用程序运行期间不确定的值 👀 常量的值在编译过程已确定，作为指...","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/go-language/base/constant.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"常量"}],["meta",{"property":"og:description","content":"常量 常量（constant），顾名思义，程序运行期间，其值不能改变的量。 声明 一个常量 例如 多个常量 常量组 例如：$GOROOT/src/net/http/method.go 👀 如果不指定类型和初始化值，则默认表示使用上行的赋值表达式 初始化 规则： 常量值必须是确定的，不能使用程序运行期间不确定的值 👀 常量的值在编译过程已确定，作为指..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-30T09:20:01.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:published_time","content":"2022-05-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-30T09:20:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常量\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-30T09:20:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"常量","slug":"常量","link":"#常量","children":[{"level":3,"title":"声明","slug":"声明","link":"#声明","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]}]}],"git":{"createdTime":1651589457000,"updatedTime":1690708801000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":1.06,"words":317},"filePathRelative":"go-language/base/constant.md","localizedDate":"2022年5月3日","excerpt":"<h2>常量</h2>\\n<blockquote>\\n<p>常量（constant），顾名思义，程序运行期间，其值不能改变的量。</p>\\n</blockquote>\\n<h3>声明</h3>\\n<h4>一个常量</h4>\\n<div class=\\"language-go\\" data-ext=\\"go\\" data-title=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token operator\\">&lt;</span>constant_name<span class=\\"token operator\\">&gt;</span> <span class=\\"token punctuation\\">[</span>constant_type<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&lt;</span>赋值表达式<span class=\\"token operator\\">&gt;</span>\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
