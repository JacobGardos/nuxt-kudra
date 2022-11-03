import { ModuleContainer } from "@nuxt/core";
import merge from "deepmerge";
import ComponentGenerator from "./generators/component";
import { Kudra } from "./kudra";
import { defaultKudraOptions, KudraOptions } from "./kudra/options";
import { META_NAME } from "./meta";

declare module "@nuxt/types" {
  interface Configuration {
    [META_NAME]?: KudraOptions;
  }
}

export default function KudraModule(this: ModuleContainer, moduleOptions: KudraOptions) {
  const kudraOptions = merge.all([defaultKudraOptions, moduleOptions, this.options[META_NAME] || {}]) as KudraOptions;
  const kudra = new Kudra(this, kudraOptions);

  if (kudraOptions.useDefaultGenerators) {
    kudra.loadGenerator([ComponentGenerator({ name: "s" })]);
  }

  kudra.loadGenerator(kudraOptions.generators);
}
