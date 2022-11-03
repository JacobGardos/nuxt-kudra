import { NuxtConfig } from "@nuxt/types";
import KudraV2 from "../../../src2";

export default <NuxtConfig>{
  buildModules: ["@nuxt/typescript-build", KudraV2],
  typescript: {
    typeCheck: false,
  },
};
