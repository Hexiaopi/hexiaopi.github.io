import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,f as a,a as t,e as i}from"./app-D1l5B5F7.js";const l={},p=t("p",null,"Prometheus是个优秀的监控系统，基于时序数据库，这里记录k8s部署",-1),c=i(`<h2 id="k8s部署" tabindex="-1"><a class="header-anchor" href="#k8s部署"><span>k8s部署</span></a></h2><p>步骤一、创建数据存储</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /home/data/prometheus
<span class="token function">chmod</span> <span class="token number">777</span> /home/data/prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤二、创建serviceaccount和clusterrolebinding</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create serviceaccount monitor <span class="token parameter variable">-n</span> monitor
kubectl create clusterrolebinding monitor-clusterrolebinding <span class="token parameter variable">-n</span> monitor <span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>cluster-admin <span class="token parameter variable">--serviceaccount</span><span class="token operator">=</span>monitor:monitor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤三、创建Prometheus configmap用于存储抓取配置</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitor 
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">prometheus.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    global:
      scrape_interval: 15s
      scrape_timeout: 10s
      evaluation_interval: 1m
    scrape_configs:
    - job_name: &#39;kubernetes-node&#39;
      kubernetes_sd_configs:
      - role: node
      relabel_configs:
      - source_labels: [__address__]
        regex: &#39;(.*):10250&#39;
        replacement: &#39;\${1}:9100&#39;
        target_label: __address__
        action: replace
      - action: labelmap
        regex: __meta_kubernetes_node_label_(.+)
    - job_name: &#39;kubernetes-node-cadvisor&#39;
      kubernetes_sd_configs:
      - role:  node
      scheme: https
      tls_config:
        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
      relabel_configs:
      - action: labelmap
        regex: __meta_kubernetes_node_label_(.+)
      - target_label: __address__
        replacement: kubernetes.default.svc:443
      - source_labels: [__meta_kubernetes_node_name]
        regex: (.+)
        target_label: __metrics_path__
        replacement: /api/v1/nodes/\${1}/proxy/metrics/cadvisor
    - job_name: &#39;kubernetes-apiserver&#39;
      kubernetes_sd_configs:
      - role: endpoints
      scheme: https
      tls_config:
        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
      relabel_configs:
      - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
        action: keep
        regex: default;kubernetes;https
    - job_name: &#39;kubernetes-service-endpoints&#39;
      kubernetes_sd_configs:
      - role: endpoints
      relabel_configs:
      - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scheme]
        action: replace
        target_label: __scheme__
        regex: (https?)
      - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
      - source_labels: [__address__, __meta_kubernetes_service_annotation_prometheus_io_port]
        action: replace
        target_label: __address__
        regex: ([^:]+)(?::\\d+)?;(\\d+)
        replacement: $1:$2
      - action: labelmap
        regex: __meta_kubernetes_service_label_(.+)
      - source_labels: [__meta_kubernetes_namespace]
        action: replace
        target_label: kubernetes_namespace
      - source_labels: [__meta_kubernetes_service_name]
        action: replace
        target_label: kubernetes_service_name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤四、创建Prometheus deployment，注意将存储卷挂载在机器磁盘上。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>server
  namespace<span class="token punctuation">:</span> monitor
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> prometheus
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  replicas<span class="token punctuation">:</span> <span class="token number">1</span>
  selector<span class="token punctuation">:</span>
    matchLabels<span class="token punctuation">:</span>
      app<span class="token punctuation">:</span> prometheus
      component<span class="token punctuation">:</span> server
    <span class="token comment">#matchExpressions:</span>
    <span class="token comment">#- {key: app, operator: In, values: [prometheus]}</span>
    <span class="token comment">#- {key: component, operator: In, values: [server]}</span>
  template<span class="token punctuation">:</span>
    metadata<span class="token punctuation">:</span>
      labels<span class="token punctuation">:</span>
        app<span class="token punctuation">:</span> prometheus
        component<span class="token punctuation">:</span> server
      annotations<span class="token punctuation">:</span>
        prometheus.io/scrape<span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
        prometheus.io/port<span class="token punctuation">:</span> <span class="token string">&#39;9090&#39;</span>
    spec<span class="token punctuation">:</span>
      nodeName<span class="token punctuation">:</span> 172<span class="token punctuation">-</span>87<span class="token punctuation">-</span>7<span class="token punctuation">-</span><span class="token number">246</span>
      serviceAccountName<span class="token punctuation">:</span> prometheus
      containers<span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus
        image<span class="token punctuation">:</span> prom/prometheus<span class="token punctuation">:</span>v2.47.2
        imagePullPolicy<span class="token punctuation">:</span> Always
        command<span class="token punctuation">:</span>
          <span class="token punctuation">-</span> prometheus
          <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>config.file=/etc/prometheus/prometheus.yml
          <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>storage.tsdb.path=/prometheus
          <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>storage.tsdb.retention=720h
        ports<span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9090</span>
          protocol<span class="token punctuation">:</span> TCP
        volumeMounts<span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/prometheus/prometheus.yml
          name<span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
          subPath<span class="token punctuation">:</span> prometheus.yml
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /prometheus/
          name<span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>storage<span class="token punctuation">-</span>volume
      volumes<span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
          configMap<span class="token punctuation">:</span>
            name<span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>config
            items<span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> prometheus.yml
                path<span class="token punctuation">:</span> prometheus.yml
                mode<span class="token punctuation">:</span> <span class="token number">0644</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>storage<span class="token punctuation">-</span>volume
          hostPath<span class="token punctuation">:</span>
            path<span class="token punctuation">:</span> /home/data/prometheus
            type<span class="token punctuation">:</span> Directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤五、创建Prometheus service用于访问</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> prometheus
  namespace<span class="token punctuation">:</span> monitor
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> prometheus
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  type<span class="token punctuation">:</span> NodePort
  ports<span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9090</span>
      targetPort<span class="token punctuation">:</span> <span class="token number">9090</span>
      protocol<span class="token punctuation">:</span> TCP
      nodePort<span class="token punctuation">:</span> <span class="token number">39090</span>
  selector<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> prometheus
    component<span class="token punctuation">:</span> server

步骤六、创建Prometheus rbac访问权限

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> prometheus
  namespace<span class="token punctuation">:</span> monitor



<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">type</span><span class="token punctuation">:</span> kubernetes.io/service<span class="token punctuation">-</span>account<span class="token punctuation">-</span>token
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> monitor<span class="token punctuation">-</span>token
  namespace<span class="token punctuation">:</span> monitor
  annotations<span class="token punctuation">:</span>
    kubernetes.io/service<span class="token punctuation">-</span><span class="token key atrule">account.name</span><span class="token punctuation">:</span> <span class="token string">&quot;prometheus&quot;</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> prometheus
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  resources<span class="token punctuation">:</span>
  <span class="token punctuation">-</span> nodes
  <span class="token punctuation">-</span> services
  <span class="token punctuation">-</span> endpoints
  <span class="token punctuation">-</span> pods
  <span class="token punctuation">-</span> nodes/proxy
  verbs<span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;extensions&quot;</span>
  resources<span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ingresses
  verbs<span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  resources<span class="token punctuation">:</span>
  <span class="token punctuation">-</span> configmaps
  <span class="token punctuation">-</span> nodes/metrics
  verbs<span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
<span class="token punctuation">-</span> <span class="token key atrule">nonResourceURLs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> /metrics
  verbs<span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> prometheus
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  apiGroup<span class="token punctuation">:</span> rbac.authorization.k8s.io
  kind<span class="token punctuation">:</span> ClusterRole
  name<span class="token punctuation">:</span> prometheus
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  name<span class="token punctuation">:</span> prometheus
  namespace<span class="token punctuation">:</span> monitor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function u(o,r){return s(),e("div",null,[p,a(" more "),c])}const m=n(l,[["render",u],["__file","prometheus-k8s-deploy.html.vue"]]),k=JSON.parse('{"path":"/devops/k8s/prometheus-k8s-deploy.html","title":"Prometheus k8s 部署","lang":"zh-CN","frontmatter":{"title":"Prometheus k8s 部署","date":"2024-01-15T00:00:00.000Z","tag":["prometheus","k8s"],"category":["devops"],"description":"Prometheus是个优秀的监控系统，基于时序数据库，这里记录k8s部署","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/devops/k8s/prometheus-k8s-deploy.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"Prometheus k8s 部署"}],["meta",{"property":"og:description","content":"Prometheus是个优秀的监控系统，基于时序数据库，这里记录k8s部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T08:34:44.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"prometheus"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2024-01-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T08:34:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Prometheus k8s 部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T08:34:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"k8s部署","slug":"k8s部署","link":"#k8s部署","children":[]}],"git":{"createdTime":1705321625000,"updatedTime":1710750884000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":1.8,"words":540},"filePathRelative":"devops/k8s/prometheus-k8s-deploy.md","localizedDate":"2024年1月15日","excerpt":"<p>Prometheus是个优秀的监控系统，基于时序数据库，这里记录k8s部署</p>\\n","autoDesc":true}');export{m as comp,k as data};
