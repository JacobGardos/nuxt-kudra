import kudraModule, { defineNuxtConfig } from "../../../src";

export default defineNuxtConfig({
  buildModules: ["@nuxt/typescript-build", kudraModule],
  typescript: {
    typeCheck: true,
  },
});
