import { defineNuxtConfig } from "../../../src";
import kudraModule from "../../../src/module";

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
