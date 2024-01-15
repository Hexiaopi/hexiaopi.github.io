import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-95ff9c18.js";const t={},p=e(`<p>cadvisor 是谷歌公司用来分析运行中的 Docker 容器的资源占用以及性能特性的工具，简单来说是用于监控 Docker 容器。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function c(o,i){return s(),a("div",null,l)}const r=n(t,[["render",c],["__file","cadvisor-k8s-deploy.html.vue"]]);export{r as default};
