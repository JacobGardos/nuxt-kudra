import { defineNuxtConfig } from "../../../src";
import kudraModule from "../../../src/module";

export default defineNuxtConfig({
  buildModules: ["@nuxt/typescript-build", kudraModule, "@nuxtjs/vuetify"],
  kudra: {
    experimentalOptions: {
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
