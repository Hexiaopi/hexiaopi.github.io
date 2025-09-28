import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a,b as e,o as l}from"./app-BH_usOR1.js";const p={};function t(d,s){return l(),i("div",null,[a(" more "),s[0]||(s[0]=e(`<h2 id="docker-compose文件" tabindex="-1"><a class="header-anchor" href="#docker-compose文件"><span>Docker-Compose文件</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 公共操作</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">x-minio-common</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">minio-common</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minio/minio:RELEASE.2023-10-24T04-42-36Z</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">server --console-address &#39;:9001&#39; -address &quot;:9000&quot; http://minio{1...2}/data{1...2}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    MINIO_ROOT_USER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minioadmin</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    MINIO_ROOT_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minioadmin</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  healthcheck</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;CMD&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;curl&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;-f&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://localhost:9000/minio/health/live&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">30s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">20s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    retries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  minio1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">minio-common</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minio1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minio1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./minio1/data1:/data1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./minio1/data2:/data2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./minio1/config:/root/.minio/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;19000:9000&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;19001:9001&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  minio2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">minio-common</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minio2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minio2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./minio2/data1:/data1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./minio2/data2:/data2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./minio2/config:/root/.minio/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;19002:9000&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;19003:9001&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  nginx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx:1.19.2-alpine</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./nginx/nginx.conf:/etc/nginx/nginx.conf:ro</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;9000:9000&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;9001:9001&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    depends_on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minio1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">minio2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置"><span>Nginx配置</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>user  nginx;</span></span>
<span class="line"><span>worker_processes  auto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error_log  /var/log/nginx/error.log warn;</span></span>
<span class="line"><span>pid        /var/run/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  4096;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    upstream minio {</span></span>
<span class="line"><span>        server minio1:9000;</span></span>
<span class="line"><span>        server minio2:9000;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    upstream console {</span></span>
<span class="line"><span>        ip_hash;</span></span>
<span class="line"><span>        server minio1:9001;</span></span>
<span class="line"><span>        server minio2:9001;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       9000;</span></span>
<span class="line"><span>        listen  [::]:9000;</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # To allow special characters in headers</span></span>
<span class="line"><span>        ignore_invalid_headers off;</span></span>
<span class="line"><span>        # Allow any size file to be uploaded.</span></span>
<span class="line"><span>        # Set to a value such as 1000m; to restrict file size to a specific value</span></span>
<span class="line"><span>        client_max_body_size 0;</span></span>
<span class="line"><span>        # To disable buffering</span></span>
<span class="line"><span>        proxy_buffering off;</span></span>
<span class="line"><span>        proxy_request_buffering off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_set_header Host $http_host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            proxy_connect_timeout 300;</span></span>
<span class="line"><span>            # Default is HTTP/1, keepalive is only enabled in HTTP/1.1</span></span>
<span class="line"><span>            proxy_http_version 1.1;</span></span>
<span class="line"><span>            proxy_set_header Connection &quot;&quot;;</span></span>
<span class="line"><span>            chunked_transfer_encoding off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            proxy_pass http://minio;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       9001;</span></span>
<span class="line"><span>        listen  [::]:9001;</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # To allow special characters in headers</span></span>
<span class="line"><span>        ignore_invalid_headers off;</span></span>
<span class="line"><span>        # Allow any size file to be uploaded.</span></span>
<span class="line"><span>        # Set to a value such as 1000m; to restrict file size to a specific value</span></span>
<span class="line"><span>        client_max_body_size 0;</span></span>
<span class="line"><span>        # To disable buffering</span></span>
<span class="line"><span>        proxy_buffering off;</span></span>
<span class="line"><span>        proxy_request_buffering off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_set_header Host $http_host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>            proxy_set_header X-NginX-Proxy true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # This is necessary to pass the correct IP to be hashed</span></span>
<span class="line"><span>            real_ip_header X-Real-IP;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            proxy_connect_timeout 300;</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            # To support websocket</span></span>
<span class="line"><span>            proxy_http_version 1.1;</span></span>
<span class="line"><span>            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>            proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            chunked_transfer_encoding off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            proxy_pass http://console;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const c=n(p,[["render",t]]),k=JSON.parse('{"path":"/database/minio/cluster-docker.html","title":"Docker搭建Minio集群","lang":"zh-CN","frontmatter":{"title":"Docker搭建Minio集群","date":"2024-12-03T00:00:00.000Z","tag":["Minio"],"category":["数据存储"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker搭建Minio集群\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-03T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T15:41:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"],["meta",{"property":"og:url","content":"http://blog.cjhe.top/database/minio/cluster-docker.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"Docker搭建Minio集群"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T15:41:25.000Z"}],["meta",{"property":"article:tag","content":"Minio"}],["meta",{"property":"article:published_time","content":"2024-12-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T15:41:25.000Z"}]]},"git":{"createdTime":1733216280000,"updatedTime":1740670885000,"contributors":[{"name":"HeXiaoPi","username":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1,"url":"https://github.com/HeXiaoPi"},{"name":"hexiaopi","username":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1,"url":"https://github.com/hexiaopi"}]},"readingTime":{"minutes":1.29,"words":387},"filePathRelative":"database/minio/cluster-docker.md","excerpt":""}');export{c as comp,k as data};
