import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as o,e as n}from"./app-Di6bIXoh.js";const t="/assets/mongodb-dashboard-D4ExXDMz.png",r={},s=n(`<h2 id="mongodb监控" tabindex="-1"><a class="header-anchor" href="#mongodb监控"><span>MongoDB监控</span></a></h2><p>我们通过mongodb-exporter监控mongodb状态</p><h2 id="mongodb-exporter部署" tabindex="-1"><a class="header-anchor" href="#mongodb-exporter部署"><span>mongodb-exporter部署</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9216</span>:9216 <span class="token parameter variable">-p</span> <span class="token number">17001</span>:17001 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span><span class="token operator">=</span>mongodb_exporter percona/mongodb_exporter:0.40 <span class="token parameter variable">--mongodb.uri</span><span class="token operator">=</span>mongodb://172.87.7.247:27017/admin?ssl<span class="token operator">=</span>false --collect-all --compatible-mode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p><ul><li>--collect-all，参数用于收集所有指标</li><li>--compatible-mode，用于兼容旧的指标，否则部分grafana的dashboard展示不兼容</li></ul><h2 id="mongodb-dashboard" tabindex="-1"><a class="header-anchor" href="#mongodb-dashboard"><span>mongodb-dashboard</span></a></h2><figure><img src="`+t+`" alt="mongodb-dashboard" tabindex="0" loading="lazy"><figcaption>mongodb-dashboard</figcaption></figure><h2 id="mongodb常用监控语句" tabindex="-1"><a class="header-anchor" href="#mongodb常用监控语句"><span>mongodb常用监控语句</span></a></h2><h3 id="监控数据库是否宕机" tabindex="-1"><a class="header-anchor" href="#监控数据库是否宕机"><span>监控数据库是否宕机</span></a></h3><div class="language-promQL line-numbers-mode" data-ext="promQL" data-title="promQL"><pre class="language-promQL"><code>mongodb_up == 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),p=[s];function d(l,i){return a(),o("div",null,p)}const b=e(r,[["render",d],["__file","mongodb-exporter.html.vue"]]),g=JSON.parse('{"path":"/devops/docker/mongodb-exporter.html","title":"MongoDB监控","lang":"zh-CN","frontmatter":{"title":"MongoDB监控","date":"2024-04-16T00:00:00.000Z","tag":["mongodb","监控"],"category":["devops"],"description":"MongoDB监控 我们通过mongodb-exporter监控mongodb状态 mongodb-exporter部署 注意： --collect-all，参数用于收集所有指标 --compatible-mode，用于兼容旧的指标，否则部分grafana的dashboard展示不兼容 mongodb-dashboard mongodb-dashboa...","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/devops/docker/mongodb-exporter.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"MongoDB监控"}],["meta",{"property":"og:description","content":"MongoDB监控 我们通过mongodb-exporter监控mongodb状态 mongodb-exporter部署 注意： --collect-all，参数用于收集所有指标 --compatible-mode，用于兼容旧的指标，否则部分grafana的dashboard展示不兼容 mongodb-dashboard mongodb-dashboa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-16T03:31:43.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"mongodb"}],["meta",{"property":"article:tag","content":"监控"}],["meta",{"property":"article:published_time","content":"2024-04-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-16T03:31:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MongoDB监控\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-16T03:31:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"MongoDB监控","slug":"mongodb监控","link":"#mongodb监控","children":[]},{"level":2,"title":"mongodb-exporter部署","slug":"mongodb-exporter部署","link":"#mongodb-exporter部署","children":[]},{"level":2,"title":"mongodb-dashboard","slug":"mongodb-dashboard","link":"#mongodb-dashboard","children":[]},{"level":2,"title":"mongodb常用监控语句","slug":"mongodb常用监控语句","link":"#mongodb常用监控语句","children":[{"level":3,"title":"监控数据库是否宕机","slug":"监控数据库是否宕机","link":"#监控数据库是否宕机","children":[]}]}],"git":{"createdTime":1713238303000,"updatedTime":1713238303000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":0.4,"words":119},"filePathRelative":"devops/docker/mongodb-exporter.md","localizedDate":"2024年4月16日","excerpt":"<h2>MongoDB监控</h2>\\n<p>我们通过mongodb-exporter监控mongodb状态</p>\\n<h2>mongodb-exporter部署</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> run <span class=\\"token parameter variable\\">-d</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token number\\">9216</span>:9216 <span class=\\"token parameter variable\\">-p</span> <span class=\\"token number\\">17001</span>:17001 <span class=\\"token parameter variable\\">--restart</span><span class=\\"token operator\\">=</span>always <span class=\\"token parameter variable\\">--name</span><span class=\\"token operator\\">=</span>mongodb_exporter percona/mongodb_exporter:0.40 <span class=\\"token parameter variable\\">--mongodb.uri</span><span class=\\"token operator\\">=</span>mongodb://172.87.7.247:27017/admin?ssl<span class=\\"token operator\\">=</span>false --collect-all --compatible-mode\\n</code></pre></div>","autoDesc":true}');export{b as comp,g as data};
