import { META_NAME } from "./meta";
import { KudraOptions } from "./options";

declare module "@nuxt/types" {
  interface Configuration {
    [META_NAME]?: KudraOptions;
  }
}

export { meta } from "./meta";
export * from "./runtime";
