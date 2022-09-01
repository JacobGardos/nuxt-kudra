import { defineNuxtConfig } from "../../../src";
import kudraModule from "../../../src/module";

export default defineNuxtConfig({
  buildModules: ["@nuxt/typescript-build", kudraModule],
  plugins: ["~/plugins/plugin.client.ts", "~/plugins/plugin.server.ts", "~/plugins/plugin.ts"],
  components: true,
  typescript: {
    typeCheck: true,
  },
});
