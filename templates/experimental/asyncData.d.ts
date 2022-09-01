import { Context } from "@nuxt/types";
import { ComponentOptions as Vue2ComponentOptions } from "vue/types/options";
import { EmitsOptions } from "vue/types/v3-setup-context";

declare module "vue/types/v3-component-options" {
  export interface ComponentOptionsBase<
    Props,
    RawBindings,
    D,
    C extends ComputedOptions,
    M extends MethodOptions,
    Mixin extends ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin,
    Emits extends EmitsOptions,
    EmitNames extends string = string,
    Defaults = {},
    AsyncD = {}
  > extends Omit<
        Vue2ComponentOptions<Vue, D & AsyncD, M, C, Props>,
        "data" | "computed" | "methods" | "setup" | "props" | "mixins" | "extends"
      >,
      ComponentCustomOptions {
    asyncData?: (this: undefined, ctx: Context) => Promise<RawBindings> | RawBindings;
  }
}

export {};
