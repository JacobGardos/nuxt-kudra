import { Context } from "@nuxt/types";
import { LiteralUnion } from "type-fest";
export type { ComponentOptions as Vue2ComponentOptions } from "vue/types/options";
export type { EmitsOptions } from "vue/types/v3-setup-context";
export type { Context } from "@nuxt/types";

export type LayoutFN<T> = (ctx: Context) => T;

export type Layout<T, Strict extends boolean = false> = Strict extends true
  ? T | LayoutFN<T>
  : LiteralUnion<T, string> | LayoutFN<LiteralUnion<T, string>>;
