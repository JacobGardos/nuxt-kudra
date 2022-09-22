import { NuxtConfig } from "@nuxt/types";

export const defineNuxtConfig = <T extends NuxtConfig>(config: T): T => {
  return config;
};

export * from "./loaders/component-base/runtime";
export * from "./loaders/component/runtime";
export * from "./loaders/plugin/runtime";
