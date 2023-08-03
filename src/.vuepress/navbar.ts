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
        icon: "launch",
        prefix: "behavioral/",
        link: "behavioral/README.md"
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
        link: "mysql/engine.md",
        activeMatch: "^/database/mysql",
      }
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
