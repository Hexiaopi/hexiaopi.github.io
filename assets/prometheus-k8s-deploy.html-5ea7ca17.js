import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-42f3c9f0.js";const i={},t=e(`<p>步骤一、创建数据存储</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /home/data/prometheus
<span class="token function">chmod</span> <span class="token number">777</span> /home/data/prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤二、创建serviceaccount和clusterrolebinding</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create serviceaccount monitor <span class="token parameter variable">-n</span> monitor
kubectl create clusterrolebinding monitor-clusterrolebinding <span class="token parameter variable">-n</span> monitor <span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>cluster-admin <span class="token parameter variable">--serviceaccount</span><span class="token operator">=</span>monitor:monitor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤三、创建Prometheus configmap用于存储抓取配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤四、创建Prometheus deployment，注意将存储卷挂载在机器磁盘上。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤五、创建Prometheus service用于访问</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function c(p,u){return s(),a("div",null,l)}const d=n(i,[["render",c],["__file","prometheus-k8s-deploy.html.vue"]]);export{d as default};
