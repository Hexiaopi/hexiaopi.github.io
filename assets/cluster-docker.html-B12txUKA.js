import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as e,b as a,o as i}from"./app-BxIvKJnO.js";const t={},l=a(`<h2 id="docker-compose文件" tabindex="-1"><a class="header-anchor" href="#docker-compose文件"><span>Docker-Compose文件</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token comment"># 公共操作</span>
<span class="token key atrule">x-minio-common</span><span class="token punctuation">:</span> <span class="token important">&amp;minio-common</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> minio/minio<span class="token punctuation">:</span>RELEASE.2023<span class="token punctuation">-</span>10<span class="token punctuation">-</span>24T04<span class="token punctuation">-</span>42<span class="token punctuation">-</span>36Z
  <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
  <span class="token key atrule">command</span><span class="token punctuation">:</span> server <span class="token punctuation">-</span><span class="token punctuation">-</span>console<span class="token punctuation">-</span>address &#39;<span class="token punctuation">:</span>9001&#39; <span class="token punctuation">-</span>address &quot;<span class="token punctuation">:</span>9000&quot; http<span class="token punctuation">:</span>//minio<span class="token punctuation">{</span>1<span class="token punctuation">...</span>2<span class="token punctuation">}</span>/data<span class="token punctuation">{</span>1<span class="token punctuation">...</span>2<span class="token punctuation">}</span>
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
    <span class="token key atrule">MINIO_ROOT_USER</span><span class="token punctuation">:</span> minioadmin
    <span class="token key atrule">MINIO_ROOT_PASSWORD</span><span class="token punctuation">:</span> minioadmin
  <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
    <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:9000/minio/health/live&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> 30s
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 20s
    <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">minio1</span><span class="token punctuation">:</span>
    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*minio-common</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> minio1
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> minio1
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./minio1/data1<span class="token punctuation">:</span>/data1
      <span class="token punctuation">-</span> ./minio1/data2<span class="token punctuation">:</span>/data2
      <span class="token punctuation">-</span> ./minio1/config<span class="token punctuation">:</span>/root/.minio/
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;19000:9000&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;19001:9001&quot;</span>

  <span class="token key atrule">minio2</span><span class="token punctuation">:</span>
    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*minio-common</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> minio2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> minio2
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./minio2/data1<span class="token punctuation">:</span>/data1
      <span class="token punctuation">-</span> ./minio2/data2<span class="token punctuation">:</span>/data2
      <span class="token punctuation">-</span> ./minio2/config<span class="token punctuation">:</span>/root/.minio/
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;19002:9000&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;19003:9001&quot;</span>

  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.19.2<span class="token punctuation">-</span>alpine
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./nginx/nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf<span class="token punctuation">:</span>ro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9000:9000&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9001:9001&quot;</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> minio1
      <span class="token punctuation">-</span> minio2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置"><span>Nginx配置</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections  4096;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;
    sendfile        on;
    keepalive_timeout  65;

    # include /etc/nginx/conf.d/*.conf;

    upstream minio {
        server minio1:9000;
        server minio2:9000;
    }

    upstream console {
        ip_hash;
        server minio1:9001;
        server minio2:9001;
    }

    server {
        listen       9000;
        listen  [::]:9000;
        server_name  localhost;

        # To allow special characters in headers
        ignore_invalid_headers off;
        # Allow any size file to be uploaded.
        # Set to a value such as 1000m; to restrict file size to a specific value
        client_max_body_size 0;
        # To disable buffering
        proxy_buffering off;
        proxy_request_buffering off;

        location / {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            proxy_connect_timeout 300;
            # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
            proxy_http_version 1.1;
            proxy_set_header Connection &quot;&quot;;
            chunked_transfer_encoding off;

            proxy_pass http://minio;
        }
    }

    server {
        listen       9001;
        listen  [::]:9001;
        server_name  localhost;

        # To allow special characters in headers
        ignore_invalid_headers off;
        # Allow any size file to be uploaded.
        # Set to a value such as 1000m; to restrict file size to a specific value
        client_max_body_size 0;
        # To disable buffering
        proxy_buffering off;
        proxy_request_buffering off;

        location / {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-NginX-Proxy true;

            # This is necessary to pass the correct IP to be hashed
            real_ip_header X-Real-IP;

            proxy_connect_timeout 300;
            
            # To support websocket
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection &quot;upgrade&quot;;
            
            chunked_transfer_encoding off;

            proxy_pass http://console;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function o(c,p){return i(),s("div",null,[e(" more "),l])}const u=n(t,[["render",o],["__file","cluster-docker.html.vue"]]),v=JSON.parse('{"path":"/database/minio/cluster-docker.html","title":"Docker搭建Minio集群","lang":"zh-CN","frontmatter":{"title":"Docker搭建Minio集群","date":"2024-12-03T00:00:00.000Z","tag":["Minio"],"category":["数据存储"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/database/minio/cluster-docker.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"Docker搭建Minio集群"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-03T08:58:00.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Minio"}],["meta",{"property":"article:published_time","content":"2024-12-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-03T08:58:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker搭建Minio集群\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-03T08:58:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"Docker-Compose文件","slug":"docker-compose文件","link":"#docker-compose文件","children":[]},{"level":2,"title":"Nginx配置","slug":"nginx配置","link":"#nginx配置","children":[]}],"git":{"createdTime":1733216280000,"updatedTime":1733216280000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":1.29,"words":387},"filePathRelative":"database/minio/cluster-docker.md","localizedDate":"2024年12月3日","excerpt":""}');export{u as comp,v as data};
