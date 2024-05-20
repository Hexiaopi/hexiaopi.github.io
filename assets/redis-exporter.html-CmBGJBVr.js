import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as r,b as s,o as t}from"./app-B_0Akbk3.js";const i="/assets/redis-dashboard-hOTkfx2f.png",d={},n=s(`<h2 id="redis监控" tabindex="-1"><a class="header-anchor" href="#redis监控"><span>Redis监控</span></a></h2><p>我们通过redis-exporter监控redis状态</p><h2 id="redis-exporter部署" tabindex="-1"><a class="header-anchor" href="#redis-exporter部署"><span>redis-exporter部署</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis_exporter <span class="token parameter variable">--restart</span> always <span class="token parameter variable">-p</span> <span class="token number">9121</span>:9121 oliver006/redis_exporter <span class="token parameter variable">--redis.addr</span> redis://172.87.7.247:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="redis-dashboard" tabindex="-1"><a class="header-anchor" href="#redis-dashboard"><span>redis-dashboard</span></a></h2><figure><img src="`+i+`" alt="redis-dashboard" tabindex="0" loading="lazy"><figcaption>redis-dashboard</figcaption></figure><h2 id="redis常见监控语句" tabindex="-1"><a class="header-anchor" href="#redis常见监控语句"><span>redis常见监控语句</span></a></h2><h3 id="监控redis是否宕机" tabindex="-1"><a class="header-anchor" href="#监控redis是否宕机"><span>监控Redis是否宕机</span></a></h3><div class="language-promQL line-numbers-mode" data-ext="promQL" data-title="promQL"><pre class="language-promQL"><code>redis_up == 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="redis连接数过多" tabindex="-1"><a class="header-anchor" href="#redis连接数过多"><span>Redis连接数过多</span></a></h3><div class="language-promQL line-numbers-mode" data-ext="promQL" data-title="promQL"><pre class="language-promQL"><code>redis_connected_clients / redis_config_maxclients * 100 &gt; 90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function o(l,p){return t(),a("div",null,[r(" more "),n])}const m=e(d,[["render",o],["__file","redis-exporter.html.vue"]]),u=JSON.parse('{"path":"/database/redis/redis-exporter.html","title":"Redis监控","lang":"zh-CN","frontmatter":{"title":"Redis监控","date":"2024-04-12T00:00:00.000Z","tag":["Redis","监控"],"category":["数据存储"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/database/redis/redis-exporter.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"Redis监控"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T03:37:50.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"监控"}],["meta",{"property":"article:published_time","content":"2024-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T03:37:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis监控\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-20T03:37:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"Redis监控","slug":"redis监控","link":"#redis监控","children":[]},{"level":2,"title":"redis-exporter部署","slug":"redis-exporter部署","link":"#redis-exporter部署","children":[]},{"level":2,"title":"redis-dashboard","slug":"redis-dashboard","link":"#redis-dashboard","children":[]},{"level":2,"title":"redis常见监控语句","slug":"redis常见监控语句","link":"#redis常见监控语句","children":[{"level":3,"title":"监控Redis是否宕机","slug":"监控redis是否宕机","link":"#监控redis是否宕机","children":[]},{"level":3,"title":"Redis连接数过多","slug":"redis连接数过多","link":"#redis连接数过多","children":[]}]}],"git":{"createdTime":1712913143000,"updatedTime":1716176270000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":0.29,"words":87},"filePathRelative":"database/redis/redis-exporter.md","localizedDate":"2024年4月12日","excerpt":""}');export{m as comp,u as data};
