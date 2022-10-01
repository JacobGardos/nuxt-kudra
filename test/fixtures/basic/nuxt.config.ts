import kudraModule, { defineNuxtConfig } from "../../../src";

export default defineNuxtConfig({
  buildModules: ["@nuxt/typescript-build", kudraModule],
  plugins: ["~/plugins/plugin.client.ts", "~/plugins/plugin.server.ts", "~/plugins/plugin.ts"],
  components: true,
  typescript: {
    typeCheck: true,
  },
});
