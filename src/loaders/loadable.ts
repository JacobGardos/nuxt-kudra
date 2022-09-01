import { Consola } from "consola";
import { Kudra } from "../kudra";
import { KudraOptions } from "../options";
import { DeepRequired, LooseClass } from "../ts";
import { Hookable } from "../ts/hookable";
import { SetsGlobal } from "../ts/setsGlobal";

export interface LoaderOptions {
  /** The name of the loader. Do not include the word loader, it will be prefixed later */
  loaderName?: string;
  /**
   * When to execute the loader.
   *
   * afterAll -> loader will be executed after all other loaders have been instantiated and
   * added, but before any of their hookable methods are called.
   *
   */
  position?: "afterAll";
}

export interface LoaderClass extends LoaderOptions {
  new (kudra: Kudra, logger: Consola): Loader;
  shouldRun(kudraOptions: DeepRequired<KudraOptions>): boolean;
}

export interface Loader extends LooseClass, Hookable, SetsGlobal {}

export function Loadable(options: string | LoaderOptions) {
  return <U extends LoaderClass>(constructor: U) => {
    const _options: LoaderOptions =
      typeof options == "string"
        ? {
            loaderName: options,
          }
        : options;

    constructor.loaderName = _options.loaderName;
    constructor.position = _options.position;
    return constructor;
  };
}
