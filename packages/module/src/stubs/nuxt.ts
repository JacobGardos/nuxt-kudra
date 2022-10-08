import { NuxtOptions } from "@nuxt/types";
import type Hookable from "hable";
import { LooseClass } from "../ts";

export interface Nuxt extends LooseClass {
  new (options?: object): NuxtInstance;
}

/**
 * Represents the nuxt class defined by packages/core/src/nuxt.js
 * in the nuxtjs repo.
 */
export interface NuxtInstance extends LooseClass, Hookable {
  options: NuxtOptions;
}
