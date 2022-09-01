import { defineNuxtConfig } from "../../../src";
import kudraModule from "../../../src/module";

export default defineNuxtConfig({
  buildModules: ["@nuxt/typescript-build", kudraModule],
  typescript: {
    typeCheck: true,
  },
});
