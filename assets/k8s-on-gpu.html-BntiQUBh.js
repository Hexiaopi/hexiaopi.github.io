import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as n,b as a,o as s}from"./app-W4hHVE41.js";const l="/assets/k8s-gpu-BhXFlt_0.png",d={},t=a(`<h1 id="gpu机器搭建k8s" tabindex="-1"><a class="header-anchor" href="#gpu机器搭建k8s"><span>gpu机器搭建k8s</span></a></h1><h2 id="查看gpu" tabindex="-1"><a class="header-anchor" href="#查看gpu"><span>查看GPU</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(base) root@ubuntu:~# lspci | grep -i nvidia
01:00.0 VGA compatible controller: NVIDIA Corporation Device 2230 (rev a1)
01:00.1 Audio device: NVIDIA Corporation Device 1aef (rev a1)
22:00.0 VGA compatible controller: NVIDIA Corporation Device 2230 (rev a1)
22:00.1 Audio device: NVIDIA Corporation Device 1aef (rev a1)
41:00.0 VGA compatible controller: NVIDIA Corporation Device 2230 (rev a1)
41:00.1 Audio device: NVIDIA Corporation Device 1aef (rev a1)
61:00.0 VGA compatible controller: NVIDIA Corporation Device 2230 (rev a1)
61:00.1 Audio device: NVIDIA Corporation Device 1aef (rev a1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到有四张nvidia显卡和nvidia声卡</p><h2 id="查看是否已安装gpu-nvidia驱动" tabindex="-1"><a class="header-anchor" href="#查看是否已安装gpu-nvidia驱动"><span>查看是否已安装gpu nvidia驱动</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(base) root@ubuntu:~# lsmod | grep  -i nvidia
nvidia_uvm           1216512  16

             61440  0
nvidia_modeset       1241088  1 nvidia_drm
nvidia              56471552  1128 nvidia_uvm,nvidia_modeset
drm_kms_helper        184320  4 ast,nvidia_drm
drm                   495616  7 drm_kms_helper,drm_vram_helper,ast,nvidia,nvidia_drm,ttm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时已安装nvidia驱动</p><p>如果未安装：参考<a href="https://docs.nvidia.com/cuda/cuda-installation-guide-linux/" target="_blank" rel="noopener noreferrer">链接</a>进行安装</p><h2 id="查看gpu型号、gpu驱动版本" tabindex="-1"><a class="header-anchor" href="#查看gpu型号、gpu驱动版本"><span>查看gpu型号、gpu驱动版本</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(base) root@ubuntu:~# nvidia-smi
Wed May 29 03:28:30 2024
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 525.116.04   Driver Version: 525.116.04   CUDA Version: 12.0     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA RTX A6000    Off  | 00000000:01:00.0 Off |                  Off |
| 30%   29C    P8    12W / 300W |   8142MiB / 49140MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
|   1  NVIDIA RTX A6000    Off  | 00000000:22:00.0 Off |                  Off |
| 30%   27C    P8     9W / 300W |  27682MiB / 49140MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
|   2  NVIDIA RTX A6000    Off  | 00000000:41:00.0 Off |                  Off |
| 30%   28C    P8    12W / 300W |  28252MiB / 49140MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
|   3  NVIDIA RTX A6000    Off  | 00000000:61:00.0 Off |                  Off |
| 30%   26C    P8    12W / 300W |      2MiB / 49140MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|    0   N/A  N/A   1228160      C   python                            772MiB |
|    0   N/A  N/A   1228264      C   /usr/bin/python                  3576MiB |
|    0   N/A  N/A   4009358      C   python                           1896MiB |
|    0   N/A  N/A   4009359      C   python                           1896MiB |
|    1   N/A  N/A   1084495      C   python                          27680MiB |
|    2   N/A  N/A   3972345      C   python                          28250MiB |
+-----------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到四张显卡，对应编号是：0、1、2、3，其中：0、1、2三张卡已经有python进程正在使用。</p><h2 id="查看docker运行时" tabindex="-1"><a class="header-anchor" href="#查看docker运行时"><span>查看docker运行时</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(base) root@ubuntu:~# docker info | grep -i &#39;Default Runtime&#39;
WARNING: No swap limit support
 Default Runtime: nvidia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker默认的运行时是：<code>runc</code>，为了使用gpu资源，需要使用：<code>nvidia</code>作为docker运行时。</p><p>如果未安装docker，参考：<a href="https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html" target="_blank" rel="noopener noreferrer">链接</a>进行安装</p><h2 id="使用minikube安装k8s" tabindex="-1"><a class="header-anchor" href="#使用minikube安装k8s"><span>使用minikube安装k8s</span></a></h2><h3 id="下载minikube" tabindex="-1"><a class="header-anchor" href="#下载minikube"><span>下载minikube</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动minikube" tabindex="-1"><a class="header-anchor" href="#启动minikube"><span>启动minikube</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>minikube start --image-mirror-country=&#39;cn&#39; --image-repository=&#39;registry.cn-hangzhou.aliyuncs.com/google_containers&#39; --force --driver docker --container-runtime docker --gpus all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中：</p><ul><li>--force，原因是使用root用户，报错信息：The &quot;docker&quot; driver should not be used with root privileges. If you wish to continue as root, use --force.</li><li>--driver docker，采用docker作为容器运行时</li><li>--image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers，由于国内环境无法访问国外镜像，采用阿里云的镜像仓库</li><li>--gpus，all指定所有显卡</li></ul><h3 id="查看当前k8s集群" tabindex="-1"><a class="header-anchor" href="#查看当前k8s集群"><span>查看当前k8s集群</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(base) root@ubuntu:/home/k8s# kubectl get pods -A
NAMESPACE     NAME                               READY   STATUS    RESTARTS     AGE
kube-system   coredns-7c445c467-d6zsw            1/1     Running   0            24s
kube-system   etcd-minikube                      1/1     Running   0            40s
kube-system   kube-apiserver-minikube            1/1     Running   0            37s
kube-system   kube-controller-manager-minikube   1/1     Running   0            39s
kube-system   kube-proxy-lblvn                   1/1     Running   0            25s
kube-system   kube-scheduler-minikube            1/1     Running   0            37s
kube-system   storage-provisioner                1/1     Running   1 (8s ago)   35s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启nvidia插件" tabindex="-1"><a class="header-anchor" href="#开启nvidia插件"><span>开启nvidia插件</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>minikube addons enable nvidia-device-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><p>手动安装插件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl apply -f https://raw.githubusercontent.com/NVIDIA/k8s-device-plugin/v0.15.0/deployments/static/nvidia-device-plugin.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置别名" tabindex="-1"><a class="header-anchor" href="#设置别名"><span>设置别名</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">kubectl</span><span class="token operator">=</span><span class="token string">&quot;minikube kubectl --&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="验证是否能否设别gpu资源" tabindex="-1"><a class="header-anchor" href="#验证是否能否设别gpu资源"><span>验证是否能否设别GPU资源</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl describe nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="k8s-gpu" tabindex="0" loading="lazy"><figcaption>k8s-gpu</figcaption></figure><h3 id="部署应用使用gpu" tabindex="-1"><a class="header-anchor" href="#部署应用使用gpu"><span>部署应用使用gpu</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: Pod
metadata:
  name: gpu
spec:
  containers:
  - name: gpu-container
    image: nvidia/cuda:12.2.2-devel-ubuntu22.04
    command:
      - &quot;/bin/sh&quot;
      - &quot;-c&quot;
    args:
      - nvidia-smi &amp;&amp; tail -f /dev/null
    resources:
      requests:
        nvidia.com/gpu: 1
      limits:
        nvidia.com/gpu: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl apply -f gpu-deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看日志</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl logs gpu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(base) root@ubuntu:~# kubectl logs gpu
Fri May 31 07:19:23 2024
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 525.116.04   Driver Version: 525.116.04   CUDA Version: 12.2     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA RTX A6000    Off  | 00000000:01:00.0 Off |                  Off |
| 30%   29C    P8    12W / 300W |   3794MiB / 49140MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
+-----------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题"><span>其他问题</span></a></h2><p>如果无法使用本地镜像，使用以下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>eval $(minikube docker-env)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2><ul><li><a href="https://github.com/NVIDIA/k8s-device-plugin" target="_blank" rel="noopener noreferrer">nvidia-device-plugin</a></li><li><a href="https://anencore94.github.io/2020/08/19/minikube-gpu.html" target="_blank" rel="noopener noreferrer">Minikube GPU Tutorial</a></li></ul>`,45);function r(u,c){return s(),i("div",null,[n(" more "),t])}const m=e(d,[["render",r],["__file","k8s-on-gpu.html.vue"]]),p=JSON.parse('{"path":"/devops/k8s/k8s-on-gpu.html","title":"GPU机器搭建k8s","lang":"zh-CN","frontmatter":{"title":"GPU机器搭建k8s","date":"2024-09-23T00:00:00.000Z","tag":["GPU","k8s"],"category":["devops"],"head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/devops/k8s/k8s-on-gpu.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"GPU机器搭建k8s"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-23T03:23:27.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"GPU"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2024-09-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-23T03:23:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GPU机器搭建k8s\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-23T03:23:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"查看GPU","slug":"查看gpu","link":"#查看gpu","children":[]},{"level":2,"title":"查看是否已安装gpu nvidia驱动","slug":"查看是否已安装gpu-nvidia驱动","link":"#查看是否已安装gpu-nvidia驱动","children":[]},{"level":2,"title":"查看gpu型号、gpu驱动版本","slug":"查看gpu型号、gpu驱动版本","link":"#查看gpu型号、gpu驱动版本","children":[]},{"level":2,"title":"查看docker运行时","slug":"查看docker运行时","link":"#查看docker运行时","children":[]},{"level":2,"title":"使用minikube安装k8s","slug":"使用minikube安装k8s","link":"#使用minikube安装k8s","children":[{"level":3,"title":"下载minikube","slug":"下载minikube","link":"#下载minikube","children":[]},{"level":3,"title":"启动minikube","slug":"启动minikube","link":"#启动minikube","children":[]},{"level":3,"title":"查看当前k8s集群","slug":"查看当前k8s集群","link":"#查看当前k8s集群","children":[]},{"level":3,"title":"开启nvidia插件","slug":"开启nvidia插件","link":"#开启nvidia插件","children":[]},{"level":3,"title":"设置别名","slug":"设置别名","link":"#设置别名","children":[]},{"level":3,"title":"验证是否能否设别GPU资源","slug":"验证是否能否设别gpu资源","link":"#验证是否能否设别gpu资源","children":[]},{"level":3,"title":"部署应用使用gpu","slug":"部署应用使用gpu","link":"#部署应用使用gpu","children":[]}]},{"level":2,"title":"其他问题","slug":"其他问题","link":"#其他问题","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1727061807000,"updatedTime":1727061807000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":3.11,"words":933},"filePathRelative":"devops/k8s/k8s-on-gpu.md","localizedDate":"2024年9月23日","excerpt":""}');export{m as comp,p as data};
