import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "个人博客",
  description: "何小进童鞋的个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
