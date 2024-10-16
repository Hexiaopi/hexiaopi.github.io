import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,e,b as t,o as p}from"./app-B3c3qJUn.js";const o={},l=e("p",null,"cadvisor 是谷歌公司用来分析运行中的 Docker 容器的资源占用以及性能特性的工具，简单来说是用于监控 Docker 容器。",-1),c=t(`<h2 id="k8s部署" tabindex="-1"><a class="header-anchor" href="#k8s部署"><span>k8s部署</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cadvisor
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitor
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> cAdvisor
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> cAdvisor
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>    <span class="token comment">#污点容忍,忽略master的NoSchedule</span>
        <span class="token punctuation">-</span> <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule
          <span class="token key atrule">key</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>role.kubernetes.io/master
      <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Always
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cadvisor
        <span class="token key atrule">image</span><span class="token punctuation">:</span> google/cadvisor<span class="token punctuation">:</span>latest
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent 
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> root
            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /rootfs
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run
            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/run
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> sys
            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /sys
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> docker
            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/lib/containerd
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> root
        <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run
        <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /var/run
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> sys
        <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /sys
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> docker
        <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function i(u,r){return p(),s("div",null,[l,a(" more "),c])}const m=n(o,[["render",i],["__file","cadvisor-k8s-deploy.html.vue"]]),v=JSON.parse('{"path":"/devops/k8s/cadvisor-k8s-deploy.html","title":"cadvisor k8s 部署","lang":"zh-CN","frontmatter":{"title":"cadvisor k8s 部署","date":"2024-01-15T00:00:00.000Z","tag":["Prometheus","k8s"],"category":["devops"],"description":"cadvisor 是谷歌公司用来分析运行中的 Docker 容器的资源占用以及性能特性的工具，简单来说是用于监控 Docker 容器。","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/devops/k8s/cadvisor-k8s-deploy.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"cadvisor k8s 部署"}],["meta",{"property":"og:description","content":"cadvisor 是谷歌公司用来分析运行中的 Docker 容器的资源占用以及性能特性的工具，简单来说是用于监控 Docker 容器。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-27T02:59:10.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Prometheus"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2024-01-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-27T02:59:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cadvisor k8s 部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-27T02:59:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"k8s部署","slug":"k8s部署","link":"#k8s部署","children":[]}],"git":{"createdTime":1705322419000,"updatedTime":1724727550000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"devops/k8s/cadvisor-k8s-deploy.md","localizedDate":"2024年1月15日","excerpt":"<p>cadvisor 是谷歌公司用来分析运行中的 Docker 容器的资源占用以及性能特性的工具，简单来说是用于监控 Docker 容器。</p>\\n","autoDesc":true}');export{m as comp,v as data};
