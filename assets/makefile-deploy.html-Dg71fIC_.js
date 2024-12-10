import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a,e,b as i,o as s}from"./app-B1fz2wU4.js";const d={},t=e("h2",{id:"背景",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#背景"},[e("span",null,"背景")])],-1),r=e("p",null,"在开发过程中，我们经常需要频繁的更新k8s服务，如果每次更新都需要手动执行一系列的命令，那将会非常繁琐。因此，我们需要一种自动化的方式来更新k8s服务。",-1),c=e("h2",{id:"解决方案",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决方案"},[e("span",null,"解决方案")])],-1),o=e("p",null,"使用Makefile来定义更新k8s服务的流程，并使用自动化工具（如git、docker等）来执行Makefile中的命令。这样，每次更新服务时，只需要执行一条命令即可完成更新操作。",-1),v=i(`<h2 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现"><span>具体实现</span></a></h2><h3 id="定义基础的变量" tabindex="-1"><a class="header-anchor" href="#定义基础的变量"><span>定义基础的变量</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span>hhm-disposal
<span class="token assign-left variable">DOCKER_HARBOR</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:8760
GIT_VERSION <span class="token operator">=</span> <span class="token variable"><span class="token variable">$(</span>shell <span class="token function">git</span> describe <span class="token parameter variable">--tags</span><span class="token variable">)</span></span>
envs <span class="token operator">=</span> prod pre
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>DOCKER_HARBOR是镜像仓库docker hub的地址</li><li>envs是多个环境，因为我们在k8s环境部署多个环境，如生产环境、预发布环境等</li><li>GIT_VERSION是当前git仓库的版本号</li></ul><h3 id="docker-build" tabindex="-1"><a class="header-anchor" href="#docker-build"><span>docker build</span></a></h3><p>构建本地镜像</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker-build:
	docker build -t $(DOCKER_HARBOR)/idata/$(APP_NAME):$(GIT_VERSION) .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-push" tabindex="-1"><a class="header-anchor" href="#docker-push"><span>docker push</span></a></h3><p>推送本地镜像至docker hub</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker-push:
	docker push $(DOCKER_HARBOR)/idata/$(APP_NAME):$(GIT_VERSION)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="helm-package" tabindex="-1"><a class="header-anchor" href="#helm-package"><span>helm package</span></a></h3><p>helm打包本地chart包，由于我们要基于一个docker镜像部署在不同的环境，因此这里会有多个环境的chart包</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>helm-package:
	@for env in $(envs);\\
		do echo &#39;helm package&#39; $$env;\\
		cp deployments/disposal/env/$$env/values.yaml deployments/disposal/values.yaml;\\
		cp deployments/disposal/env/$$env/Chart.yaml deployments/disposal/Chart.yaml;\\
		cp config/config.$$env.toml deployments/disposal/config/config.local.toml;\\
		helm lint --strict deployments/disposal;\\
		helm package deployments/disposal --version $(GIT_VERSION) --app-version $(GIT_VERSION);\\
	done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="helm-push" tabindex="-1"><a class="header-anchor" href="#helm-push"><span>helm push</span></a></h3><p>helm推送chart包至chart仓库</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>helm-push: 
	@for env in $(envs);\\
		do echo &#39;helm push&#39; $$env;\\
		helm cm-push disposal-$$env-$(GIT_VERSION).tgz hhm;\\
	dones
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="helm-clean" tabindex="-1"><a class="header-anchor" href="#helm-clean"><span>helm clean</span></a></h3><p>清理本地的chart包文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>helm-clean: 
	@for env in $(envs);\\
		do echo &#39;helm clean&#39; $$env;\\
		rm -rf disposal-$$env-$(GIT_VERSION).tgz;\\
	done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="串通以上命令" tabindex="-1"><a class="header-anchor" href="#串通以上命令"><span>串通以上命令</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>k8s: docker-build docker-push helm-package helm-push helm-clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样我们只需要执行<code>make k8s</code>就可以将这些繁杂的命令串通起来。</p><h2 id="两步完成k8s服务更新" tabindex="-1"><a class="header-anchor" href="#两步完成k8s服务更新"><span>两步完成k8s服务更新</span></a></h2><p>第一步：通过Makefile的<code>make k8s</code>实现镜像的构建、镜像的推送、chart包的构建、chart包的推送； 第二步：通过helm-dashboard进行服务的更新；</p><h2 id="沉淀的makefile脚本" tabindex="-1"><a class="header-anchor" href="#沉淀的makefile脚本"><span>沉淀的Makefile脚本</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>APP_NAME=hhm-disposal
DOCKER_HARBOR=127.0.0.1:8760
GIT_VERSION = $(shell git describe --tags)
envs = prod pre

version:
	@echo $(GIT_VERSION)

k8s: docker-build docker-push helm-package helm-push helm-clean

lint:
	golangci-lint run ./...

build:
	GOOS=linux go build 

clean:
	go clean

swagger:
	swag init

docker-build:
	docker build -t $(DOCKER_HARBOR)/idata/$(APP_NAME):$(GIT_VERSION) .

docker-push:
	docker push $(DOCKER_HARBOR)/idata/$(APP_NAME):$(GIT_VERSION)

helm-package:
	@for env in $(envs);\\
		do echo &#39;helm package&#39; $$env;\\
		cp deployments/disposal/env/$$env/values.yaml deployments/disposal/values.yaml;\\
		cp deployments/disposal/env/$$env/Chart.yaml deployments/disposal/Chart.yaml;\\
		cp config/config.$$env.toml deployments/disposal/config/config.local.toml;\\
		helm lint --strict deployments/disposal;\\
		helm package deployments/disposal --version $(GIT_VERSION) --app-version $(GIT_VERSION);\\
	done

helm-push: 
	@for env in $(envs);\\
		do echo &#39;helm push&#39; $$env;\\
		helm cm-push disposal-$$env-$(GIT_VERSION).tgz hhm;\\
	done

helm-clean: 
	@for env in $(envs);\\
		do echo &#39;helm clean&#39; $$env;\\
		rm -rf disposal-$$env-$(GIT_VERSION).tgz;\\
	done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function m(p,h){return s(),l("div",null,[t,r,c,o,a(" more "),v])}const k=n(d,[["render",m],["__file","makefile-deploy.html.vue"]]),g=JSON.parse('{"path":"/devops/k8s/makefile-deploy.html","title":"使用Makefile和Helm-Dashobard两步实现k8s服务多环境更新","lang":"zh-CN","frontmatter":{"title":"使用Makefile和Helm-Dashobard两步实现k8s服务多环境更新","date":"2024-05-12T00:00:00.000Z","tag":["Helm","k8s"],"category":["devops"],"description":"背景 在开发过程中，我们经常需要频繁的更新k8s服务，如果每次更新都需要手动执行一系列的命令，那将会非常繁琐。因此，我们需要一种自动化的方式来更新k8s服务。 解决方案 使用Makefile来定义更新k8s服务的流程，并使用自动化工具（如git、docker等）来执行Makefile中的命令。这样，每次更新服务时，只需要执行一条命令即可完成更新操作。","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/devops/k8s/makefile-deploy.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"使用Makefile和Helm-Dashobard两步实现k8s服务多环境更新"}],["meta",{"property":"og:description","content":"背景 在开发过程中，我们经常需要频繁的更新k8s服务，如果每次更新都需要手动执行一系列的命令，那将会非常繁琐。因此，我们需要一种自动化的方式来更新k8s服务。 解决方案 使用Makefile来定义更新k8s服务的流程，并使用自动化工具（如git、docker等）来执行Makefile中的命令。这样，每次更新服务时，只需要执行一条命令即可完成更新操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-27T02:59:10.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"Helm"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2024-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-27T02:59:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用Makefile和Helm-Dashobard两步实现k8s服务多环境更新\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-27T02:59:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"具体实现","slug":"具体实现","link":"#具体实现","children":[{"level":3,"title":"定义基础的变量","slug":"定义基础的变量","link":"#定义基础的变量","children":[]},{"level":3,"title":"docker build","slug":"docker-build","link":"#docker-build","children":[]},{"level":3,"title":"docker push","slug":"docker-push","link":"#docker-push","children":[]},{"level":3,"title":"helm package","slug":"helm-package","link":"#helm-package","children":[]},{"level":3,"title":"helm push","slug":"helm-push","link":"#helm-push","children":[]},{"level":3,"title":"helm clean","slug":"helm-clean","link":"#helm-clean","children":[]},{"level":3,"title":"串通以上命令","slug":"串通以上命令","link":"#串通以上命令","children":[]}]},{"level":2,"title":"两步完成k8s服务更新","slug":"两步完成k8s服务更新","link":"#两步完成k8s服务更新","children":[]},{"level":2,"title":"沉淀的Makefile脚本","slug":"沉淀的makefile脚本","link":"#沉淀的makefile脚本","children":[]}],"git":{"createdTime":1715519954000,"updatedTime":1724727550000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":2}]},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"devops/k8s/makefile-deploy.md","localizedDate":"2024年5月12日","excerpt":"<h2>背景</h2>\\n<p>在开发过程中，我们经常需要频繁的更新k8s服务，如果每次更新都需要手动执行一系列的命令，那将会非常繁琐。因此，我们需要一种自动化的方式来更新k8s服务。</p>\\n<h2>解决方案</h2>\\n<p>使用Makefile来定义更新k8s服务的流程，并使用自动化工具（如git、docker等）来执行Makefile中的命令。这样，每次更新服务时，只需要执行一条命令即可完成更新操作。</p>\\n","autoDesc":true}');export{k as comp,g as data};
