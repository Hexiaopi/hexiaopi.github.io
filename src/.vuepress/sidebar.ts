import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "设计模式",
      icon: "palette",
      collapsible: true,
      prefix: "design-pattern/",
      link: "design-pattern/README.md",
      children: [
        "principle",
        "quantity-code",
        {
          text: "创建型模式",
          icon: "seedling",
          collapsible: true,
          prefix: "creational/",
          link: "creational/README.md",
          children: "structure",
        },
        {
          text: "结构型模式",
          icon: "sitemap",
          collapsible: true,
          prefix: "structural/",
          link: "structural/README.md",
          children: "structure",
        },
        {
          text: "行为型模式",
          icon: "person-digging",
          collapsible: true,
          prefix: "behavioral/",
          link: "behavioral/README.md",
          children: "structure",
        },
        {
          text: "函数模式",
          icon: "microchip",
          collapsible: true,
          prefix: "function/",
          link: "function/README.md",
          children: "structure",
        },
        {
          text: "并发模式",
          icon: "shuffle",
          collapsible: true,
          prefix: "concurrency/",
          link: "concurrency/README.md",
          children: "structure",
        },
        "recommend",
      ],
    },
    {
      text: "编程语言&框架",
      icon: "language",
      collapsible: true,
      prefix: "language/",
      link: 'language/README.md',
      children: "structure",
    },
    {
      text: "数据存储",
      collapsible: true,
      icon: 'database',
      prefix: "database/",
      link: 'database/README.md',
      children: "structure",
    },
    {
      text: "网络",
      icon: "network-wired",
      collapsible: true,
      prefix: "network/",
      link: "network/README.md",
      children: "structure",
    },
    {
      text: "devops",
      icon: "rocket",
      collapsible: true,
      prefix: "devops/",
      link: "devops/README.md",
      children: "structure",
    },
    {
      text: "项目规范",
      icon: "list-check",
      collapsible: true,
      prefix: "project-standard/",
      link: "project-standard/README.md",
      children: "structure",
    },
    {
      text: "转载",
      icon: "share-square",
      collapsible: true,
      prefix: "share/",
      link: "share/README.md",
      children: "structure",
    },
    {
      text: "开源项目",
      icon: "code",
      collapsible: true,
      prefix: "open-source-project/",
      link: "open-source-project/README.md",
      children: "structure",
    },
  ],
});
