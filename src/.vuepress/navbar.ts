import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/design-pattern/",
  "/go-language/",
  "/database/",
  "/network/",
  "/devops/",
  "/project-standard/",
  {
    text: "变更日志",
    icon: "clock",
    link: "CHANGELOG",
  },
]);
