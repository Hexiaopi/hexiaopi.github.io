const e=JSON.parse('{"key":"v-f2f01624","path":"/system-design/security/auth.html","title":"认证方案","lang":"zh-CN","frontmatter":{"title":"认证方案","date":"2022-09-18T00:00:00.000Z","tag":["系统设计"],"category":["系统设计"],"description":"认证 我们有多种途径来保障应用的安全，例如：网咯隔离、设置防火墙、设置IP黑名单等。而认证是软件层面保护应用安全的一种措施。 当前有四种认证方式，分别是：Basic、Digest、OAuth和Bearer Basic认证 Basic认证（基础认证）是一种简单的认证方式。将用户名:密码进行base64编码，放到HTTP Authorization Header中。 但是base64不是加密技术，入侵者可以通过截获base64字符串，并反编码获取用户名和密码；其次即便进行了加密了用户名和密码，入侵者可以通过加重放攻击。","head":[["meta",{"property":"og:url","content":"https://Hexiaopi.github.io/system-design/security/auth.html"}],["meta",{"property":"og:site_name","content":"Hexiaopi"}],["meta",{"property":"og:title","content":"认证方案"}],["meta",{"property":"og:description","content":"认证 我们有多种途径来保障应用的安全，例如：网咯隔离、设置防火墙、设置IP黑名单等。而认证是软件层面保护应用安全的一种措施。 当前有四种认证方式，分别是：Basic、Digest、OAuth和Bearer Basic认证 Basic认证（基础认证）是一种简单的认证方式。将用户名:密码进行base64编码，放到HTTP Authorization Header中。 但是base64不是加密技术，入侵者可以通过截获base64字符串，并反编码获取用户名和密码；其次即便进行了加密了用户名和密码，入侵者可以通过加重放攻击。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Hexiaopi.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-30T09:20:01.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"认证方案"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"系统设计"}],["meta",{"property":"article:published_time","content":"2022-09-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-30T09:20:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"认证方案\\",\\"image\\":[\\"https://Hexiaopi.github.io/\\"],\\"datePublished\\":\\"2022-09-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-30T09:20:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"认证","slug":"认证","link":"#认证","children":[{"level":3,"title":"Basic认证","slug":"basic认证","link":"#basic认证","children":[]},{"level":3,"title":"Digest认证","slug":"digest认证","link":"#digest认证","children":[]},{"level":3,"title":"OAuth认证","slug":"oauth认证","link":"#oauth认证","children":[]},{"level":3,"title":"Bearer认证","slug":"bearer认证","link":"#bearer认证","children":[]}]}],"git":{"createdTime":1690708801000,"updatedTime":1690708801000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":8.15,"words":2444},"filePathRelative":"system-design/security/auth.md","localizedDate":"2022年9月18日","excerpt":"<h2> 认证</h2>\\n<blockquote>\\n<p>我们有多种途径来保障应用的安全，例如：网咯隔离、设置防火墙、设置IP黑名单等。而<strong>认证</strong>是软件层面保护应用安全的一种措施。</p>\\n<p>当前有四种认证方式，分别是：<code>Basic</code>、<code>Digest</code>、<code>OAuth</code>和<code>Bearer</code></p>\\n</blockquote>\\n<h3> Basic认证</h3>\\n<blockquote>\\n<p>Basic认证（基础认证）是一种简单的认证方式。将<code>用户名:密码</code>进行base64编码，放到HTTP Authorization Header中。</p>\\n<p>但是base64不是加密技术，入侵者可以通过截获base64字符串，并反编码获取用户名和密码；其次即便进行了加密了用户名和密码，入侵者可以通过加重放攻击。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
