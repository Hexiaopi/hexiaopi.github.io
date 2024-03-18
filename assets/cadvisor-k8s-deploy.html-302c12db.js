import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e,a as t,e as p}from"./app-945c1308.js";const l={},c=t("p",null,"cadvisor 是谷歌公司用来分析运行中的 Docker 容器的资源占用以及性能特性的工具，简单来说是用于监控 Docker 容器。",-1),o=p(`<h2 id="k8s部署" tabindex="-1"><a class="header-anchor" href="#k8s部署" aria-hidden="true">#</a> k8s部署</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function i(u,k){return s(),a("div",null,[c,e(" more "),o])}const v=n(l,[["render",i],["__file","cadvisor-k8s-deploy.html.vue"]]);export{v as default};
