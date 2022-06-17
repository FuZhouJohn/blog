import { defineConfig } from "vitepress";

export default defineConfig({
  title: "爱叫啥叫啥",
  lang: "zh-cmn-Hans",
  description: "Just playing around.",
  themeConfig: {
    nav: [
      { text: "Blog", link: "/blog/" },
      { text: "Notes", link: "/notes" },
    ],
    logo: "/badminton.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/FuZhouJohn" }],
    sidebar: {},
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Zhuang Ji Nan",
    },
  },
});
