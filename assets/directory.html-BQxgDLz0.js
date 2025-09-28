import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as n,a as i,b as l,o as p}from"./app-BH_usOR1.js";const t={};function c(r,s){return p(),e("div",null,[s[0]||(s[0]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"Go语言项目业界公认的目录结构是怎样的❓")],-1)),i(" more "),s[1]||(s[1]=l(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><blockquote><p>可以通过以下维度进行考量：</p><ul><li><p>命名清晰：目录命名需要简洁，清晰的表达出该目录实现的功能，做到一看到该目录名就知道是干嘛的；</p></li><li><p>功能明确：目录的功能必须明确，例如：api目录是接口服务、service目录是业务逻辑；</p></li><li><p>功能齐全：例如测试、构建、脚本、工具、文档等；</p></li></ul></blockquote><p>这里参考Go语言公认项目目录<a href="https://github.com/golang-standards/project-layout" target="_blank" rel="noopener noreferrer">project-layout</a>结构如下：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>.</span></span>
<span class="line"><span>├── api</span></span>
<span class="line"><span>├── assets</span></span>
<span class="line"><span>├── build</span></span>
<span class="line"><span>│   ├── ci</span></span>
<span class="line"><span>│   └── package</span></span>
<span class="line"><span>├── cmd</span></span>
<span class="line"><span>│   └── _your_app_</span></span>
<span class="line"><span>├── configs</span></span>
<span class="line"><span>├── deployments</span></span>
<span class="line"><span>├── docs</span></span>
<span class="line"><span>├── examples</span></span>
<span class="line"><span>├── githooks</span></span>
<span class="line"><span>├── init</span></span>
<span class="line"><span>├── internal</span></span>
<span class="line"><span>│   ├── app</span></span>
<span class="line"><span>│   │   └── _your_app_</span></span>
<span class="line"><span>│   └── pkg</span></span>
<span class="line"><span>│       └── _your_private_lib_</span></span>
<span class="line"><span>├── pkg</span></span>
<span class="line"><span>│   └── _your_public_lib_</span></span>
<span class="line"><span>├── scripts</span></span>
<span class="line"><span>├── test</span></span>
<span class="line"><span>├── third_party</span></span>
<span class="line"><span>├── tools</span></span>
<span class="line"><span>├── vendor</span></span>
<span class="line"><span>├── web</span></span>
<span class="line"><span>│   ├── app</span></span>
<span class="line"><span>│   ├── static</span></span>
<span class="line"><span>│   └── template</span></span>
<span class="line"><span>└── website</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用目录" tabindex="-1"><a class="header-anchor" href="#应用目录"><span>应用目录</span></a></h2><h3 id="api目录" tabindex="-1"><a class="header-anchor" href="#api目录"><span>api目录</span></a></h3><blockquote><p>OpenAPI/Swagger规范、JSON模式文件、协议定义文件</p></blockquote><h3 id="cmd目录" tabindex="-1"><a class="header-anchor" href="#cmd目录"><span>cmd目录</span></a></h3><blockquote><p>该项目的主要应用，Go语言以main函数文件作为程序入口。每个应用程序的目录名称应与执行文件的名称相匹配，例如：<code>/cmd/myapp</code></p></blockquote><h3 id="examples目录" tabindex="-1"><a class="header-anchor" href="#examples目录"><span>examples目录</span></a></h3><blockquote><p>应用程序和公共库的示例</p></blockquote><h3 id="internal目录" tabindex="-1"><a class="header-anchor" href="#internal目录"><span>internal目录</span></a></h3><blockquote><p>存放私有应用和库代码，如果一些代码，你不希望在其他在其他应用和库中被导入，可以放在internal目录下。而对于私有应用共享的代码可以放在/internal/pkg目录下。 建议internal目录以各个组件的方式进行分层。</p></blockquote><h3 id="pkg目录" tabindex="-1"><a class="header-anchor" href="#pkg目录"><span>pkg目录</span></a></h3><blockquote><p>与internal相反，该目录存放可供其他外部应用程序使用的库代码。</p></blockquote><h3 id="vendor目录" tabindex="-1"><a class="header-anchor" href="#vendor目录"><span>vendor目录</span></a></h3><blockquote><p>该目录存放项目依赖，可通过<code>go mod vendor</code>创建。</p></blockquote><p>👀 注意</p><p>如果开发的是Go语言库，不要提交vendor依赖包</p><h3 id="test目录" tabindex="-1"><a class="header-anchor" href="#test目录"><span>test目录</span></a></h3><blockquote><p>其他外部测试应用程序和测试数据。对于更大的项目，有一个数据子目录是有意义的。例如：<code>/test/data</code>或者<code>/test/testdata</code></p></blockquote><p>👀 注意</p><p>Go 也会忽略以“.”开头的目录或文件。或“_”，因此您可以更灵活地命名测试数据目录。</p><h3 id="third-party目录" tabindex="-1"><a class="header-anchor" href="#third-party目录"><span>third_party目录</span></a></h3><blockquote><p>外部帮助工具，分支代码或其他第三方应用。</p></blockquote><h3 id="tools目录" tabindex="-1"><a class="header-anchor" href="#tools目录"><span>tools目录</span></a></h3><blockquote><p>该项目的支持工具</p></blockquote><p>👀 注意</p><p>这些工具可以从<code>pkg</code>和<code>internal</code>目录导入代码</p><h3 id="web目录" tabindex="-1"><a class="header-anchor" href="#web目录"><span>web目录</span></a></h3><blockquote><p>前端代码存放目录，用来存放Web静态资源，服务端模块和单页应用（SPAs）</p></blockquote><h3 id="assets" tabindex="-1"><a class="header-anchor" href="#assets"><span>assets</span></a></h3><blockquote><p>其他资产，例如：图像、徽标、CSS、JavaScript等</p></blockquote><h3 id="website" tabindex="-1"><a class="header-anchor" href="#website"><span>website</span></a></h3><blockquote><p>项目网站或者Github页面</p></blockquote><h2 id="项目管理目录与文件" tabindex="-1"><a class="header-anchor" href="#项目管理目录与文件"><span>项目管理目录与文件</span></a></h2><h3 id="build目录" tabindex="-1"><a class="header-anchor" href="#build目录"><span>build目录</span></a></h3><blockquote><p>打包和持续集成</p><p>将云 (AMI)、容器 (Docker)、操作系统（deb、rpm、pkg）包配置和脚本放在<code>/build/package</code>目录中。</p><p>将CI（travis、circle、drone）配置和脚本放在<code>/build/ci</code>目录中。</p></blockquote><p>👀 注意</p><p>一些 CI 工具（例如 Travis CI）对其配置文件的位置非常挑剔。尝试将配置文件放在/build/ci将它们链接到 CI 工具期望它们的位置的目录中（如果可能）。</p><h3 id="configs目录" tabindex="-1"><a class="header-anchor" href="#configs目录"><span>configs目录</span></a></h3><blockquote><p>配置文件，例如这里可以存放confd或consul-template模版文件。</p></blockquote><h3 id="deployments目录" tabindex="-1"><a class="header-anchor" href="#deployments目录"><span>deployments目录</span></a></h3><blockquote><p>IaaS、PaaS、系统和容器编排部署配置和模板（docker-compose、kubernetes/helm、mesos、terraform、bosh）。</p></blockquote><p>👀 注意</p><p>在某些存储库（尤其是使用 kubernetes 部署的应用程序）中，此目录称为<code>deploy</code>.</p><h3 id="init目录" tabindex="-1"><a class="header-anchor" href="#init目录"><span>init目录</span></a></h3><blockquote><p>系统初始化（systemd、upstart、sysv）和进程管理器(runit、supervisord)配置文件，在非容器化部署的项目中会使用到。</p></blockquote><p>例如：systemd的unit文件，用于管理程序，一般以.service结尾</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=OpenSSH server daemon</span></span>
<span class="line"><span>Documentation=man:sshd(8) man:sshd_config(5)</span></span>
<span class="line"><span>After=network.target sshd-keygen.target</span></span>
<span class="line"><span>Wants=sshd-keygen.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=notify</span></span>
<span class="line"><span>EnvironmentFile=-/etc/crypto-policies/back-ends/opensshserver.config</span></span>
<span class="line"><span>EnvironmentFile=-/etc/sysconfig/sshd</span></span>
<span class="line"><span>ExecStart=/usr/sbin/sshd -D $OPTIONS $CRYPTO_POLICY</span></span>
<span class="line"><span>ExecReload=/bin/kill -HUP $MAINPID</span></span>
<span class="line"><span>KillMode=process</span></span>
<span class="line"><span>Restart=on-failure</span></span>
<span class="line"><span>RestartSec=42s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scripts目录" tabindex="-1"><a class="header-anchor" href="#scripts目录"><span>scripts目录</span></a></h3><blockquote><p>执行各种构建、安装、分析等操作的脚本。这些脚本使根级 Makefile 小而简单</p></blockquote><p>例如: <a href="https://github.com/hashicorp/terraform/blob/master/Makefile" target="_blank" rel="noopener noreferrer">terraform-website</a>使用了很多scipts目录下的脚本，使得Makefile小但功能强大。</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>WEBSITE_REPO=github.com/hashicorp/terraform-website</span></span>
<span class="line"><span>VERSION?=&quot;0.3.44&quot;</span></span>
<span class="line"><span>PWD=$$(pwd)</span></span>
<span class="line"><span>DOCKER_IMAGE=&quot;hashicorp/terraform-website:full&quot;</span></span>
<span class="line"><span>DOCKER_IMAGE_LOCAL=&quot;hashicorp-terraform-website-local&quot;</span></span>
<span class="line"><span>DOCKER_RUN_FLAGS=--interactive \\</span></span>
<span class="line"><span>	--rm \\</span></span>
<span class="line"><span>	--tty \\</span></span>
<span class="line"><span>	--workdir &quot;/website&quot; \\</span></span>
<span class="line"><span>	--volume &quot;$(shell pwd):/website/ext/terraform&quot; \\</span></span>
<span class="line"><span>	--volume &quot;$(shell pwd)/website:/website/preview&quot; \\</span></span>
<span class="line"><span>	--publish &quot;3000:3000&quot; \\</span></span>
<span class="line"><span>	-e &quot;IS_CONTENT_PREVIEW=true&quot; \\</span></span>
<span class="line"><span>	-e &quot;PREVIEW_FROM_REPO=terraform&quot; \\</span></span>
<span class="line"><span>	-e &quot;NAV_DATA_DIRNAME=./preview/data&quot; \\</span></span>
<span class="line"><span>	-e &quot;CONTENT_DIRNAME=./preview/docs&quot; \\</span></span>
<span class="line"><span>	-e &quot;CURRENT_GIT_BRANCH=$$(git rev-parse --abbrev-ref HEAD)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># generate runs \`go generate\` to build the dynamically generated</span></span>
<span class="line"><span># source files, except the protobuf stubs which are built instead with</span></span>
<span class="line"><span># &quot;make protobuf&quot;.</span></span>
<span class="line"><span>generate:</span></span>
<span class="line"><span>	go generate ./...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># We separate the protobuf generation because most development tasks on</span></span>
<span class="line"><span># Terraform do not involve changing protobuf files and protoc is not a</span></span>
<span class="line"><span># go-gettable dependency and so getting it installed can be inconvenient.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># If you are working on changes to protobuf interfaces, run this Makefile</span></span>
<span class="line"><span># target to be sure to regenerate all of the protobuf stubs using the expected</span></span>
<span class="line"><span># versions of protoc and the protoc Go plugins.</span></span>
<span class="line"><span>protobuf:</span></span>
<span class="line"><span>	go run ./tools/protobuf-compile .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fmtcheck:</span></span>
<span class="line"><span>	&quot;$(CURDIR)/scripts/gofmtcheck.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>importscheck:</span></span>
<span class="line"><span>	&quot;$(CURDIR)/scripts/goimportscheck.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>staticcheck:</span></span>
<span class="line"><span>	&quot;$(CURDIR)/scripts/staticcheck.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exhaustive:</span></span>
<span class="line"><span>	&quot;$(CURDIR)/scripts/exhaustive.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Default: run this if working on the website locally to run in watch mode.</span></span>
<span class="line"><span>website:</span></span>
<span class="line"><span>	@echo &quot;==&gt; Downloading latest Docker image...&quot;</span></span>
<span class="line"><span>	@docker pull \${DOCKER_IMAGE}</span></span>
<span class="line"><span>	@echo &quot;==&gt; Starting website in Docker...&quot;</span></span>
<span class="line"><span>	@docker run \${DOCKER_RUN_FLAGS} \${DOCKER_IMAGE} npm start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>website/local:</span></span>
<span class="line"><span>	@echo &quot;==&gt; Starting website in Docker...&quot;</span></span>
<span class="line"><span>	@docker run \${DOCKER_RUN_FLAGS} \${DOCKER_IMAGE_LOCAL} npm start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY: website/build-local</span></span>
<span class="line"><span>website/build-local:</span></span>
<span class="line"><span>	@echo &quot;==&gt; Building local Docker image&quot;</span></span>
<span class="line"><span>	@docker build https://github.com/hashicorp/terraform-website.git\\#master \\</span></span>
<span class="line"><span>		-t $(DOCKER_IMAGE_LOCAL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># disallow any parallelism (-j) for Make. This is necessary since some</span></span>
<span class="line"><span># commands during the build process create temporary files that collide</span></span>
<span class="line"><span># under parallel conditions.</span></span>
<span class="line"><span>.NOTPARALLEL:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY: fmtcheck importscheck generate protobuf website website-test staticcheck website/local website/build-local</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="githooks目录" tabindex="-1"><a class="header-anchor" href="#githooks目录"><span>githooks目录</span></a></h3><blockquote><p>Git钩子，比如可以将commit-msg存放在该目录</p></blockquote><h3 id="makefile文件" tabindex="-1"><a class="header-anchor" href="#makefile文件"><span>Makefile文件</span></a></h3><blockquote><p>Makefile是一个很优秀的项目管理工具，通常用来执行静态代码检查、单元测试、编译等功能</p></blockquote><ul><li>静态代码检查(lint)：推荐用 golangci-lint。</li><li>单元测试(test)：运行 go test ./...。</li><li>编译(build)：编译源码，支持不同的平台，不同的 CPU 架构。</li><li>镜像打包和发布(image/image.push)：现在的系统比较推荐用 Docker/Kubernetes 进行部署，所以一般也要有镜像构建功能。</li><li>清理（clean）:清理临时文件或者编译后的产物。</li><li>代码生成（gen）：比如要编译生成 protobuf pb.go 文件。</li><li>部署（deploy，可选）：一键部署功能，方便测试。</li><li>发布（release）：发布功能，比如：发布到 Docker Hub、github 等。</li><li>帮助（help）:告诉 Makefile 有哪些功能，如何执行这些功能。</li><li>版权声明（add-copyright）：如果是开源项目，可能需要在每个文件中添加版权头，这可以通过 Makefile 来添加。</li><li>API 文档（swagger）：如果使用 swagger 来生成 API 文档，这可以通过 Makefile 来生成。</li></ul><h2 id="文档目录与文件" tabindex="-1"><a class="header-anchor" href="#文档目录与文件"><span>文档目录与文件</span></a></h2><h3 id="docs目录" tabindex="-1"><a class="header-anchor" href="#docs目录"><span>docs目录</span></a></h3><blockquote><p>设计和用户文档，除了<code>godoc</code>生成的文档之外</p></blockquote><ul><li>/docs/devel/{en-US,zh-CN}: 存放开发文档、hack文档</li><li>/docs/guide/{en-US,zh-CN}: 存放用户手册，安装、quickstart、产品文档等</li><li>/docs/image: 存放图片文件</li></ul><h3 id="changelog目录" tabindex="-1"><a class="header-anchor" href="#changelog目录"><span>CHANGELOG目录</span></a></h3><blockquote><p>当项目有更新时，为了方便了解当前版本的更新内容或者历史更新内容，需要将更新记录存放到CHANGELOG目录。</p></blockquote><p>编写CHANGELOG是一个繁琐的工作，我们可以结合<a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener noreferrer">Angular规范</a>和<a href="https://github.com/git-chglog/git-chglog" target="_blank" rel="noopener noreferrer">git-chglog工具</a></p><h3 id="contributing-md文件" tabindex="-1"><a class="header-anchor" href="#contributing-md文件"><span>CONTRIBUTING.md文件</span></a></h3><blockquote><p>开源项目用于说明如何贡献代码，如何开源协同等。</p></blockquote><h3 id="license文件" tabindex="-1"><a class="header-anchor" href="#license文件"><span>LICENSE文件</span></a></h3><blockquote><p>版权文件，常用的开源协议有：Apache 2.0、MIT、GPL等</p></blockquote><p>为了声明版权，你可能会需要将LICENSE头添加到源代码文件或者其他文件中，可以尝试使用这个工具自动化实现：<a href="https://github.com/marmotedu/addlicense" target="_blank" rel="noopener noreferrer">addlicense</a></p><p>当代码中引用了其他开源代码时，需要在LICENSE中说明对其他源码的引用，可以借助工具来进行检查：<a href="https://github.com/ribice/glice" target="_blank" rel="noopener noreferrer">glice</a></p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>+---------------------------------------+-----------------------------------------------+--------------+</span></span>
<span class="line"><span>|              DEPENDENCY               |                    REPOURL                    |   LICENSE    |</span></span>
<span class="line"><span>+---------------------------------------+-----------------------------------------------+--------------+</span></span>
<span class="line"><span>| github.com/dgrijalva/jwt-go           | https://github.com/dgrijalva/jwt-go           | MIT          |</span></span>
<span class="line"><span>| github.com/golang/mock                | https://github.com/golang/mock                | Apache-2.0   |</span></span>
<span class="line"><span>| github.com/gorilla/mux                | https://github.com/gorilla/mux                | bsd-3-clause |</span></span>
<span class="line"><span>| github.com/jinzhu/gorm                | https://github.com/jinzhu/gorm                | MIT          |</span></span>
<span class="line"><span>| github.com/opentracing/opentracing-go | https://github.com/opentracing/opentracing-go | Apache-2.0   |</span></span>
<span class="line"><span>| github.com/sirupsen/logrus            | https://github.com/sirupsen/logrus            | MIT          |</span></span>
<span class="line"><span>| github.com/stretchr/testify           | https://github.com/stretchr/testify           | MIT          |</span></span>
<span class="line"><span>| github.com/swaggo/http-swagger        | https://github.com/swaggo/http-swagger        | MIT          |</span></span>
<span class="line"><span>| github.com/swaggo/swag                | https://github.com/swaggo/swag                | MIT          |</span></span>
<span class="line"><span>| github.com/uber/jaeger-client-go      | https://github.com/uber/jaeger-client-go      | Apache-2.0   |</span></span>
<span class="line"><span>| gopkg.in/yaml.v2                      |                                               |              |</span></span>
<span class="line"><span>+---------------------------------------+-----------------------------------------------+--------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readme-md文件" tabindex="-1"><a class="header-anchor" href="#readme-md文件"><span>README.md文件</span></a></h3><blockquote><p>项目的README文件一般包含了项目的介绍、功能、快速安装和使用指引、详细的文档链接以及开发指引。</p></blockquote><p>有时候README文档比较长，可以借助工具<a href="https://github.com/nochso/tocenize" target="_blank" rel="noopener noreferrer">tocenize</a>来添加markdown toc索引</p><h2 id="不应该拥有的目录" tabindex="-1"><a class="header-anchor" href="#不应该拥有的目录"><span>不应该拥有的目录</span></a></h2><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src"><span>src</span></a></h3><blockquote><p>Go语言的工作空间包含：<code>pkg</code>、<code>bin</code>、<code>src</code>。且项目代码放在<code>src</code>目录下，如果一个Go项目包含<code>src</code>目录，则项目路径将会变成：<code>/some/path/to/workspace/src/your_project/src/your_code.go</code>，就变得非常丑。</p></blockquote>`,79))])}const u=a(t,[["render",c]]),h=JSON.parse('{"path":"/project-standard/directory.html","title":"目录规范","lang":"zh-CN","frontmatter":{"title":"目录规范","icon":"folder-open","date":"2020-02-09T00:00:00.000Z","tag":["规范"],"category":["项目规范"],"star":true,"description":"提示 Go语言项目业界公认的目录结构是怎样的❓","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"目录规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-06T02:44:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"],["meta",{"property":"og:url","content":"http://blog.cjhe.top/project-standard/directory.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"目录规范"}],["meta",{"property":"og:description","content":"提示 Go语言项目业界公认的目录结构是怎样的❓"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T02:44:40.000Z"}],["meta",{"property":"article:tag","content":"规范"}],["meta",{"property":"article:published_time","content":"2020-02-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T02:44:40.000Z"}]]},"git":{"createdTime":1690708801000,"updatedTime":1714963480000,"contributors":[{"name":"hexiaopi","username":"hexiaopi","email":"hechangjie0619@icloud.com","commits":3,"url":"https://github.com/hexiaopi"},{"name":"HeXiaoPi","username":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":3,"url":"https://github.com/HeXiaoPi"}]},"readingTime":{"minutes":6.69,"words":2008},"filePathRelative":"project-standard/directory.md","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>Go语言项目业界公认的目录结构是怎样的❓</p>\\n</div>\\n","autoDesc":true}');export{u as comp,h as data};
