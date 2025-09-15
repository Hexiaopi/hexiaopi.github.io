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

  // 在这里配置主题提供的插件
  plugins: {
    // 图标配置
    icon: {
      assets: "fontawesome-with-brands",
    },

    blog: true,
    
    // 使用新的搜索插件
    slimsearch: true,
    
    comment: {
      provider: "Giscus",
      repo: "hexiaopi/hexiaopi.github.io",
      repoId: "MDEwOlJlcG9zaXRvcnkyNzUxNzg2OTU=",
      category: "Announcements",
      categoryId: "DIC_kwDOEGbkx84CYNSL",
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
});
