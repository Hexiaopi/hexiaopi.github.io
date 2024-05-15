import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as l,b as i,o}from"./app-Dn-1EyMU.js";const r="/assets/http-BfDIMOyN.gif",n={},a=i('<blockquote><p>HTTP协议是目前使用最为广泛的应用层协议</p></blockquote><h2 id="http发展简史" tabindex="-1"><a class="header-anchor" href="#http发展简史"><span>HTTP发展简史</span></a></h2><ul><li><strong>1989 年</strong>：蒂姆·伯纳斯-李在 CERN 提出万维网的概念。</li><li><strong>1991 年</strong>：蒂姆·伯纳斯-李发布 HTTP/0.9，HTTP 协议的第一个版本。</li><li><strong>1996 年</strong>：HTTP/1.0 发布，引入了状态码、头字段和持久连接等新功能。</li><li><strong>1997 年</strong>：HTTP/1.1 发布，对 HTTP/1.0 进行了重大更新，包括管道化请求、分块传输编码和主机头字段。</li><li><strong>2015 年</strong>：HTTP/2 发布，对 HTTP/1.1 进行了重大重新设计，重点是提高性能和效率。</li><li><strong>2022 年</strong>：HTTP/3 发布，HTTP/2 的最新版本，基于 QUIC 传输协议。</li></ul><p>HTTP/1.1 仍然是当今互联网上使用最广泛的 HTTP 版本，但 HTTP/2 和 HTTP/3 正在逐渐获得采用。随着时间的推移，预计 HTTP/3 将成为新的标准。</p><h2 id="http方法" tabindex="-1"><a class="header-anchor" href="#http方法"><span>HTTP方法</span></a></h2><figure><img src="'+r+'" alt="http" tabindex="0" loading="lazy"><figcaption>http</figcaption></figure><p>HTTP 方法是客户端向服务器发送请求时所使用的动作。最常用的 HTTP 方法包括：</p><ul><li><strong>GET：</strong> 从服务器获取指定资源。这是最基本的 HTTP 方法，用于检索网页、图像或其他文件。</li><li><strong>POST：</strong> 向服务器提交数据以创建资源。通常用于提交表单数据或上传文件。</li><li><strong>PUT：</strong> 更新服务器上的现有资源。</li><li><strong>DELETE：</strong> 删除服务器上的资源。</li><li><strong>HEAD：</strong> 获取资源的元数据（如大小和内容类型），而不实际获取资源内容。</li><li><strong>OPTIONS：</strong> 获取服务器支持的 HTTP 方法和功能。</li><li><strong>PATCH：</strong> 部分更新服务器上的资源。</li></ul><p><strong>示例</strong></p><p>以下是一些 HTTP 方法的示例：</p><ul><li><code>GET /index.html HTTP/1.1</code>：从服务器获取 index.html 文件。</li><li><code>POST /submit-form HTTP/1.1</code>：向服务器提交表单数据。</li><li><code>PUT /users/1 HTTP/1.1</code>：更新服务器上 ID 为 1 的用户。</li><li><code>DELETE /files/image.png HTTP/1.1</code>：从服务器删除 image.png 文件。</li><li><code>HEAD /about-us HTTP/1.1</code>：获取关于我们页面的元数据。</li><li><code>OPTIONS /api/v1 HTTP/1.1</code>：获取 API 的功能信息。</li><li><code>PATCH /users/1 HTTP/1.1</code>：部分更新用户个人资料（例如，仅更新姓名）。</li></ul><h2 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码"><span>HTTP状态码</span></a></h2><p>TTP 状态码分为五类，每类表示一个不同的响应类别：</p><p><strong>1xx 信息响应</strong></p><ul><li>表示请求已收到并正在处理。</li><li>例如： <ul><li>100 继续</li><li>101 切换协议</li></ul></li></ul><p><strong>2xx 成功响应</strong></p><ul><li>表示请求已成功处理。</li><li>例如： <ul><li>200 OK</li><li>201 已创建</li><li>204 无内容</li></ul></li></ul><p><strong>3xx 重定向</strong></p><ul><li>表示需要进一步操作才能完成请求。</li><li>例如： <ul><li>301 永久重定向</li><li>302 临时重定向</li><li>308 永久重定向</li></ul></li></ul><p><strong>4xx 客户端错误</strong></p><ul><li>表示客户端请求有误。</li><li>例如： <ul><li>400 错误的请求</li><li>401 未经授权</li><li>404 未找到</li></ul></li></ul><p><strong>5xx 服务器错误</strong></p><ul><li>表示服务器在处理请求时遇到错误。</li><li>例如： <ul><li>500 内部服务器错误</li><li>502 错误的网关</li><li>503 服务不可用</li></ul></li></ul><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><p><a href="https://mp.weixin.qq.com/s/AuYEWkY9LN6TRrQvU-AaQA" target="_blank" rel="noopener noreferrer">HTTP发放和使用大全</a><a href="https://mp.weixin.qq.com/s/Q_BeNgqNWizwVkMkH39e7g" target="_blank" rel="noopener noreferrer">HTTP状态码完整指南</a><a href="https://mp.weixin.qq.com/s/VTFC8WEJTnoDzEtKsi48Aw" target="_blank" rel="noopener noreferrer">图解|什么是HTTP简史</a></p>',25);function T(p,s){return o(),e("div",null,[l(" more "),a])}const h=t(n,[["render",T],["__file","HTTP.html.vue"]]),d=JSON.parse('{"path":"/network/application-layer/HTTP.html","title":"HTTP协议","lang":"zh-CN","frontmatter":{"title":"HTTP协议","date":"2024-04-11T00:00:00.000Z","tag":["应用层协议","HTTP"],"category":["网络"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/network/application-layer/HTTP.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"HTTP协议"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T09:57:53.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"应用层协议"}],["meta",{"property":"article:tag","content":"HTTP"}],["meta",{"property":"article:published_time","content":"2024-04-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-15T09:57:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP协议\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-15T09:57:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"HTTP发展简史","slug":"http发展简史","link":"#http发展简史","children":[]},{"level":2,"title":"HTTP方法","slug":"http方法","link":"#http方法","children":[]},{"level":2,"title":"HTTP状态码","slug":"http状态码","link":"#http状态码","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1712819161000,"updatedTime":1713175073000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":2.47,"words":742},"filePathRelative":"network/application-layer/HTTP.md","localizedDate":"2024年4月11日","excerpt":""}');export{h as comp,d as data};
