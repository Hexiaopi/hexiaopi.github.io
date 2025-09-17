import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "http://blog.cjhe.top",

  author: {
    name: "Hexiaopi",
    url: "https://github.com/Hexiaopi",
  },

  logo: "/logo.png",

  repo: "Hexiaopi/Hexiaopi.github.io",
  repoDisplay: false,

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: '<a href="http://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">备案号: 皖ICP备2022000616号-1</a> | <a href="/about/site.html">关于网站</a>',
  displayFooter: true,
  editLink: false,
  fullscreen: true,

  // 博客相关
  blog: {
    description: "一枚后端攻城狮",
    intro: "/intro.html",
    medias: {
      Email: "mailto:info@hechangjie0619@icloud.com",
      GitHub: "https://github.com/Hexiaopi",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      // "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    slimsearch: true,
    comment: {
      provider: "Giscus",
      repo: "hexiaopi/hexiaopi.github.io",
      repoId: "MDEwOlJlcG9zaXRvcnkyNzUxNzg2OTU=",
      category: "Announcements",
      categoryId: "DIC_kwDOEGbkx84CYNSL",
    },

    icon: {
      assets: "fontawesome-with-brands",
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
      devServer: true,
      devHostname: "localhost",
    },

    components: {
      components: ["Badge", "VPCard", "VPBanner", "PDF", "SiteInfo", "Share", "BiliBili"],
    },
  },

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdown: {
      alert: true,
      align: true, // 自定义对齐
      footnote: true, // 脚注
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      echarts: true,

      // 在启用之前安装 flowchart.ts
      flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      mermaid: true,
      plantuml: true,
      vuePlayground: true,

      math: true,
      mark: true,
      preview: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // RevealJS slides support
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
        themes: [
          "auto",
          "beige",
          "black",
          "blood",
          "league",
          "moon",
          "night",
          "serif",
          "simple",
          "sky",
          "solarized",
          "white",
        ],
      },
    },
});
