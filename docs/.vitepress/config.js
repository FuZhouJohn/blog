import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Zhuang Jinan",
  titleTemplate: "Zhuang Jinan",
  lang: "zh-cmn-Hans",
  description: "Just playing around.",
  themeConfig: {
    nav: [
      { text: "Blog", link: "/blog/" },
      { text: "Notes", link: "/notes/" },
    ],
    logo: "/21.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/FuZhouJohn" }],
    sidebar: {},
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Zhuang Jinan",
    },
  },
  lastUpdated: true,
});
