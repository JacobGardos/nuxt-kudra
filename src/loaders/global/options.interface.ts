import { DeepRequired } from "../../ts";

/**
 * Options for globally generated types
 */
export interface GlobalsLoaderOptions {
  /**
   * Whether or not to disable the generation of all global types
   *
   * @default false
   */
  disable?: boolean;
  /**
   * The name of the emitted .d.ts file
   *
   * @default globals
   */
  filename?: string;
  /**
   * Whether or not to make defineComponent available globally
   *
   * @default true
   */
  globalDefineComponent?: boolean;
  /**
   * Whether or not to make definePlugin available globally
   *
   * @default true
   */
  globalDefinePlugin?: boolean;
  /**
   * Whether or not to make defineMiddleware available globally
   */
  globalDefineMiddleware?: boolean;
}

export const defaultGlobalsLoaderOptions: DeepRequired<GlobalsLoaderOptions> = {
  disable: false,
  filename: "globals",
  globalDefineComponent: true,
  globalDefinePlugin: true,
  globalDefineMiddleware: true,
};
