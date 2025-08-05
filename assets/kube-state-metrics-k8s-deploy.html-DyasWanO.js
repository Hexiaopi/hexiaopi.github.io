import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,e,b as t,o as p}from"./app-BDzVy8tz.js";const i={},l=e("p",null,"kube-state-metrics用于监控k8s相关指标",-1),c=t(`<h2 id="k8s部署" tabindex="-1"><a class="header-anchor" href="#k8s部署"><span>k8s部署</span></a></h2><p>1、部署cluster-role</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> exporter
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.10.0
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> configmaps
  <span class="token punctuation">-</span> secrets
  <span class="token punctuation">-</span> nodes
  <span class="token punctuation">-</span> pods
  <span class="token punctuation">-</span> services
  <span class="token punctuation">-</span> serviceaccounts
  <span class="token punctuation">-</span> resourcequotas
  <span class="token punctuation">-</span> replicationcontrollers
  <span class="token punctuation">-</span> limitranges
  <span class="token punctuation">-</span> persistentvolumeclaims
  <span class="token punctuation">-</span> persistentvolumes
  <span class="token punctuation">-</span> namespaces
  <span class="token punctuation">-</span> endpoints
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> apps
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> statefulsets
  <span class="token punctuation">-</span> daemonsets
  <span class="token punctuation">-</span> deployments
  <span class="token punctuation">-</span> replicasets
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> batch
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> cronjobs
  <span class="token punctuation">-</span> jobs
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> autoscaling
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> horizontalpodautoscalers
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> authentication.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> tokenreviews
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> create
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> authorization.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> subjectaccessreviews
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> create
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> policy
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> poddisruptionbudgets
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> certificates.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> certificatesigningrequests
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> discovery.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> endpointslices
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> storage.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> storageclasses
  <span class="token punctuation">-</span> volumeattachments
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> admissionregistration.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> mutatingwebhookconfigurations
  <span class="token punctuation">-</span> validatingwebhookconfigurations
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> networking.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> networkpolicies
  <span class="token punctuation">-</span> ingressclasses
  <span class="token punctuation">-</span> ingresses
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> coordination.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> leases
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> rbac.authorization.k8s.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> clusterrolebindings
  <span class="token punctuation">-</span> clusterroles
  <span class="token punctuation">-</span> rolebindings
  <span class="token punctuation">-</span> roles
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、部署cluster-role-binding</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> exporter
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.10.0
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、部署deployment</p><p>👁️ 由于国外网络原因，注意需要修改镜像地址</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> exporter
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.10.0
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> exporter
        <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
        <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.10.0
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">automountServiceAccountToken</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token comment">#- image: registry.k8s.io/kube-state-metrics/kube-state-metrics:v2.10.0</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/bitnami/kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics<span class="token punctuation">:</span>latest
        <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /healthz
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
          <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>metrics
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8081</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> telemetry
        <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
          <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
          <span class="token key atrule">allowPrivilegeEscalation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token key atrule">capabilities</span><span class="token punctuation">:</span>
            <span class="token key atrule">drop</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> ALL
          <span class="token key atrule">readOnlyRootFilesystem</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">65534</span>
          <span class="token key atrule">seccompProfile</span><span class="token punctuation">:</span>
            <span class="token key atrule">type</span><span class="token punctuation">:</span> RuntimeDefault
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">kubernetes.io/os</span><span class="token punctuation">:</span> linux
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、部署service</p><p>注意，需要设置annotation，让Prometheus自动发现</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> exporter
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.10.0
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">prometheus.io/scrape</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>metrics
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>metrics
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> telemetry
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> telemetry
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、部署service-account</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">automountServiceAccountToken</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> exporter
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.10.0
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>state<span class="token punctuation">-</span>metrics
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function u(o,r){return p(),s("div",null,[l,a(" more "),c])}const v=n(i,[["render",u],["__file","kube-state-metrics-k8s-deploy.html.vue"]]),m=JSON.parse('{"path":"/devops/k8s/kube-state-metrics-k8s-deploy.html","title":"kube-state-metrics k8s 部署","lang":"zh-CN","frontmatter":{"title":"kube-state-metrics k8s 部署","date":"2024-01-15T00:00:00.000Z","tag":["Prometheus","k8s"],"category":["devops"],"description":"kube-state-metrics用于监控k8s相关指标","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/devops/k8s/kube-state-metrics-k8s-deploy.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"kube-state-metrics k8s 部署"}],["meta",{"property":"og:description","content":"kube-state-metrics用于监控k8s相关指标"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T15:41:25.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Prometheus"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2024-01-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T15:41:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kube-state-metrics k8s 部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-15T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T15:41:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"k8s部署","slug":"k8s部署","link":"#k8s部署","children":[]}],"git":{"createdTime":1705329160000,"updatedTime":1740670885000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":2},{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":1.5,"words":451},"filePathRelative":"devops/k8s/kube-state-metrics-k8s-deploy.md","localizedDate":"2024年1月15日","excerpt":"<p>kube-state-metrics用于监控k8s相关指标</p>\\n","autoDesc":true}');export{v as comp,m as data};
