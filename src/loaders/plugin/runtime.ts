import { Context } from "@nuxt/types";

type Inject = (key: string, value: any) => void;

/**
 * Clone of Plugin type provided by @nuxt/types. However,
 * it now contains an unused generic type (Injections) that allows for
 * type inference down the line.
 *
 * Inspired by nuxt 3 plugin types
 *
 */
type TypedNuxtPlugin<Injections extends Record<string, any> = Record<string, any>> = (ctx: Context, inject: Inject) => Promise<void> | void;

interface KudraPlugin<Injections extends Record<string, any> = Record<string, any>> {
  (ctx: Context): Promise<void> | Promise<{ provide?: Injections }> | void | { provide?: Injections };
}

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] };

// For plugins.d.ts
export type InjectionType<A extends TypedNuxtPlugin> = A extends TypedNuxtPlugin<infer T> ? Decorate<T> : unknown;

// The return function is called by nuxt, and jest can't detect that for some reason
/* istanbul ignore next */
export const definePlugin = <T extends Record<string, any>>(plugin: KudraPlugin<T>): TypedNuxtPlugin<T> => {
  /* istanbul ignore next */
  return async (context, inject) => {
    // 1. Call the plugin
    const injections = await plugin(context);

    // 2. Add the inject keys & values
    if (typeof injections === "object" && "provide" in injections) {
      for (const [key, value] of Object.entries(injections["provide"] || {})) {
        inject(key, value);
      }
    }
  };
};
