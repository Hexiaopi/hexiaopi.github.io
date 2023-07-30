<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Go语言项目业界公认的目录结构是怎样的❓</p>
</div>
<!-- more -->
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2>
<blockquote>
<p>可以通过以下维度进行考量：</p>
<ul>
<li>
<p>命名清晰：目录命名需要简洁，清晰的表达出该目录实现的功能，做到一看到该目录名就知道是干嘛的；</p>
</li>
<li>
<p>功能明确：目录的功能必须明确，例如：api目录是接口服务、service目录是业务逻辑；</p>
</li>
<li>
<p>功能齐全：例如测试、构建、脚本、工具、文档等；</p>
</li>
</ul>
</blockquote>
<p>这里参考Go语言公认项目目录<a href="https://github.com/golang-standards/project-layout" target="_blank" rel="noopener noreferrer">project-layout<ExternalLinkIcon/></a>结构如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.
├── api
├── assets
├── build
│   ├── ci
│   └── package
├── cmd
│   └── _your_app_
├── configs
├── deployments
├── docs
├── examples
├── githooks
├── init
├── internal
│   ├── app
│   │   └── _your_app_
│   └── pkg
│       └── _your_private_lib_
├── pkg
│   └── _your_public_lib_
├── scripts
├── test
├── third_party
├── tools
├── vendor
├── web
│   ├── app
│   ├── static
│   └── template
└── website
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用目录" tabindex="-1"><a class="header-anchor" href="#应用目录" aria-hidden="true">#</a> 应用目录</h2>
<h3 id="api目录" tabindex="-1"><a class="header-anchor" href="#api目录" aria-hidden="true">#</a> api目录</h3>
<blockquote>
<p>OpenAPI/Swagger规范、JSON模式文件、协议定义文件</p>
</blockquote>
<h3 id="cmd目录" tabindex="-1"><a class="header-anchor" href="#cmd目录" aria-hidden="true">#</a> cmd目录</h3>
<blockquote>
<p>该项目的主要应用，Go语言以main函数文件作为程序入口。每个应用程序的目录名称应与执行文件的名称相匹配，例如：<code v-pre>/cmd/myapp</code></p>
</blockquote>
<h3 id="examples目录" tabindex="-1"><a class="header-anchor" href="#examples目录" aria-hidden="true">#</a> examples目录</h3>
<blockquote>
<p>应用程序和公共库的示例</p>
</blockquote>
<h3 id="internal目录" tabindex="-1"><a class="header-anchor" href="#internal目录" aria-hidden="true">#</a> internal目录</h3>
<blockquote>
<p>存放私有应用和库代码，如果一些代码，你不希望在其他在其他应用和库中被导入，可以放在internal目录下。而对于私有应用共享的代码可以放在/internal/pkg目录下。<br>
建议internal目录以各个组件的方式进行分层。</p>
</blockquote>
<h3 id="pkg目录" tabindex="-1"><a class="header-anchor" href="#pkg目录" aria-hidden="true">#</a> pkg目录</h3>
<blockquote>
<p>与internal相反，该目录存放可供其他外部应用程序使用的库代码。</p>
</blockquote>
<h3 id="vendor目录" tabindex="-1"><a class="header-anchor" href="#vendor目录" aria-hidden="true">#</a> vendor目录</h3>
<blockquote>
<p>该目录存放项目依赖，可通过<code v-pre>go mod vendor</code>创建。</p>
</blockquote>
<p>👀 注意</p>
<p>如果开发的是Go语言库，不要提交vendor依赖包</p>
<h3 id="test目录" tabindex="-1"><a class="header-anchor" href="#test目录" aria-hidden="true">#</a> test目录</h3>
<blockquote>
<p>其他外部测试应用程序和测试数据。对于更大的项目，有一个数据子目录是有意义的。例如：<code v-pre>/test/data</code>或者<code v-pre>/test/testdata</code></p>
</blockquote>
<p>👀 注意</p>
<p>Go 也会忽略以“.”开头的目录或文件。或“_”，因此您可以更灵活地命名测试数据目录。</p>
<h3 id="third-party目录" tabindex="-1"><a class="header-anchor" href="#third-party目录" aria-hidden="true">#</a> third_party目录</h3>
<blockquote>
<p>外部帮助工具，分支代码或其他第三方应用。</p>
</blockquote>
<h3 id="tools目录" tabindex="-1"><a class="header-anchor" href="#tools目录" aria-hidden="true">#</a> tools目录</h3>
<blockquote>
<p>该项目的支持工具</p>
</blockquote>
<p>👀 注意</p>
<p>这些工具可以从<code v-pre>pkg</code>和<code v-pre>internal</code>目录导入代码</p>
<h3 id="web目录" tabindex="-1"><a class="header-anchor" href="#web目录" aria-hidden="true">#</a> web目录</h3>
<blockquote>
<p>前端代码存放目录，用来存放Web静态资源，服务端模块和单页应用（SPAs）</p>
</blockquote>
<h3 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> assets</h3>
<blockquote>
<p>其他资产，例如：图像、徽标、CSS、JavaScript等</p>
</blockquote>
<h3 id="website" tabindex="-1"><a class="header-anchor" href="#website" aria-hidden="true">#</a> website</h3>
<blockquote>
<p>项目网站或者Github页面</p>
</blockquote>
<h2 id="项目管理目录与文件" tabindex="-1"><a class="header-anchor" href="#项目管理目录与文件" aria-hidden="true">#</a> 项目管理目录与文件</h2>
<h3 id="build目录" tabindex="-1"><a class="header-anchor" href="#build目录" aria-hidden="true">#</a> build目录</h3>
<blockquote>
<p>打包和持续集成</p>
<p>将云 (AMI)、容器 (Docker)、操作系统（deb、rpm、pkg）包配置和脚本放在<code v-pre>/build/package</code>目录中。</p>
<p>将CI（travis、circle、drone）配置和脚本放在<code v-pre>/build/ci</code>目录中。</p>
</blockquote>
<p>👀 注意</p>
<p>一些 CI 工具（例如 Travis CI）对其配置文件的位置非常挑剔。尝试将配置文件放在/build/ci将它们链接到 CI 工具期望它们的位置的目录中（如果可能）。</p>
<h3 id="configs目录" tabindex="-1"><a class="header-anchor" href="#configs目录" aria-hidden="true">#</a> configs目录</h3>
<blockquote>
<p>配置文件，例如这里可以存放confd或consul-template模版文件。</p>
</blockquote>
<h3 id="deployments目录" tabindex="-1"><a class="header-anchor" href="#deployments目录" aria-hidden="true">#</a> deployments目录</h3>
<blockquote>
<p>IaaS、PaaS、系统和容器编排部署配置和模板（docker-compose、kubernetes/helm、mesos、terraform、bosh）。</p>
</blockquote>
<p>👀 注意</p>
<p>在某些存储库（尤其是使用 kubernetes 部署的应用程序）中，此目录称为<code v-pre>deploy</code>.</p>
<h3 id="init目录" tabindex="-1"><a class="header-anchor" href="#init目录" aria-hidden="true">#</a> init目录</h3>
<blockquote>
<p>系统初始化（systemd、upstart、sysv）和进程管理器(runit、supervisord)配置文件，在非容器化部署的项目中会使用到。</p>
</blockquote>
<p>例如：systemd的unit文件，用于管理程序，一般以.service结尾</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[Unit]
Description=OpenSSH server daemon
Documentation=man:sshd(8) man:sshd_config(5)
After=network.target sshd-keygen.target
Wants=sshd-keygen.target

[Service]
Type=notify
EnvironmentFile=-/etc/crypto-policies/back-ends/opensshserver.config
EnvironmentFile=-/etc/sysconfig/sshd
ExecStart=/usr/sbin/sshd -D $OPTIONS $CRYPTO_POLICY
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
Restart=on-failure
RestartSec=42s

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scripts目录" tabindex="-1"><a class="header-anchor" href="#scripts目录" aria-hidden="true">#</a> scripts目录</h3>
<blockquote>
<p>执行各种构建、安装、分析等操作的脚本。这些脚本使根级 Makefile 小而简单</p>
</blockquote>
<p>例如: <a href="https://github.com/hashicorp/terraform/blob/master/Makefile" target="_blank" rel="noopener noreferrer">terraform-website<ExternalLinkIcon/></a>使用了很多scipts目录下的脚本，使得Makefile小但功能强大。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>WEBSITE_REPO=github.com/hashicorp/terraform-website
VERSION?="0.3.44"
PWD=$$(pwd)
DOCKER_IMAGE="hashicorp/terraform-website:full"
DOCKER_IMAGE_LOCAL="hashicorp-terraform-website-local"
DOCKER_RUN_FLAGS=--interactive \
	--rm \
	--tty \
	--workdir "/website" \
	--volume "$(shell pwd):/website/ext/terraform" \
	--volume "$(shell pwd)/website:/website/preview" \
	--publish "3000:3000" \
	-e "IS_CONTENT_PREVIEW=true" \
	-e "PREVIEW_FROM_REPO=terraform" \
	-e "NAV_DATA_DIRNAME=./preview/data" \
	-e "CONTENT_DIRNAME=./preview/docs" \
	-e "CURRENT_GIT_BRANCH=$$(git rev-parse --abbrev-ref HEAD)"

# generate runs `go generate` to build the dynamically generated
# source files, except the protobuf stubs which are built instead with
# "make protobuf".
generate:
	go generate ./...

# We separate the protobuf generation because most development tasks on
# Terraform do not involve changing protobuf files and protoc is not a
# go-gettable dependency and so getting it installed can be inconvenient.
#
# If you are working on changes to protobuf interfaces, run this Makefile
# target to be sure to regenerate all of the protobuf stubs using the expected
# versions of protoc and the protoc Go plugins.
protobuf:
	go run ./tools/protobuf-compile .

fmtcheck:
	"$(CURDIR)/scripts/gofmtcheck.sh"

importscheck:
	"$(CURDIR)/scripts/goimportscheck.sh"

staticcheck:
	"$(CURDIR)/scripts/staticcheck.sh"

exhaustive:
	"$(CURDIR)/scripts/exhaustive.sh"

# Default: run this if working on the website locally to run in watch mode.
website:
	@echo "==> Downloading latest Docker image..."
	@docker pull ${DOCKER_IMAGE}
	@echo "==> Starting website in Docker..."
	@docker run ${DOCKER_RUN_FLAGS} ${DOCKER_IMAGE} npm start

website/local:
	@echo "==> Starting website in Docker..."
	@docker run ${DOCKER_RUN_FLAGS} ${DOCKER_IMAGE_LOCAL} npm start

.PHONY: website/build-local
website/build-local:
	@echo "==> Building local Docker image"
	@docker build https://github.com/hashicorp/terraform-website.git\#master \
		-t $(DOCKER_IMAGE_LOCAL)

# disallow any parallelism (-j) for Make. This is necessary since some
# commands during the build process create temporary files that collide
# under parallel conditions.
.NOTPARALLEL:

.PHONY: fmtcheck importscheck generate protobuf website website-test staticcheck website/local website/build-local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="githooks目录" tabindex="-1"><a class="header-anchor" href="#githooks目录" aria-hidden="true">#</a> githooks目录</h3>
<blockquote>
<p>Git钩子，比如可以将commit-msg存放在该目录</p>
</blockquote>
<h3 id="makefile文件" tabindex="-1"><a class="header-anchor" href="#makefile文件" aria-hidden="true">#</a> Makefile文件</h3>
<blockquote>
<p>Makefile是一个很优秀的项目管理工具，通常用来执行静态代码检查、单元测试、编译等功能</p>
</blockquote>
<ul>
<li>静态代码检查(lint)：推荐用 golangci-lint。</li>
<li>单元测试(test)：运行 go test ./...。</li>
<li>编译(build)：编译源码，支持不同的平台，不同的 CPU 架构。</li>
<li>镜像打包和发布(image/image.push)：现在的系统比较推荐用 Docker/Kubernetes 进行部署，所以一般也要有镜像构建功能。</li>
<li>清理（clean）:清理临时文件或者编译后的产物。</li>
<li>代码生成（gen）：比如要编译生成 protobuf pb.go 文件。</li>
<li>部署（deploy，可选）：一键部署功能，方便测试。</li>
<li>发布（release）：发布功能，比如：发布到 Docker Hub、github 等。</li>
<li>帮助（help）:告诉 Makefile 有哪些功能，如何执行这些功能。</li>
<li>版权声明（add-copyright）：如果是开源项目，可能需要在每个文件中添加版权头，这可以通过 Makefile 来添加。</li>
<li>API 文档（swagger）：如果使用 swagger 来生成 API 文档，这可以通过 Makefile 来生成。</li>
</ul>
<h2 id="文档目录与文件" tabindex="-1"><a class="header-anchor" href="#文档目录与文件" aria-hidden="true">#</a> 文档目录与文件</h2>
<h3 id="docs目录" tabindex="-1"><a class="header-anchor" href="#docs目录" aria-hidden="true">#</a> docs目录</h3>
<blockquote>
<p>设计和用户文档，除了<code v-pre>godoc</code>生成的文档之外</p>
</blockquote>
<ul>
<li>/docs/devel/{en-US,zh-CN}: 存放开发文档、hack文档</li>
<li>/docs/guide/{en-US,zh-CN}: 存放用户手册，安装、quickstart、产品文档等</li>
<li>/docs/image: 存放图片文件</li>
</ul>
<h3 id="changelog目录" tabindex="-1"><a class="header-anchor" href="#changelog目录" aria-hidden="true">#</a> CHANGELOG目录</h3>
<blockquote>
<p>当项目有更新时，为了方便了解当前版本的更新内容或者历史更新内容，需要将更新记录存放到CHANGELOG目录。</p>
</blockquote>
<p>编写CHANGELOG是一个繁琐的工作，我们可以结合<a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener noreferrer">Angular规范<ExternalLinkIcon/></a>和<a href="https://github.com/git-chglog/git-chglog" target="_blank" rel="noopener noreferrer">git-chglog工具<ExternalLinkIcon/></a></p>
<h3 id="contributing-md文件" tabindex="-1"><a class="header-anchor" href="#contributing-md文件" aria-hidden="true">#</a> CONTRIBUTING.md文件</h3>
<blockquote>
<p>开源项目用于说明如何贡献代码，如何开源协同等。</p>
</blockquote>
<h3 id="license文件" tabindex="-1"><a class="header-anchor" href="#license文件" aria-hidden="true">#</a> LICENSE文件</h3>
<blockquote>
<p>版权文件，常用的开源协议有：Apache 2.0、MIT、GPL等</p>
</blockquote>
<p>为了声明版权，你可能会需要将LICENSE头添加到源代码文件或者其他文件中，可以尝试使用这个工具自动化实现：<a href="https://github.com/marmotedu/addlicense" target="_blank" rel="noopener noreferrer">addlicense<ExternalLinkIcon/></a></p>
<p>当代码中引用了其他开源代码时，需要在LICENSE中说明对其他源码的引用，可以借助工具来进行检查：<a href="https://github.com/ribice/glice" target="_blank" rel="noopener noreferrer">glice<ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>+---------------------------------------+-----------------------------------------------+--------------+
|              DEPENDENCY               |                    REPOURL                    |   LICENSE    |
+---------------------------------------+-----------------------------------------------+--------------+
| github.com/dgrijalva/jwt-go           | https://github.com/dgrijalva/jwt-go           | MIT          |
| github.com/golang/mock                | https://github.com/golang/mock                | Apache-2.0   |
| github.com/gorilla/mux                | https://github.com/gorilla/mux                | bsd-3-clause |
| github.com/jinzhu/gorm                | https://github.com/jinzhu/gorm                | MIT          |
| github.com/opentracing/opentracing-go | https://github.com/opentracing/opentracing-go | Apache-2.0   |
| github.com/sirupsen/logrus            | https://github.com/sirupsen/logrus            | MIT          |
| github.com/stretchr/testify           | https://github.com/stretchr/testify           | MIT          |
| github.com/swaggo/http-swagger        | https://github.com/swaggo/http-swagger        | MIT          |
| github.com/swaggo/swag                | https://github.com/swaggo/swag                | MIT          |
| github.com/uber/jaeger-client-go      | https://github.com/uber/jaeger-client-go      | Apache-2.0   |
| gopkg.in/yaml.v2                      |                                               |              |
+---------------------------------------+-----------------------------------------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readme-md文件" tabindex="-1"><a class="header-anchor" href="#readme-md文件" aria-hidden="true">#</a> README.md文件</h3>
<blockquote>
<p>项目的README文件一般包含了项目的介绍、功能、快速安装和使用指引、详细的文档链接以及开发指引。</p>
</blockquote>
<p>有时候README文档比较长，可以借助工具<a href="https://github.com/nochso/tocenize" target="_blank" rel="noopener noreferrer">tocenize<ExternalLinkIcon/></a>来添加markdown toc索引</p>
<h2 id="不应该拥有的目录" tabindex="-1"><a class="header-anchor" href="#不应该拥有的目录" aria-hidden="true">#</a> 不应该拥有的目录</h2>
<h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3>
<blockquote>
<p>Go语言的工作空间包含：<code v-pre>pkg</code>、<code v-pre>bin</code>、<code v-pre>src</code>。且项目代码放在<code v-pre>src</code>目录下，如果一个Go项目包含<code v-pre>src</code>目录，则项目路径将会变成：<code v-pre>/some/path/to/workspace/src/your_project/src/your_code.go</code>，就变得非常丑。</p>
</blockquote>
</div></template>


