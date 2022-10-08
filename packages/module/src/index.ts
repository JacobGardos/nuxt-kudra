import { Module } from "@nuxt/types";
import { Kudra } from "./kudra";
import { META_NAME } from "./meta";
import { KudraOptions } from "./options";

declare module "@nuxt/types" {
  interface Configuration {
    [META_NAME]?: KudraOptions;
  }
}

export { meta } from "./meta";
export * from "./runtime";

const kudraModule: Module<KudraOptions> = function (moduleOptions) {
  /* istanbul ignore next */
  if (!this.options.dev) {
    this.options.build.transpile?.push(META_NAME);
  }

  new Kudra(this, moduleOptions);
};

export default kudraModule;
