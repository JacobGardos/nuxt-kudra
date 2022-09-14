import theme from "@nuxt/content-theme-docs";

export default theme({
  head: {
    meta: [
      {
        hid: "og:image",
        property: "og:image",
        content: "/preview.png",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "nuxt-kudra/preview.png",
      },
    ],
  },
  docs: {
    primaryColor: "#2e72bc",
  },
  target: "static",
  router: {
    base: "/nuxt-kudra/",
  },
  build: {
    publicPath: "/nuxt-kudra/",
  },
});
