import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { cut } from "nodejs-jieba";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Hexiaopi",
  description: "一枚后端攻城狮的个人博客",

  theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
      hotReload: true,
      customFields: [
        {
          getter: ({ frontmatter }) => frontmatter.tag as string[],
          formatter: `Tag: $content`,
        },
      ],
      indexOptions: {
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
