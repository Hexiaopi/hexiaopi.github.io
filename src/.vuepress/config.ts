import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Hexiaopi",
  description: "一枚后端攻城狮的个人博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
