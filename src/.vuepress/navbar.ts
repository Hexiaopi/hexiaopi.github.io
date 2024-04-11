import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "设计模式",
    icon: "template",
    prefix: "/design-pattern/",
    children: [
      "",
      "principle",
      "quantity-code",
      {
        text: "创建型模式",
        icon: "class",
        prefix: "creational/",
        link: "creational/README.md",
      },
      {
        text: "结构型模式",
        icon: "structure",
        prefix: "structural/",
        link: "structural/README.md"
      },
      {
        text: "行为型模式",
        icon: "relation",
        prefix: "behavioral/",
        link: "behavioral/README.md"
      },
      {
        text: "函数模式",
        icon: "function",
        prefix: "function/",
        link: "function/README.md"
      },
      {
        text: "并发模式",
        icon: "context",
        prefix: "concurrency/",
        link: "concurrency/README.md"
      },
    ],
  },
  {
    text: "Go语言",
    icon: "language",
    link: "/go-language/README.md",
  },
  {
    text: "数据库",
    icon: "storage",
    prefix: "/database/",
    children: [
      {
        text: "MySQL",
        icon: "mysql",
        link: "mysql/README.md",
        activeMatch: "^/database/mysql",
      }
    ]
  },
  {
    text: "网络",
    icon: "network",
    prefix: "/network/",
    children: [
      {
        text: "应用层协议",
        icon: "safari",
        prefix: "application-layer/",
        link: "application-layer/README.md",
      },
      {
        text: "传输层协议",
        icon: "extend",
        prefix: "transport-layer/",
        link: "transport-layer/README.md",
      },
      {
        text: "网络层协议",
        icon: "state",
        prefix: "internet-layer/",
        link: "internet-layer/README.md",
      },
      {
        text: "链路层协议",
        icon: "api",
        prefix: "link-layer/",
        link: "link-layer/README.md",
      },
    ]
  },
  {
    text: "devops",
    icon: "any",
    prefix: "/devops/",
    children: [
      {
        text: "k8s",
        icon: "emmet",
        link: "k8s/README.md",
        activeMatch: "^/devops/k8s",
      },
      {
        text: "docker",
        icon: "overflow",
        link: "docker/README.md",
        activeMatch: "^/devops/docker",
      },
    ]
  },
  {
    text: "项目规范",
    icon: "guide",
    prefix: "/project-standard/",
    children: [
      {
        text: "接口规范",
        icon: "api",
        link: "api",
      },
      {
        text: "分支规范",
        icon: "branch",
        link: "branch",
      },
      {
        text: "提交规范",
        icon: "git",
        link: "commit",
      },
      {
        text: "目录规范",
        icon: "tree",
        link: "directory",
      },
      {
        text: "文档规范",
        icon: "article",
        link: "doc",
      },
      {
        text: "版本规范",
        icon: "git",
        link: "version",
      },
    ]
  },
  {
    text: "变更日志",
    icon: "time",
    link: "CHANGELOG",
  },
]);
