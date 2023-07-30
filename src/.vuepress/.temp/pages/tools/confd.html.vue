<template><div><h2 id="_1-confd" tabindex="-1"><a class="header-anchor" href="#_1-confd" aria-hidden="true">#</a> 1. confd</h2>
<h3 id="_1-1-confd简介" tabindex="-1"><a class="header-anchor" href="#_1-1-confd简介" aria-hidden="true">#</a> 1.1 confd简介</h3>
<blockquote>
<p>confd是一个轻量级配置管理工具，通过加载存储在etcd、consul、redis、zookeeper等的数据，结合配置模板动态更新配置文件。</p>
</blockquote>
<p><strong>github地址</strong>：<code v-pre>https://github.com/kelseyhightower/confd</code></p>
<p><strong>官网：</strong><code v-pre>http://www.confd.io/</code></p>
<h3 id="_1-2-confd功能角色" tabindex="-1"><a class="header-anchor" href="#_1-2-confd功能角色" aria-hidden="true">#</a> 1.2 confd功能角色</h3>
<p>confd的功能类似于快递员，负责去配置服务中读取配置数据，然后更新配置文件，并通知应用服务热加载配置文件。</p>
<figure><img src="@source/tools/picture/confd.jpg" alt="confd" tabindex="0" loading="lazy"><figcaption>confd</figcaption></figure>
<h2 id="_2-confd部署" tabindex="-1"><a class="header-anchor" href="#_2-confd部署" aria-hidden="true">#</a> 2. confd部署</h2>
<p>下载地址：<code v-pre>https://github.com/kelseyhightower/confd/releases</code></p>
<p>以Linux系统为例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#下载二进制包</span>
<span class="token function">wget</span> https://github.com/kelseyhightower/confd/releases/download/v0.16.0/confd-0.16.0-linux-amd64
<span class="token comment">#重命名，并移动到PATH的目录</span>
<span class="token function">mv</span> confd-0.16.0-linux-amd64 /usr/local/bin/confd
<span class="token function">chmod</span> +x /usr/local/bin/confd
<span class="token comment">#验证</span>
confd <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-confd使用" tabindex="-1"><a class="header-anchor" href="#_3-confd使用" aria-hidden="true">#</a> 3. confd使用</h2>
<h3 id="_3-1-创建confdir" tabindex="-1"><a class="header-anchor" href="#_3-1-创建confdir" aria-hidden="true">#</a> 3.1 创建confdir</h3>
<p><code v-pre>confdir</code>(默认是<code v-pre>/etc/confd</code>)包含两个目录：</p>
<ul>
<li><code v-pre>conf.d</code>：confd的配置文件，主要包含配置的生成逻辑，例如模板源，目标配置文件，后端存储的keys，服务重启命令执行等。</li>
<li><code v-pre>templates</code>: 包含配置模板，修改符合<a href="https://golang.google.cn/pkg/text/template/#pkg-overview" target="_blank" rel="noopener noreferrer">Golang Text template<ExternalLinkIcon/></a>的模板文件。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/confd/<span class="token punctuation">{</span>conf.d,templates<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-模板源配置" tabindex="-1"><a class="header-anchor" href="#_3-2-模板源配置" aria-hidden="true">#</a> 3.2 模板源配置</h3>
<p>模板源配置文件是以TOML格式的文件，包含配置的生成逻辑，例如模板源，后端存储对应keys，命令执行等。默认目录在<code v-pre>/etc/confd/conf.d</code></p>
<p>参数说明：</p>
<p><strong>必要参数</strong></p>
<ul>
<li><code v-pre>dest</code>(string) : 目标文件.</li>
<li><code v-pre>keys</code>(array of things) : 存储的keys.</li>
<li><code v-pre>src</code>(string) :  <a href="https://github.com/kelseyhightower/confd/blob/master/docs/templates.md" target="_blank" rel="noopener noreferrer">模板配置<ExternalLinkIcon/></a>的相对路径.</li>
</ul>
<p><strong>可选参数</strong></p>
<ul>
<li><code v-pre>git</code>(int) : 文件的gid</li>
<li><code v-pre>mode</code>(string) : 文件的权限模式</li>
<li><code v-pre>uid</code>（int) : 文件的uid</li>
<li><code v-pre>reload_cmd</code>(string) : 重启命令配置</li>
<li><code v-pre>check_cmd</code>(string) : 检查命令配置，使用{{.src}}引用模板源</li>
<li><code v-pre>prefix</code>(string) : keys的前缀字符串</li>
</ul>
<p>例如：<code v-pre>/etc/confd/conf.d/prometheus.toml</code></p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token punctuation">[</span>template<span class="token punctuation">]</span>
src <span class="token operator">=</span> <span class="token string">"prometheus.tmpl"</span>
dest <span class="token operator">=</span> <span class="token string">"/data/server/prometheus/prometheus-2.11.1.linux-amd64/prometheus.yml"</span>
keys <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token string">"prometheus/job"</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
reload_cmd <span class="token operator">=</span> <span class="token string">"curl -X POST http://192.168.45.172:9090/-/reload"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-模板源" tabindex="-1"><a class="header-anchor" href="#_3-3-模板源" aria-hidden="true">#</a> 3.3 模板源</h3>
<p>Template定义了单一应用配置的模板，默认存储在<code v-pre>/etc/confd/templates</code>目录下，模板文件符合Go的<code v-pre>text/template</code>格式。</p>
<p>例如: <code v-pre>/etc/confd/templates/prometheus.tmpl</code></p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>global<span class="token punctuation">:</span>
  scrape_interval<span class="token punctuation">:</span> 15s
  scrape_timeout<span class="token punctuation">:</span> 10s
  evaluation_interval<span class="token punctuation">:</span> 15s
alerting<span class="token punctuation">:</span>
  alertmanagers<span class="token punctuation">:</span>
  <span class="token operator">-</span> static_configs<span class="token punctuation">:</span>
    <span class="token operator">-</span> targets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
scrape_configs<span class="token punctuation">:</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">range</span> gets <span class="token string">"/prometheus/job/*"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">-</span> job_name<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">.</span>Key<span class="token punctuation">}</span><span class="token punctuation">}</span>
  static_configs<span class="token punctuation">:</span>
  <span class="token operator">-</span> targets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">.</span>Value<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-启动confd的服务" tabindex="-1"><a class="header-anchor" href="#_3-4-启动confd的服务" aria-hidden="true">#</a> 3.4 启动confd的服务</h3>
<p>confd支持以<code v-pre>daemon</code>或者<code v-pre>onetime</code>两种模式运行。</p>
<p><code v-pre>onetime</code>模式，只会生成一次，之后key无论变化不会再生成：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>confd <span class="token parameter variable">-onetime</span> <span class="token parameter variable">-backend</span> etcd <span class="token parameter variable">-node</span> http://192.168.45.172:2379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>daemon</code>模式，会监听后端存储的配置变化，并根据配置模板动态生成目标配置文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>confd <span class="token parameter variable">-watch</span> <span class="token parameter variable">-backend</span> etcd <span class="token parameter variable">-node</span> http://192.168.45.172:2379 <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5-etcd设置数据" tabindex="-1"><a class="header-anchor" href="#_3-5-etcd设置数据" aria-hidden="true">#</a> 3.5 etcd设置数据</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>etcdctl <span class="token builtin class-name">set</span> /prometheus/job/prometheus <span class="token string">"192.168.45.172:9090"</span>

etcdctl <span class="token builtin class-name">set</span> /prometheus/job/pushgateway <span class="token string">"192.168.45.172:9091"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-验证配置文件数据" tabindex="-1"><a class="header-anchor" href="#_3-6-验证配置文件数据" aria-hidden="true">#</a> 3.6 验证配置文件数据</h3>
<p>根据<strong>模板源配置</strong>里设置的目标配置文件查看是否符合预期</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 15s
  <span class="token key atrule">scrape_timeout</span><span class="token punctuation">:</span> 10s
  <span class="token key atrule">evaluation_interval</span><span class="token punctuation">:</span> 15s
<span class="token key atrule">alerting</span><span class="token punctuation">:</span>
  <span class="token key atrule">alertmanagers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>

<span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> /prometheus/job/prometheus
  <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.45.172<span class="token punctuation">:</span><span class="token number">9090</span><span class="token punctuation">]</span>

<span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> /prometheus/job/pushgateway
  <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.45.172<span class="token punctuation">:</span><span class="token number">9091</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-confd模板功能函数" tabindex="-1"><a class="header-anchor" href="#_4-confd模板功能函数" aria-hidden="true">#</a> 4. confd模板功能函数</h2>
<h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3>
<p>string-&gt;interface{}的key/value键值对</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{$endpoint := map "name" "elasticsearch" "private_port" 9200 "public_port" 443}}

name: {{index $endpoint "name"}}
private-port: {{index $endpoint "private_port"}}
public-port: {{index $endpoint "public_port"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> base</h3>
<p>与<a href="https://golang.org/pkg/path/#Base" target="_blank" rel="noopener noreferrer">path.Base<ExternalLinkIcon/></a>功能同名</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{with get "/key"}}
    key: {{base .Key}}
    value: {{.Value}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exists" tabindex="-1"><a class="header-anchor" href="#exists" aria-hidden="true">#</a> exists</h3>
<p>检查key是否存在，如果不存在返回false</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{if exists "/key"}}
    value: {{getv "/key"}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3>
<p>返回键值对，如果不存在返回error</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{with get "/key"}}
    key: {{.Key}}
    value: {{.Value}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cget" tabindex="-1"><a class="header-anchor" href="#cget" aria-hidden="true">#</a> cget</h3>
<p>返回键值对，且值被加密。如果不存在返回error</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{with cget "/key"}}
    key: {{.Key}}
    value: {{.Value}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gets" tabindex="-1"><a class="header-anchor" href="#gets" aria-hidden="true">#</a> gets</h3>
<p>返回所有键值对，键值对列表，如果key不匹配返回error</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{range gets "/*"}}
    key: {{.Key}}
    value: {{.Value}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cgets" tabindex="-1"><a class="header-anchor" href="#cgets" aria-hidden="true">#</a> cgets</h3>
<p>返回所有键值对，键值对列表，key匹配参数且值被加密，如果key不匹配返回一个错误</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{range cgets "/*"}}
    key: {{.Key}}
    value: {{.Value}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getv" tabindex="-1"><a class="header-anchor" href="#getv" aria-hidden="true">#</a> getv</h3>
<p>以字符串形式返回值，其中key与其参数或可选的默认值匹配。如果未找到key且未给出默认值，则返回错误</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>value: {{getv "/key"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>With a default value</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>value: {{getv "/key" "default_value"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cgetv" tabindex="-1"><a class="header-anchor" href="#cgetv" aria-hidden="true">#</a> cgetv</h3>
<p>将加密值作为字符串返回，如果未找到key，返回错误</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>value: {{cgetv "/key"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="getvs" tabindex="-1"><a class="header-anchor" href="#getvs" aria-hidden="true">#</a> getvs</h3>
<p>返回所有值，[]string，其中key与其参数匹配。如果未找到密钥，则返回错误。</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{range getvs "/*"}}
    value: {{.}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cgetvs" tabindex="-1"><a class="header-anchor" href="#cgetvs" aria-hidden="true">#</a> cgetvs</h3>
<p>返回所有加密值，[]string，其中key与其参数匹配。如果未找到key则返回错误</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{range cgetvs "/*"}}
    value: {{.}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getenv" tabindex="-1"><a class="header-anchor" href="#getenv" aria-hidden="true">#</a> getenv</h3>
<p>检索由key命名的环境变量的值。 如果变量不存在，返回为空。 （可选）可以提供一个默认值，如果该键不存在，将返回该值。</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>export HOSTNAME=`hostname`
hostname: {{getenv "HOSTNAME"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>With a default value</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ipaddr: {{getenv "HOST_IP" "127.0.0.1"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="datetime" tabindex="-1"><a class="header-anchor" href="#datetime" aria-hidden="true">#</a> datetime</h3>
<p>与time.Now同名</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># Generated by confd {{datetime}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Outputs:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># Generated by confd 2015-01-23 13:34:56.093250283 -0800 PST
# Generated by confd {{datetime.Format "Jan 2, 2006 at 3:04pm (MST)"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Outputs:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># Generated by confd Jan 23, 2015 at 1:34pm (EST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> split</h3>
<p>用分隔字符拆分输入的字符串并返回一个子字符串切片</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{ $url := split (getv "/deis/service") ":" }}
    host: {{index $url 0}}
    port: {{index $url 1}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>toUpper</strong></p>
<p>返回大写的字符串</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>key: {{toUpper "value"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="tolower" tabindex="-1"><a class="header-anchor" href="#tolower" aria-hidden="true">#</a> toLower</h3>
<p>返回小写的字符串</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>key: {{toLower "Value"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3>
<p>返回 json值得map[string]interface{}</p>
<h3 id="lookupsrv" tabindex="-1"><a class="header-anchor" href="#lookupsrv" aria-hidden="true">#</a> lookupSRV</h3>
<p>LookupSRV函数按照RFC 2782标准来构建用于查询的DNS。也就是说，它查询_service._proto.name。当service和proto参数都是空字符串时，LookupSRV将会直接查找name</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{range lookupSRV "mail" "tcp" "example.com"}}
  target: {{.Target}}
  port: {{.Port}}
  priority: {{.Priority}}
  weight: {{.Weight}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="base64encode" tabindex="-1"><a class="header-anchor" href="#base64encode" aria-hidden="true">#</a> base64Encode</h3>
<p>返回一个base64编码得字符串</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>key: {{base64Encode "Value"}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="base64decode" tabindex="-1"><a class="header-anchor" href="#base64decode" aria-hidden="true">#</a> base64Decode</h3>
<p>返回一个base64解码的字符串</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>key: {{base64Decode "VmFsdWU="}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jsonarray" tabindex="-1"><a class="header-anchor" href="#jsonarray" aria-hidden="true">#</a> jsonArray</h3>
<p>从json数组返回一个 []interface{}</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{range jsonArray (getv "/services/data/")}}
val: {{.}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h3>
<p>返回所有子键，[]string，其中path匹配其参数。如果找不到path，则返回空列表</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{range ls "/deis/services"}}
   value: {{.}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lsdir" tabindex="-1"><a class="header-anchor" href="#lsdir" aria-hidden="true">#</a> lsdir</h3>
<p>返回所有子键，[]string，其中path匹配其参数。它只返回包含子键的子键。如果找不到路径，则返回空列表。</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{range lsdir "/deis/services"}}
   value: {{.}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dir" tabindex="-1"><a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir</h3>
<p>返回给定键的父目录</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{with dir "/services/data/url"}}
dir: {{.}}
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join</h3>
<p>字符串拼接</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{$services := getvs "/services/elasticsearch/*"}}
services: {{join $services ","}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace</h3>
<p>字符串替换</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{$backend := getv "/services/backend/nginx"}}
backend = {{replace $backend "-" "_" -1}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lookupip" tabindex="-1"><a class="header-anchor" href="#lookupip" aria-hidden="true">#</a> lookupIP</h3>
<p>查找ip</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{range lookupIP "some.host.local"}}
    server {{.}};
{{end}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="atoi" tabindex="-1"><a class="header-anchor" href="#atoi" aria-hidden="true">#</a> atoi</h3>
<p>字符换转整数</p>
<p>例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{seq 1 (atoi (getv "/count"))}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


