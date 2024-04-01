import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as i,e as l}from"./app-e7ded9a4.js";const n={},a=l(`<blockquote><p>API接口文档常常包含以下内容</p><ul><li>接口详细列表，包含接口功能，请求方法、输入参数、输出参数、请求示例</li><li>CHANGELOG：API接口文档变更历史，方便进行回溯</li><li>通用的请求参数、返回参数、认证方法或者加密算法</li><li>接口中使用的数据结构</li><li>错误码描述</li></ul></blockquote><p>常见的API接口规范为：RESTful API规范</p><h2 id="uri" tabindex="-1"><a class="header-anchor" href="#uri" aria-hidden="true">#</a> URI</h2><blockquote><p>URI表示资源，资源一般对应后端实体，例如：用户为user<br> 资源集合通常使用复数形式，例如：users</p></blockquote><h2 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h2><blockquote><p>通过HTTP方法对资源进行CRUD</p></blockquote><p>GET：查询资源集合或一个资源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /users
GET /users?page=1&amp;size=10 (根据条件查询)
GET /user/:id (:id为用户id)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POST：创建一个资源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /user (创建用户)
{
  &quot;name&quot;: &quot;hexiaopi&quot;,
  &quot;sex&quot;: &quot;male&quot;,
  &quot;age&quot;: 28
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PUT：更新一个资源（全量更新）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /user/hexiaopi (更新用户信息)
{
  &quot;name&quot;: &quot;hexiaopi&quot;,
  &quot;sex&quot;: &quot;male&quot;,
  &quot;age&quot;: 29
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PATCH：更新一个资源（部分更新，例如只更新用户的状态等）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PATCH /user/hexiaopi (更新用户信息)
[
    {
        &quot;op&quot;: &quot;replace&quot;,
        &quot;key&quot;: &quot;name&quot;,
        &quot;value&quot;: &quot;hexiaojin&quot;
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DELETE：删除一个资源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /user/:id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安全性和幂等性</p><blockquote><p>安全性：不会改变资源状态，可以理解为只读的；<br> 幂等性：执行1次和执行N次，对资源状态改变效果是等价的；</p></blockquote><table><thead><tr><th style="text-align:center;">Request</th><th style="text-align:center;">安全性</th><th style="text-align:center;">幂等性</th></tr></thead><tbody><tr><td style="text-align:center;">GET</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:center;">POST</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:center;">PUT</td><td style="text-align:center;">N</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:center;">PATCH</td><td style="text-align:center;">N</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:center;">DELETE</td><td style="text-align:center;">N</td><td style="text-align:center;">Y</td></tr></tbody></table><blockquote><p>这里的幂等性关注的是资源状态改变效果，而非两次相同的请求得到相同的结果。</p><p>例如：删除某一个资源，第一次成功删除，下次再删除就不一定成功了。但是对于这条资源的最终状态来说，都是一样的，即该资源已删除。</p></blockquote><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3><blockquote><p>返回错误码及其描述<br> API包含两类异常：业务异常和非业务异常</p><p>业务异常须返回相应的HTTP状态码，例如：</p><ul><li>请求未授权对应HTTP状态码401；</li><li>请求参数校验失败对应HTTP状态码400；</li></ul><p>非业务异常统一返回状态码500</p></blockquote><h2 id="接口版本" tabindex="-1"><a class="header-anchor" href="#接口版本" aria-hidden="true">#</a> 接口版本</h2><blockquote><p>接口版本常常发生在不兼容场景。<br> 常见通过URI中增加版本号信息，例如：</p><ul><li>/api/v1/user</li><li>/api/v2/user</li></ul></blockquote>`,25),d=[a];function s(r,u){return t(),i("div",null,d)}const v=e(n,[["render",s],["__file","api.html.vue"]]);export{v as default};
