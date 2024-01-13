import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的项目哦~",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "示例", link: "/page/page1" },
    ],

    sidebar: {
      "/page/": [
        {
          text: "Page",
          items: [
            { text: "Markdown Examples", link: "/page/page1" },
            // { text: "Runtime API Examples", link: "/page/api-examples" },
          ],
        },
      ],
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Markdown Examples", link: "/page/markdown-examples" },
      //     { text: "Runtime API Examples", link: "/page/api-examples" },
      //   ],
      // },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
