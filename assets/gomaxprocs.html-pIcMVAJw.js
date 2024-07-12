import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as s,b as e,o as t}from"./app-CFfUv9Xd.js";const i={},o=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Go语言使用GMP调度模型，其中P的数量通过<code>GOMAXPROXS</code>设置，默认是机器的CPU核数。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>但是由于Docker通过Cgroups做资源限制，存在的诟病：应用程序在容器里读取到的CPU核数是宿主机上的数据而非实际容器分配的数据。</p></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>而通常我们在Kubernetes集群使用的宿主机通常是100+核，容器分配的资源是2c4g，这就导致Go调度器会根据宿主机的核数设置P的数量，这会因为P数量过多导致不必要的资源争抢，反而降低性能。</p></div><h2 id="实验" tabindex="-1"><a class="header-anchor" href="#实验"><span>实验</span></a></h2><p>为此我们准备一个简单的Go程序和Dockerfile，进行实验验证。</p><p>Go程序只打印容器的GOMAXPROCS，其中<code>runtime.GOMAXPROCS(0)</code>，当传值为0时，返回当前的GOMAXPROCS值。</p><p>Dockerfile内容如下：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:1.21-alpine <span class="token keyword">AS</span> builder</span>

<span class="token instruction"><span class="token keyword">ENV</span> GO111MODULE=on</span>
<span class="token instruction"><span class="token keyword">ENV</span> GOPROXY=https://goproxy.cn,direct</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /backend</span>

<span class="token instruction"><span class="token keyword">COPY</span> . /backend</span>

<span class="token instruction"><span class="token keyword">RUN</span> go mod tidy &amp;&amp; go build -o app</span>

<span class="token instruction"><span class="token keyword">FROM</span> alpine:latest</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /backend/app /app/app</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./app&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="未设置maxprocs的场景" tabindex="-1"><a class="header-anchor" href="#未设置maxprocs的场景"><span>未设置maxprocs的场景</span></a></h3><p>Go程序如下：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;maxprocs&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> cpu-test:v0.1.0 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行镜像:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--cpus</span><span class="token operator">=</span><span class="token number">1.0</span>  cpu-test:v0.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里通过<code>--cpus=1.0</code>限制容器的CPU核数为1。</p><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>maxprocs 20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>我的本机逻辑处理器有20个，所以结果为20</p></div><h3 id="设置maxprocs场景" tabindex="-1"><a class="header-anchor" href="#设置maxprocs场景"><span>设置maxprocs场景</span></a></h3><p>这里使用uber公司开源的库来修改maxprocs，Go程序如下：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>

	<span class="token boolean">_</span> <span class="token string">&quot;go.uber.org/automaxprocs&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;maxprocs&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> cpu-test:v0.1.1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--cpus</span><span class="token operator">=</span><span class="token number">1.0</span>  cpu-test:v0.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>2024/07/11 09:06:55 maxprocs: Updating GOMAXPROCS=1: determined from CPU quota
maxprocs 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>我们看到maxprocs已经设置为我们限制的核数，由于引入的<code>automaxprocs</code>库进行初始化，因此多打印了一段信息。</p></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2><ul><li><a href="https://github.com/uber-go/automaxprocs" target="_blank" rel="noopener noreferrer">https://github.com/uber-go/automaxprocs</a></li><li><a href="https://blog.csdn.net/NUCEMLS/article/details/132528994" target="_blank" rel="noopener noreferrer">docker容器环境go程序的GOMAXPROCS问题</a></li></ul>`,31);function p(c,l){return t(),a("div",null,[s(" more "),o])}const u=n(i,[["render",p],["__file","gomaxprocs.html.vue"]]),m=JSON.parse('{"path":"/language/go/advance/gomaxprocs.html","title":"Docker环境go如何设置maxprocs","lang":"zh-CN","frontmatter":{"title":"Docker环境go如何设置maxprocs","date":"2024-07-12T00:00:00.000Z","tag":["Go","进阶"],"category":["编程语言"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/language/go/advance/gomaxprocs.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"Docker环境go如何设置maxprocs"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-12T03:25:46.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"进阶"}],["meta",{"property":"article:published_time","content":"2024-07-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-12T03:25:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker环境go如何设置maxprocs\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-12T03:25:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"实验","slug":"实验","link":"#实验","children":[{"level":3,"title":"未设置maxprocs的场景","slug":"未设置maxprocs的场景","link":"#未设置maxprocs的场景","children":[]},{"level":3,"title":"设置maxprocs场景","slug":"设置maxprocs场景","link":"#设置maxprocs场景","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1720754746000,"updatedTime":1720754746000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":1.73,"words":518},"filePathRelative":"language/go/advance/gomaxprocs.md","localizedDate":"2024年7月12日","excerpt":""}');export{u as comp,m as data};
