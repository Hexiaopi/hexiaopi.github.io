import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    "slides",
    {
      text: "设计模式",
      icon: "project-diagram",
      collapsible: true,
      prefix: "design-pattern/",
      link: "design-pattern/README.md",
      children: [
        "principle",
        "quantity-code",
        {
          text: "创建型模式",
          collapsible: true,
          prefix: "creational/",
          link: "creational/README.md",
          children: "structure",
        },
        {
          text: "结构型模式",
          collapsible: true,
          prefix: "structural/",
          link: "structural/README.md",
          children: "structure",
        },
        {
          text: "行为型模式",
          collapsible: true,
          prefix: "behavioral/",
          link: "behavioral/README.md",
          children: "structure",
        },
        {
          text: "函数模式",
          collapsible: true,
          prefix: "function/",
          link: "function/README.md",
          children: "structure",
        },
        {
          text: "并发模式",
          collapsible: true,
          prefix: "concurrency/",
          link: "concurrency/README.md",
          children: "structure",
        },
      ],
    },
    {
      text: "语言",
      icon: "language",
      collapsible: true,
      prefix: "language/",
      children: [
        {
          text: "Go语言",
          icon: "/assets/icon/golang.svg",
          collapsible: true,
          prefix: "go/",
          link: "go/README.md",
          children: "structure",
        },
        {
          text: "Vue框架",
          icon: "/assets/icon/vuejs.svg",
          collapsible: true,
          prefix: "vue/",
          link: "vue/README.md",
          children: "structure",
        },
        // {
        //   text: "标准库",
        //   collapsible: true,
        //   prefix: "standard-library/",
        //   link: "standard-library/README.md",
        //   children: "structure",
        // },
        // {
        //   text: "三方库",
        //   collapsible: true,
        //   prefix: "third-party/",
        //   link: "third-party/README.md",
        //   children: "structure",
        // },
        // {
        //   text: "推荐",
        //   icon: "share-square",
        //   collapsible: true,
        //   prefix: "recommend/",
        //   link: "recommend/README.md",
        //   children: "structure",
        // },
        // {
        //   text: "转载",
        //   collapsible: true,
        //   prefix: "reprint/",
        //   link: "reprint/README.md",
        //   children: "structure",
        // },
      ],
    },
    {
      text: "数据库",
      collapsible: true,
      icon: 'database',
      prefix: "database/",
      link: 'database/README.md',
      children: [
        {
          text: "MySQL",
          collapsible: true,
          icon: "/assets/icon/mysql.svg",
          prefix: "mysql/",
          link: "mysql/README.md",
          children: "structure",
        },
      ],
    },
    {
      text: "网络",
      icon: "network-wired",
      collapsible: true,
      prefix: "network/",
      link: "network/README.md",
      children: [
        {
          text: "应用层协议",
          collapsible: true,
          prefix: "application-layer/",
          link: "application-layer/README.md",
          children: "structure",
        },
        {
          text: "传输层协议",
          collapsible: true,
          prefix: "transport-layer/",
          link: "transport-layer/README.md",
          children: "structure",
        },
        {
          text: "网络层协议",
          collapsible: true,
          prefix: "internet-layer/",
          link: "internet-layer/README.md",
          children: "structure",
        },
        {
          text: "链路层协议",
          collapsible: true,
          prefix: "link-layer/",
          link: "link-layer/README.md",
          children: "structure",
        },
      ]
    },
    {
      text: "devops",
      icon: "rocket",
      collapsible: true,
      prefix: "devops/",
      link: "devops/README.md",
      children: [
        {
          text: "k8s",
          icon: "/assets/icon/k8s.svg",
          collapsible: true,
          prefix: "k8s/",
          link: "k8s/README.md",
          children: "structure",
        },
        {
          text: "docker",
          icon: "/assets/icon/docker.svg",
          collapsible: true,
          prefix: "docker/",
          link: "docker/README.md",
          children: "structure",
        }
      ]
    },
    {
      text: "项目规范",
      icon: "list-check",
      collapsible: true,
      prefix: "project-standard/",
      link: "project-standard/README.md",
      children: "structure",
    },
  ],
});
