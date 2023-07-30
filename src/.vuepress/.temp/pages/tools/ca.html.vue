<template><div><h1 id="ca证书" tabindex="-1"><a class="header-anchor" href="#ca证书" aria-hidden="true">#</a> CA证书</h1>
<h2 id="安装工具" tabindex="-1"><a class="header-anchor" href="#安装工具" aria-hidden="true">#</a> 安装工具</h2>
<blockquote>
<p>使用CloudFlare的PKI和TLS工具包cfssl来创建证书</p>
</blockquote>
<h3 id="安装cfssl工具集" tabindex="-1"><a class="header-anchor" href="#安装cfssl工具集" aria-hidden="true">#</a> 安装cfssl工具集</h3>
<p>cfssl工具集中包含很多工具</p>
<blockquote>
<p>cfssl：证书签发工具</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go get github.com/cloudflare/cfssl/cmd/cfssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>cfssljson：将cfssl生产的证书（json格式）变为文件承载式证书</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go get github.com/cloudflare/cfssl/cmd/cfssljson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者直接安装所有工具</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go get github.com/cloudflare/cfssl/cmd/...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h3>
<blockquote>
<p>CA配置文件是用来配置根证书的使用场景（profile）和具体参数（usage、过期时间、服务端认证、客户端认证、加密等）<br>
创建文件：ca-config.json</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"signing"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"default"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"expiry"</span><span class="token operator">:</span> <span class="token string">"87600h"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"profiles"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"iam"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"usages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"signing"</span><span class="token punctuation">,</span>
                    <span class="token string">"key encipherment"</span><span class="token punctuation">,</span>
                    <span class="token string">"server auth"</span><span class="token punctuation">,</span>
                    <span class="token string">"client auth"</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"expiry"</span><span class="token operator">:</span> <span class="token string">"876000h"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>signing：表示该证书可用于签名其他证书（生成的ca.pem证书中的CA=TRUE）</li>
<li>server auth：表示client可以用该证书对server提供的证书进行验证</li>
<li>client auth：表示server可以用该证书对client提供的证书进行验证</li>
<li>expiry：876000h，证书有效期设置为100年</li>
</ul>
<h3 id="创建证书签名请求文件" tabindex="-1"><a class="header-anchor" href="#创建证书签名请求文件" aria-hidden="true">#</a> 创建证书签名请求文件</h3>
<blockquote>
<p>用来生成CA证书签名请求（CSR）的JSON配置文件</p>
</blockquote>
<p>创建文件：ca-csr.json</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"CN"</span><span class="token operator">:</span> <span class="token string">"test-ca"</span><span class="token punctuation">,</span>
    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"algo"</span><span class="token operator">:</span> <span class="token string">"rsa"</span><span class="token punctuation">,</span>
        <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">2048</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"names"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"C"</span><span class="token operator">:</span> <span class="token string">"CN"</span><span class="token punctuation">,</span>
            <span class="token property">"ST"</span><span class="token operator">:</span> <span class="token string">"BeiJing"</span><span class="token punctuation">,</span>
            <span class="token property">"L"</span><span class="token operator">:</span> <span class="token string">"BeiJing"</span><span class="token punctuation">,</span>
            <span class="token property">"O"</span><span class="token operator">:</span> <span class="token string">"hexiaopi"</span><span class="token punctuation">,</span>
            <span class="token property">"OU"</span><span class="token operator">:</span> <span class="token string">"test"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"ca"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"expiry"</span><span class="token operator">:</span> <span class="token string">"876000h"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>C：Country，国家</li>
<li>ST：State，省份</li>
<li>L：Locality or City，城市</li>
<li>CN：Common Name，浏览器使用该字段验证网站是否合法</li>
<li>O：Organization，组织</li>
<li>OU：Company Division，部门/单位</li>
</ul>
<h3 id="创建ca证书和私钥" tabindex="-1"><a class="header-anchor" href="#创建ca证书和私钥" aria-hidden="true">#</a> 创建CA证书和私钥</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cfssl gencert -initca ca-csr.json | cfssljson -bare ca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述命令会创建运行CA所必须的文件<code v-pre>ca-key.pem</code>（私钥）和 <code v-pre>ca.pem</code>（证书），还会生成<code v-pre>ca.csr</code>(证书签名请求)，用于交叉签名或重新签名。</p>
</div></template>


