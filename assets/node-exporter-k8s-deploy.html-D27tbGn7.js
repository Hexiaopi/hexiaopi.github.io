import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,e,b as t,o as p}from"./app-CUI5pmZ1.js";const o={},l=e("p",null,"node-exporter用于暴露各个节点的指标，由于需要每个节点都部署node-exporter，因此kind选择DaemonSet，它会保障每个节点有一个相同的实例。",-1),c=t(`<h2 id="k8s部署" tabindex="-1"><a class="header-anchor" href="#k8s部署"><span>k8s部署</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitor
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
        <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule
          <span class="token key atrule">key</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>role.kubernetes.io/master
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/node<span class="token punctuation">-</span>exporter<span class="token punctuation">:</span>latest
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>node<span class="token punctuation">-</span>exporter
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9100</span>
          <span class="token key atrule">hostPort</span><span class="token punctuation">:</span> <span class="token number">9100</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
          <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /host/proc
          <span class="token key atrule">name</span><span class="token punctuation">:</span> proc
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /host/sys
          <span class="token key atrule">name</span><span class="token punctuation">:</span> sys
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /host
          <span class="token key atrule">name</span><span class="token punctuation">:</span> rootfs
        <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>path.procfs=/host/proc
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>path.sysfs=/host/sys
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>path.rootfs=/host
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> proc
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /proc
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> sys
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /sys
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> rootfs
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /
      <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">hostPID</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitor
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9100</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">39100</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function i(u,r){return p(),s("div",null,[l,a(" more "),c])}const m=n(o,[["render",i],["__file","node-exporter-k8s-deploy.html.vue"]]),v=JSON.parse('{"path":"/devops/k8s/node-exporter-k8s-deploy.html","title":"node-exporter k8s 部署","lang":"zh-CN","frontmatter":{"title":"node-exporter k8s 部署","date":"2024-01-15T00:00:00.000Z","tag":["prometheus","k8s"],"category":["devops"],"description":"node-exporter用于暴露各个节点的指标，由于需要每个节点都部署node-exporter，因此kind选择DaemonSet，它会保障每个节点有一个相同的实例。","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/devops/k8s/node-exporter-k8s-deploy.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"node-exporter k8s 部署"}],["meta",{"property":"og:description","content":"node-exporter用于暴露各个节点的指标，由于需要每个节点都部署node-exporter，因此kind选择DaemonSet，它会保障每个节点有一个相同的实例。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T08:34:44.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"prometheus"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2024-01-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T08:34:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"node-exporter k8s 部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T08:34:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"k8s部署","slug":"k8s部署","link":"#k8s部署","children":[]}],"git":{"createdTime":1705321948000,"updatedTime":1710750884000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":0.66,"words":199},"filePathRelative":"devops/k8s/node-exporter-k8s-deploy.md","localizedDate":"2024年1月15日","excerpt":"<p>node-exporter用于暴露各个节点的指标，由于需要每个节点都部署node-exporter，因此kind选择DaemonSet，它会保障每个节点有一个相同的实例。</p>\\n","autoDesc":true}');export{m as comp,v as data};
