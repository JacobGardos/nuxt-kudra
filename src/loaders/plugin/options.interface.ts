import { DeepRequired } from "../../ts";

/**
 * Options for generating global plugin types
 */
export interface PluginsLoaderOptions {
  /**
   * Whether or not to generate global plugin types
   * @default true
   */
  disable?: boolean;
  /**
   * The name of the emitted .d.ts file
   * @default plugins
   */
  filename?: string;
  /**
   * The name of the key used to access
   * plugins in ssr context
   * @default plugins
   */
  injectionKey?: string;
}

export const defaultPluginsLoaderOptions: DeepRequired<PluginsLoaderOptions> = {
  disable: false,
  filename: "plugins",
  injectionKey: "plugins",
};
