import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as t,e,b as l,o as d}from"./app-DqrjVsRD.js";const a={},s=e("blockquote",null,[e("p",null,"README文档是项目的门面，通过README文档可以帮助用户快速了解项目。")],-1),r=l(`<p>README文档可以参考以下模板，或者通过在线网站生成<a href="https://readme.so/" target="_blank" rel="noopener noreferrer">readme.so</a></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 项目名称
&lt;!-- 简介项目 --&gt;
## 功能特性
&lt;!-- 描述该项目的核心功能点 --&gt;
## 软件架构(可选)
&lt;!-- 描述下项目的架构 --&gt;
## 快速开始
### 依赖检查
&lt;!-- 该项目的依赖，比如依赖的包、工具或者其他任何依赖项 --&gt;
### 构建
&lt;!-- 如何构建该项目 --&gt;
### 运行
&lt;!-- 如何运行该项目 --&gt;
### 预览环境（可选）
&lt;!-- 提供预览环境，帮助用户快速尝鲜 --&gt;
## 使用指南
&lt;!-- 如何使用该项目 --&gt;
## 如何贡献
&lt;!-- 如何贡献源码 --&gt;
## 社区(可选)
&lt;!-- 社区相关的内容 --&gt;
## 关于作者
&lt;!-- 项目作者(多个) --&gt;
## 谁在用(可选)
&lt;!-- 使用本项目的其他有影响力的项目，加分 --&gt;
## 许可证
&lt;!-- 开源许可证 --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>项目文档通常放在<code>/docs</code>目录下。包含：</p><p><strong>开发文档</strong> 面向开发人员，用来说明开发流程、构建、测试、部署等。</p><p><strong>用户文档</strong> 面向使用人员，包括：API文档、SDK文档、安装文档、功能介绍文档、最佳实践、操作指南、常见问题等。</p></blockquote><p>这里参考<a href="https://github.com/marmotedu/iam" target="_blank" rel="noopener noreferrer">IAM</a>项目的文档结构</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docs
├── devel                            # 开发文档，可以提前规划好，英文版文档和中文版文档
│   ├── en-US/                       # 英文版文档，可以根据需要组织文件结构
│   └── zh-CN                        # 中文版文档，可以根据需要组织文件结构
│       └── development.md           # 开发手册，可以说明如何编译、构建、运行项目
├── guide                            # 用户文档
│   ├── en-US/                       # 英文版文档，可以根据需要组织文件结构
│   └── zh-CN                        # 中文版文档，可以根据需要组织文件结构
│       ├── api/                     # API文档
│       ├── best-practice            # 最佳实践，存放一些比较重要的实践文章
│       │   └── authorization.md
│       ├── faq                      # 常见问题
│       │   ├── iam-apiserver
│       │   └── installation
│       ├── installation             # 安装文档
│       │   └── installation.md
│       ├── introduction/            # 产品介绍文档
│       ├── operation-guide          # 操作指南，里面可以根据RESTful资源再划分为更细的子目录，用来存放系统核心/全部功能的操作手册
│       │   ├── policy.md
│       │   ├── secret.md
│       │   └── user.md
│       ├── quickstart               # 快速入门
│       │   └── quickstart.md
│       ├── README.md                # 用户文档入口文件
│       └── sdk                      # SDK文档
│           └── golang.md
└── images                           # 图片存放目录
    └── 部署架构v1.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function c(o,m){return d(),n("div",null,[s,t(" more "),r])}const p=i(a,[["render",c],["__file","doc.html.vue"]]),b=JSON.parse('{"path":"/project-standard/doc.html","title":"文档规范","lang":"zh-CN","frontmatter":{"title":"文档规范","icon":"file-contract","date":"2020-01-24T00:00:00.000Z","author":"Hexiaopi","tag":["规范","文档"],"category":["项目规范"],"description":"README文档是项目的门面，通过README文档可以帮助用户快速了解项目。","head":[["meta",{"property":"og:url","content":"http://blog.cjhe.top/project-standard/doc.html"}],["meta",{"property":"og:site_name","content":"个人博客"}],["meta",{"property":"og:title","content":"文档规范"}],["meta",{"property":"og:description","content":"README文档是项目的门面，通过README文档可以帮助用户快速了解项目。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T02:44:40.000Z"}],["meta",{"property":"article:author","content":"Hexiaopi"}],["meta",{"property":"article:tag","content":"规范"}],["meta",{"property":"article:tag","content":"文档"}],["meta",{"property":"article:published_time","content":"2020-01-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T02:44:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文档规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-06T02:44:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hexiaopi\\"}]}"]]},"headers":[],"git":{"createdTime":1643121935000,"updatedTime":1714963480000,"contributors":[{"name":"HeXiaoPi","email":"hechangjie0619@icloud.com","commits":3},{"name":"hexiaopi","email":"hechangjie0619@icloud.com","commits":1}]},"readingTime":{"minutes":1.99,"words":596},"filePathRelative":"project-standard/doc.md","localizedDate":"2020年1月24日","excerpt":"<blockquote>\\n<p>README文档是项目的门面，通过README文档可以帮助用户快速了解项目。</p>\\n</blockquote>\\n","autoDesc":true}');export{p as comp,b as data};
