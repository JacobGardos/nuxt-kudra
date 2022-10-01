import kudraModule, { defineNuxtConfig } from "../../../src";

export default defineNuxtConfig({
  buildModules: ["@nuxt/typescript-build", kudraModule],
  kudra: {
    experimentalOptions: {
      asyncData: {
        disable: false,
      },
      vuetify: {
        disable: false,
      },
    },
  },
  components: true,
  typescript: {
    typeCheck: true,
  },
});
