import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    "slides",
    {
      text: "设计模式",
      icon: "book",
      prefix: "design-pattern/",
      children: [
        {
          text: "创建型模式",
          icon: "class",
          prefix: "creational/",
          link: "creational/README.md",
          children: [
            "simple-factory",
            "factory-method",
            "abstract-factory",
            "singleton",
            "builder",
            "prototype",
            "object-pool"
          ],
        },
        {
          text: "结构型模式",
          icon: "structure",
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
      ],
    },
    {
      text: "项目规范",
      icon: "guide",
      prefix: "/project-standard/",
      children: [
        {
          text: "API规范",
          icon: "api",
          link: "api",
        },
        {
          text: "Git分支规范",
          icon: "branch",
          link: "branch",
        },
        {
          text: "Git提交规范",
          icon: "git",
          link: "commit",
        },
        {
          text: "目录规范",
          icon: "tree",
          link: "directory",
        },
        {
          text: "项目规范",
          icon: "layout",
          link: "project",
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
      icon: "book",
      prefix: "go-language/",
      children: "structure",
    },
    {
      text: "数据库",
      icon: "storage",
      prefix: "database/",
      children: "structure",
    },  
  ],
});
