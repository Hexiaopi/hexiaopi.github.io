import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    "slides",
    {
      text: "设计模式",
      icon: "template",
      collapsible: true,
      prefix: "design-pattern/",
      children: [
        "",
        "principle",
        "quantity-code",
        {
          text: "创建型模式",
          icon: "class",
          collapsible: true,
          prefix: "creational/",
          link: "creational/README.md",
          children: [
            "simple-factory",
            "factory-method",
            "abstract-factory",
            "factory-compare",
            "singleton",
            "builder",
            "prototype",
            "object-pool"
          ],
        },
        {
          text: "结构型模式",
          icon: "structure",
          collapsible: true,
          prefix: "structural/",
          link: "structural/README.md",
          children: [
            "adapter",
            "bridge",
            "composite",
            "facade",
            "flyweight",
            "proxy",
          ],
        },
        {
          text: "行为型模式",
          icon: "launch",
          collapsible: true,
          prefix: "behavioral/",
          link: "behavioral/README.md",
          children: [
            "chain-of-responsibility",
            "command",
            "iterator",
            "mediator",
            "memento",
            "observer",
            "state",
          ],
        },
        {
          text: "函数模式",
          icon: "function",
          collapsible: true,
          prefix: "function/",
          link: "function/README.md",
          children: [
            "option",
          ],
        },
        {
          text: "并发模式",
          icon: "context",
          collapsible: true,
          prefix: "concurrency/",
          link: "concurrency/README.md",
          children: [
            "exit",
            "producer-consumer",
            "pipeline",
            "fan-in-fan-out"
          ],
        },
      ],
    },
    {
      text: "项目规范",
      icon: "guide",
      collapsible: true,
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
      text: "Go语言",
      icon: "language",
      collapsible: true,
      prefix: "go-language/",
      children: [
        {
          text: "基础",
          collapsible: true,
          prefix: "base/",
          link: "base/README.md",
          children: [
            "enviroment",
            "data-type",
            "identifier",
            "constant",
            "variable",
            "string",
            "array",
            "slice",
            "map",
            "iota",
            "operator",
            "package",
            "defer",
            "recover",
          ],
        },
        {
          text: "进阶",
          collapsible: true,
          prefix: "advance/",
          link: "advance/README.md",
          children: [
            "for-range",
            "break",
            "goroutine",
            "mutex",
            "interface",
          ],
        },
        {
          text: "标准库",
          collapsible: true,
          prefix: "standard-library/",
          link: "standard-library/README.md",
          children: [
            "flag",
          ],
        },
        {
          text: "三方库",
          collapsible: true,
          prefix: "third-party/",
          link: "third-party/README.md",
          children: [
            "pflag",
          ],
        },
        {
          text: "推荐",
          collapsible: true,
          prefix: "recommend/",
          children: "structure",
        },
        {
          text: "转载",
          collapsible: true,
          prefix: "reprint/",
          link: "reprint/README.md",
          children: [
            "uber-guide",
            "tencent-secguide",
            "proverb",
            "zen",
          ],
        },
      ],
    },
    {
      text: "数据库",
      icon: "storage",
      collapsible: true,
      prefix: "database/",
      children: [
        {
          text: "MySQL",
          collapsible: true,
          icon: "mysql",
          prefix: "mysql/",
          link: "mysql/README.md",
          children: [
            "engine",
            "sql-order",
            "join",
            "read-process",
            "write-process",
            "transaction",
            "idx",
          ],
        },
      ],
    },
    {
      text: "网络",
      icon: "network",
      collapsible: true,
      prefix: "network/",
      link: "network/README.md",
      children: [
        "websocket",
        "MQTT",
      ]
    },
    {
      text: "devops",
      icon: "any",
      collapsible: true,
      prefix: "devops/",
      link: "devops/README.md",
      children: [
        "prometheus-k8s-deploy",
        "node-exporter-k8s-deploy",
      ]
    },
  ],
});
