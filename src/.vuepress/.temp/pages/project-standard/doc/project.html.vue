<template><div><blockquote>
<p>README文档是项目的门面，通过README文档可以帮助用户快速了解项目。</p>
</blockquote>
<p>README文档可以参考以下模板，或者通过在线网站生成<a href="https://readme.so/" target="_blank" rel="noopener noreferrer">readme.so<ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 项目名称
&lt;!-- 简介项目 -->
## 功能特性
&lt;!-- 描述该项目的核心功能点 -->
## 软件架构(可选)
&lt;!-- 描述下项目的架构 -->
## 快速开始
### 依赖检查
&lt;!-- 该项目的依赖，比如依赖的包、工具或者其他任何依赖项 -->
### 构建
&lt;!-- 如何构建该项目 -->
### 运行
&lt;!-- 如何运行该项目 -->
### 预览环境（可选）
&lt;!-- 提供预览环境，帮助用户快速尝鲜 -->
## 使用指南
&lt;!-- 如何使用该项目 -->
## 如何贡献
&lt;!-- 如何贡献源码 -->
## 社区(可选)
&lt;!-- 社区相关的内容 -->
## 关于作者
&lt;!-- 项目作者(多个) -->
## 谁在用(可选)
&lt;!-- 使用本项目的其他有影响力的项目，加分 -->
## 许可证
&lt;!-- 开源许可证 -->
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>项目文档通常放在<code v-pre>/docs</code>目录下。包含：</p>
<p><strong>开发文档</strong><br>
面向开发人员，用来说明开发流程、构建、测试、部署等。</p>
<p><strong>用户文档</strong><br>
面向使用人员，包括：API文档、SDK文档、安装文档、功能介绍文档、最佳实践、操作指南、常见问题等。</p>
</blockquote>
<p>这里参考<a href="https://github.com/marmotedu/iam" target="_blank" rel="noopener noreferrer">IAM<ExternalLinkIcon/></a>项目的文档结构</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docs
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


