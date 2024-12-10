import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,b as e,o as t}from"./app-DPPO-ZvU.js";const p={},o=e(`<h2 id="docker-compose文件" tabindex="-1"><a class="header-anchor" href="#docker-compose文件"><span>Docker-Compose文件</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">pg-0</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> bitnami/postgresql<span class="token punctuation">-</span>repmgr<span class="token punctuation">:</span><span class="token number">14</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5433<span class="token punctuation">:</span><span class="token number">5432</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./pg_0_data<span class="token punctuation">:</span>/bitnami/postgresql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> POSTGRESQL_POSTGRES_PASSWORD=adminpassword
      <span class="token punctuation">-</span> POSTGRESQL_USERNAME=customuser
      <span class="token punctuation">-</span> POSTGRESQL_PASSWORD=custompassword
      <span class="token punctuation">-</span> POSTGRESQL_DATABASE=customdatabase
      <span class="token punctuation">-</span> REPMGR_PASSWORD=repmgrpassword
      <span class="token punctuation">-</span> REPMGR_PRIMARY_HOST=pg<span class="token punctuation">-</span><span class="token number">0</span>
      <span class="token punctuation">-</span> REPMGR_PARTNER_NODES=pg<span class="token punctuation">-</span><span class="token number">0</span><span class="token punctuation">,</span>pg<span class="token punctuation">-</span><span class="token number">1</span>
      <span class="token punctuation">-</span> REPMGR_NODE_NAME=pg<span class="token punctuation">-</span><span class="token number">0</span>
      <span class="token punctuation">-</span> REPMGR_NODE_NETWORK_NAME=pg<span class="token punctuation">-</span><span class="token number">0</span>

  <span class="token key atrule">pg-1</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> bitnami/postgresql<span class="token punctuation">-</span>repmgr<span class="token punctuation">:</span><span class="token number">14</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5434<span class="token punctuation">:</span><span class="token number">5432</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./pg_1_data<span class="token punctuation">:</span>/bitnami/postgresql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> POSTGRESQL_POSTGRES_PASSWORD=adminpassword
      <span class="token punctuation">-</span> POSTGRESQL_USERNAME=customuser
      <span class="token punctuation">-</span> POSTGRESQL_PASSWORD=custompassword
      <span class="token punctuation">-</span> POSTGRESQL_DATABASE=customdatabase
      <span class="token punctuation">-</span> REPMGR_PASSWORD=repmgrpassword
      <span class="token punctuation">-</span> REPMGR_PRIMARY_HOST=pg<span class="token punctuation">-</span><span class="token number">0</span>
      <span class="token punctuation">-</span> REPMGR_PARTNER_NODES=pg<span class="token punctuation">-</span><span class="token number">0</span><span class="token punctuation">,</span>pg<span class="token punctuation">-</span><span class="token number">1</span>
      <span class="token punctuation">-</span> REPMGR_NODE_NAME=pg<span class="token punctuation">-</span><span class="token number">1</span>
      <span class="token punctuation">-</span> REPMGR_NODE_NETWORK_NAME=pg<span class="token punctuation">-</span><span class="token number">1</span>

  <span class="token key atrule">pgpool</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> bitnami/pgpool<span class="token punctuation">:</span>4.5.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5432<span class="token punctuation">:</span><span class="token number">5432</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> PGPOOL_BACKEND_NODES=0<span class="token punctuation">:</span>pg<span class="token punctuation">-</span>0<span class="token punctuation">:</span><span class="token number">5432</span><span class="token punctuation">,</span>1<span class="token punctuation">:</span>pg<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">5432</span>
      <span class="token punctuation">-</span> PGPOOL_SR_CHECK_USER=customuser
      <span class="token punctuation">-</span> PGPOOL_SR_CHECK_PASSWORD=custompassword
      <span class="token punctuation">-</span> PGPOOL_ENABLE_LDAP=no
      <span class="token punctuation">-</span> PGPOOL_POSTGRES_USERNAME=postgres
      <span class="token punctuation">-</span> PGPOOL_POSTGRES_PASSWORD=adminpassword
      <span class="token punctuation">-</span> PGPOOL_ADMIN_USERNAME=admin
      <span class="token punctuation">-</span> PGPOOL_ADMIN_PASSWORD=adminpassword
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/opt/bitnami/scripts/pgpool/healthcheck.sh&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function c(i,l){return t(),s("div",null,[a(" more "),o])}const d=n(p,[["render",c],["__file","cluster-docker.html.vue"]]),k=JSON.parse('{"path":"/database/postgresql/cluster-docker.html","title":"Docker搭建PostgreSQL集群","lang":"zh-CN","frontmatter":{"title":"Docker搭建PostgreSQL集群","date":"2024-12-03T00:00:00.000Z","tag":["PostgreSQL"],"category":["数据存储"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/database/postgresql/cluster-docker.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"Docker搭建PostgreSQL集群"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-03T08:58:00.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"PostgreSQL"}],["meta",{"property":"article:published_time","content":"2024-12-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-03T08:58:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker搭建PostgreSQL集群\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-03T08:58:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"Docker-Compose文件","slug":"docker-compose文件","link":"#docker-compose文件","children":[]}],"git":{"createdTime":1733192935000,"updatedTime":1733216280000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"database/postgresql/cluster-docker.md","localizedDate":"2024年12月3日","excerpt":""}');export{d as comp,k as data};
