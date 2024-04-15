import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as o,f as d,a as e,b as i,d as l,e as t}from"./app-DE5Wz_61.js";const c={},u=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"Go语言项目业界公认的目录结构是怎样的❓")],-1),p=e("h2",{id:"目录结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录结构"},[e("span",null,"目录结构")])],-1),h=e("blockquote",null,[e("p",null,"可以通过以下维度进行考量："),e("ul",null,[e("li",null,[e("p",null,"命名清晰：目录命名需要简洁，清晰的表达出该目录实现的功能，做到一看到该目录名就知道是干嘛的；")]),e("li",null,[e("p",null,"功能明确：目录的功能必须明确，例如：api目录是接口服务、service目录是业务逻辑；")]),e("li",null,[e("p",null,"功能齐全：例如测试、构建、脚本、工具、文档等；")])])],-1),b={href:"https://github.com/golang-standards/project-layout",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用目录" tabindex="-1"><a class="header-anchor" href="#应用目录"><span>应用目录</span></a></h2><h3 id="api目录" tabindex="-1"><a class="header-anchor" href="#api目录"><span>api目录</span></a></h3><blockquote><p>OpenAPI/Swagger规范、JSON模式文件、协议定义文件</p></blockquote><h3 id="cmd目录" tabindex="-1"><a class="header-anchor" href="#cmd目录"><span>cmd目录</span></a></h3><blockquote><p>该项目的主要应用，Go语言以main函数文件作为程序入口。每个应用程序的目录名称应与执行文件的名称相匹配，例如：<code>/cmd/myapp</code></p></blockquote><h3 id="examples目录" tabindex="-1"><a class="header-anchor" href="#examples目录"><span>examples目录</span></a></h3><blockquote><p>应用程序和公共库的示例</p></blockquote><h3 id="internal目录" tabindex="-1"><a class="header-anchor" href="#internal目录"><span>internal目录</span></a></h3><blockquote><p>存放私有应用和库代码，如果一些代码，你不希望在其他在其他应用和库中被导入，可以放在internal目录下。而对于私有应用共享的代码可以放在/internal/pkg目录下。 建议internal目录以各个组件的方式进行分层。</p></blockquote><h3 id="pkg目录" tabindex="-1"><a class="header-anchor" href="#pkg目录"><span>pkg目录</span></a></h3><blockquote><p>与internal相反，该目录存放可供其他外部应用程序使用的库代码。</p></blockquote><h3 id="vendor目录" tabindex="-1"><a class="header-anchor" href="#vendor目录"><span>vendor目录</span></a></h3><blockquote><p>该目录存放项目依赖，可通过<code>go mod vendor</code>创建。</p></blockquote><p>👀 注意</p><p>如果开发的是Go语言库，不要提交vendor依赖包</p><h3 id="test目录" tabindex="-1"><a class="header-anchor" href="#test目录"><span>test目录</span></a></h3><blockquote><p>其他外部测试应用程序和测试数据。对于更大的项目，有一个数据子目录是有意义的。例如：<code>/test/data</code>或者<code>/test/testdata</code></p></blockquote><p>👀 注意</p><p>Go 也会忽略以“.”开头的目录或文件。或“_”，因此您可以更灵活地命名测试数据目录。</p><h3 id="third-party目录" tabindex="-1"><a class="header-anchor" href="#third-party目录"><span>third_party目录</span></a></h3><blockquote><p>外部帮助工具，分支代码或其他第三方应用。</p></blockquote><h3 id="tools目录" tabindex="-1"><a class="header-anchor" href="#tools目录"><span>tools目录</span></a></h3><blockquote><p>该项目的支持工具</p></blockquote><p>👀 注意</p><p>这些工具可以从<code>pkg</code>和<code>internal</code>目录导入代码</p><h3 id="web目录" tabindex="-1"><a class="header-anchor" href="#web目录"><span>web目录</span></a></h3><blockquote><p>前端代码存放目录，用来存放Web静态资源，服务端模块和单页应用（SPAs）</p></blockquote><h3 id="assets" tabindex="-1"><a class="header-anchor" href="#assets"><span>assets</span></a></h3><blockquote><p>其他资产，例如：图像、徽标、CSS、JavaScript等</p></blockquote><h3 id="website" tabindex="-1"><a class="header-anchor" href="#website"><span>website</span></a></h3><blockquote><p>项目网站或者Github页面</p></blockquote><h2 id="项目管理目录与文件" tabindex="-1"><a class="header-anchor" href="#项目管理目录与文件"><span>项目管理目录与文件</span></a></h2><h3 id="build目录" tabindex="-1"><a class="header-anchor" href="#build目录"><span>build目录</span></a></h3><blockquote><p>打包和持续集成</p><p>将云 (AMI)、容器 (Docker)、操作系统（deb、rpm、pkg）包配置和脚本放在<code>/build/package</code>目录中。</p><p>将CI（travis、circle、drone）配置和脚本放在<code>/build/ci</code>目录中。</p></blockquote><p>👀 注意</p><p>一些 CI 工具（例如 Travis CI）对其配置文件的位置非常挑剔。尝试将配置文件放在/build/ci将它们链接到 CI 工具期望它们的位置的目录中（如果可能）。</p><h3 id="configs目录" tabindex="-1"><a class="header-anchor" href="#configs目录"><span>configs目录</span></a></h3><blockquote><p>配置文件，例如这里可以存放confd或consul-template模版文件。</p></blockquote><h3 id="deployments目录" tabindex="-1"><a class="header-anchor" href="#deployments目录"><span>deployments目录</span></a></h3><blockquote><p>IaaS、PaaS、系统和容器编排部署配置和模板（docker-compose、kubernetes/helm、mesos、terraform、bosh）。</p></blockquote><p>👀 注意</p><p>在某些存储库（尤其是使用 kubernetes 部署的应用程序）中，此目录称为<code>deploy</code>.</p><h3 id="init目录" tabindex="-1"><a class="header-anchor" href="#init目录"><span>init目录</span></a></h3><blockquote><p>系统初始化（systemd、upstart、sysv）和进程管理器(runit、supervisord)配置文件，在非容器化部署的项目中会使用到。</p></blockquote><p>例如：systemd的unit文件，用于管理程序，一般以.service结尾</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[Unit]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scripts目录" tabindex="-1"><a class="header-anchor" href="#scripts目录"><span>scripts目录</span></a></h3><blockquote><p>执行各种构建、安装、分析等操作的脚本。这些脚本使根级 Makefile 小而简单</p></blockquote>`,49),m={href:"https://github.com/hashicorp/terraform/blob/master/Makefile",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>WEBSITE_REPO=github.com/hashicorp/terraform-website
VERSION?=&quot;0.3.44&quot;
PWD=$$(pwd)
DOCKER_IMAGE=&quot;hashicorp/terraform-website:full&quot;
DOCKER_IMAGE_LOCAL=&quot;hashicorp-terraform-website-local&quot;
DOCKER_RUN_FLAGS=--interactive \\
	--rm \\
	--tty \\
	--workdir &quot;/website&quot; \\
	--volume &quot;$(shell pwd):/website/ext/terraform&quot; \\
	--volume &quot;$(shell pwd)/website:/website/preview&quot; \\
	--publish &quot;3000:3000&quot; \\
	-e &quot;IS_CONTENT_PREVIEW=true&quot; \\
	-e &quot;PREVIEW_FROM_REPO=terraform&quot; \\
	-e &quot;NAV_DATA_DIRNAME=./preview/data&quot; \\
	-e &quot;CONTENT_DIRNAME=./preview/docs&quot; \\
	-e &quot;CURRENT_GIT_BRANCH=$$(git rev-parse --abbrev-ref HEAD)&quot;

# generate runs \`go generate\` to build the dynamically generated
# source files, except the protobuf stubs which are built instead with
# &quot;make protobuf&quot;.
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
	&quot;$(CURDIR)/scripts/gofmtcheck.sh&quot;

importscheck:
	&quot;$(CURDIR)/scripts/goimportscheck.sh&quot;

staticcheck:
	&quot;$(CURDIR)/scripts/staticcheck.sh&quot;

exhaustive:
	&quot;$(CURDIR)/scripts/exhaustive.sh&quot;

# Default: run this if working on the website locally to run in watch mode.
website:
	@echo &quot;==&gt; Downloading latest Docker image...&quot;
	@docker pull \${DOCKER_IMAGE}
	@echo &quot;==&gt; Starting website in Docker...&quot;
	@docker run \${DOCKER_RUN_FLAGS} \${DOCKER_IMAGE} npm start

website/local:
	@echo &quot;==&gt; Starting website in Docker...&quot;
	@docker run \${DOCKER_RUN_FLAGS} \${DOCKER_IMAGE_LOCAL} npm start

.PHONY: website/build-local
website/build-local:
	@echo &quot;==&gt; Building local Docker image&quot;
	@docker build https://github.com/hashicorp/terraform-website.git\\#master \\
		-t $(DOCKER_IMAGE_LOCAL)

# disallow any parallelism (-j) for Make. This is necessary since some
# commands during the build process create temporary files that collide
# under parallel conditions.
.NOTPARALLEL:

.PHONY: fmtcheck importscheck generate protobuf website website-test staticcheck website/local website/build-local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="githooks目录" tabindex="-1"><a class="header-anchor" href="#githooks目录"><span>githooks目录</span></a></h3><blockquote><p>Git钩子，比如可以将commit-msg存放在该目录</p></blockquote><h3 id="makefile文件" tabindex="-1"><a class="header-anchor" href="#makefile文件"><span>Makefile文件</span></a></h3><blockquote><p>Makefile是一个很优秀的项目管理工具，通常用来执行静态代码检查、单元测试、编译等功能</p></blockquote><ul><li>静态代码检查(lint)：推荐用 golangci-lint。</li><li>单元测试(test)：运行 go test ./...。</li><li>编译(build)：编译源码，支持不同的平台，不同的 CPU 架构。</li><li>镜像打包和发布(image/image.push)：现在的系统比较推荐用 Docker/Kubernetes 进行部署，所以一般也要有镜像构建功能。</li><li>清理（clean）:清理临时文件或者编译后的产物。</li><li>代码生成（gen）：比如要编译生成 protobuf pb.go 文件。</li><li>部署（deploy，可选）：一键部署功能，方便测试。</li><li>发布（release）：发布功能，比如：发布到 Docker Hub、github 等。</li><li>帮助（help）:告诉 Makefile 有哪些功能，如何执行这些功能。</li><li>版权声明（add-copyright）：如果是开源项目，可能需要在每个文件中添加版权头，这可以通过 Makefile 来添加。</li><li>API 文档（swagger）：如果使用 swagger 来生成 API 文档，这可以通过 Makefile 来生成。</li></ul><h2 id="文档目录与文件" tabindex="-1"><a class="header-anchor" href="#文档目录与文件"><span>文档目录与文件</span></a></h2><h3 id="docs目录" tabindex="-1"><a class="header-anchor" href="#docs目录"><span>docs目录</span></a></h3><blockquote><p>设计和用户文档，除了<code>godoc</code>生成的文档之外</p></blockquote><ul><li>/docs/devel/{en-US,zh-CN}: 存放开发文档、hack文档</li><li>/docs/guide/{en-US,zh-CN}: 存放用户手册，安装、quickstart、产品文档等</li><li>/docs/image: 存放图片文件</li></ul><h3 id="changelog目录" tabindex="-1"><a class="header-anchor" href="#changelog目录"><span>CHANGELOG目录</span></a></h3><blockquote><p>当项目有更新时，为了方便了解当前版本的更新内容或者历史更新内容，需要将更新记录存放到CHANGELOG目录。</p></blockquote>`,12),k={href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/git-chglog/git-chglog",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"contributing-md文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributing-md文件"},[e("span",null,"CONTRIBUTING.md文件")])],-1),q=e("blockquote",null,[e("p",null,"开源项目用于说明如何贡献代码，如何开源协同等。")],-1),x=e("h3",{id:"license文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#license文件"},[e("span",null,"LICENSE文件")])],-1),y=e("blockquote",null,[e("p",null,"版权文件，常用的开源协议有：Apache 2.0、MIT、GPL等")],-1),w={href:"https://github.com/marmotedu/addlicense",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/ribice/glice",target:"_blank",rel:"noopener noreferrer"},I=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+---------------------------------------+-----------------------------------------------+--------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readme-md文件" tabindex="-1"><a class="header-anchor" href="#readme-md文件"><span>README.md文件</span></a></h3><blockquote><p>项目的README文件一般包含了项目的介绍、功能、快速安装和使用指引、详细的文档链接以及开发指引。</p></blockquote>`,3),C={href:"https://github.com/nochso/tocenize",target:"_blank",rel:"noopener noreferrer"},N=t('<h2 id="不应该拥有的目录" tabindex="-1"><a class="header-anchor" href="#不应该拥有的目录"><span>不应该拥有的目录</span></a></h2><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src"><span>src</span></a></h3><blockquote><p>Go语言的工作空间包含：<code>pkg</code>、<code>bin</code>、<code>src</code>。且项目代码放在<code>src</code>目录下，如果一个Go项目包含<code>src</code>目录，则项目路径将会变成：<code>/some/path/to/workspace/src/your_project/src/your_code.go</code>，就变得非常丑。</p></blockquote>',3);function R(A,D){const n=a("ExternalLinkIcon");return r(),o("div",null,[u,d(" more "),p,h,e("p",null,[i("这里参考Go语言公认项目目录"),e("a",b,[i("project-layout"),l(n)]),i("结构如下：")]),v,e("p",null,[i("例如: "),e("a",m,[i("terraform-website"),l(n)]),i("使用了很多scipts目录下的脚本，使得Makefile小但功能强大。")]),g,e("p",null,[i("编写CHANGELOG是一个繁琐的工作，我们可以结合"),e("a",k,[i("Angular规范"),l(n)]),i("和"),e("a",f,[i("git-chglog工具"),l(n)])]),_,q,x,y,e("p",null,[i("为了声明版权，你可能会需要将LICENSE头添加到源代码文件或者其他文件中，可以尝试使用这个工具自动化实现："),e("a",w,[i("addlicense"),l(n)])]),e("p",null,[i("当代码中引用了其他开源代码时，需要在LICENSE中说明对其他源码的引用，可以借助工具来进行检查："),e("a",E,[i("glice"),l(n)])]),I,e("p",null,[i("有时候README文档比较长，可以借助工具"),e("a",C,[i("tocenize"),l(n)]),i("来添加markdown toc索引")]),N])}const G=s(c,[["render",R],["__file","directory.html.vue"]]),M=JSON.parse('{"path":"/project-standard/directory.html","title":"目录规范","lang":"zh-CN","frontmatter":{"title":"目录规范","icon":"folder","date":"2020-02-09T00:00:00.000Z","tag":["规范"],"category":["项目规范"],"sticky":true,"star":true,"description":"提示 Go语言项目业界公认的目录结构是怎样的❓","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/project-standard/directory.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"目录规范"}],["meta",{"property":"og:description","content":"提示 Go语言项目业界公认的目录结构是怎样的❓"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T09:57:53.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"规范"}],["meta",{"property":"article:published_time","content":"2020-02-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-15T09:57:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"目录规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-15T09:57:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\",\\"url\\":\\"https://github.com/Hexiaopi\\"}]}"]]},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"应用目录","slug":"应用目录","link":"#应用目录","children":[{"level":3,"title":"api目录","slug":"api目录","link":"#api目录","children":[]},{"level":3,"title":"cmd目录","slug":"cmd目录","link":"#cmd目录","children":[]},{"level":3,"title":"examples目录","slug":"examples目录","link":"#examples目录","children":[]},{"level":3,"title":"internal目录","slug":"internal目录","link":"#internal目录","children":[]},{"level":3,"title":"pkg目录","slug":"pkg目录","link":"#pkg目录","children":[]},{"level":3,"title":"vendor目录","slug":"vendor目录","link":"#vendor目录","children":[]},{"level":3,"title":"test目录","slug":"test目录","link":"#test目录","children":[]},{"level":3,"title":"third_party目录","slug":"third-party目录","link":"#third-party目录","children":[]},{"level":3,"title":"tools目录","slug":"tools目录","link":"#tools目录","children":[]},{"level":3,"title":"web目录","slug":"web目录","link":"#web目录","children":[]},{"level":3,"title":"assets","slug":"assets","link":"#assets","children":[]},{"level":3,"title":"website","slug":"website","link":"#website","children":[]}]},{"level":2,"title":"项目管理目录与文件","slug":"项目管理目录与文件","link":"#项目管理目录与文件","children":[{"level":3,"title":"build目录","slug":"build目录","link":"#build目录","children":[]},{"level":3,"title":"configs目录","slug":"configs目录","link":"#configs目录","children":[]},{"level":3,"title":"deployments目录","slug":"deployments目录","link":"#deployments目录","children":[]},{"level":3,"title":"init目录","slug":"init目录","link":"#init目录","children":[]},{"level":3,"title":"scripts目录","slug":"scripts目录","link":"#scripts目录","children":[]},{"level":3,"title":"githooks目录","slug":"githooks目录","link":"#githooks目录","children":[]},{"level":3,"title":"Makefile文件","slug":"makefile文件","link":"#makefile文件","children":[]}]},{"level":2,"title":"文档目录与文件","slug":"文档目录与文件","link":"#文档目录与文件","children":[{"level":3,"title":"docs目录","slug":"docs目录","link":"#docs目录","children":[]},{"level":3,"title":"CHANGELOG目录","slug":"changelog目录","link":"#changelog目录","children":[]},{"level":3,"title":"CONTRIBUTING.md文件","slug":"contributing-md文件","link":"#contributing-md文件","children":[]},{"level":3,"title":"LICENSE文件","slug":"license文件","link":"#license文件","children":[]},{"level":3,"title":"README.md文件","slug":"readme-md文件","link":"#readme-md文件","children":[]}]},{"level":2,"title":"不应该拥有的目录","slug":"不应该拥有的目录","link":"#不应该拥有的目录","children":[{"level":3,"title":"src","slug":"src","link":"#src","children":[]}]}],"git":{"createdTime":1690708801000,"updatedTime":1713175073000,"contributors":[{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":3},{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":6.7,"words":2009},"filePathRelative":"project-standard/directory.md","localizedDate":"2020年2月9日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>Go语言项目业界公认的目录结构是怎样的❓</p>\\n</div>\\n","autoDesc":true}');export{G as comp,M as data};
