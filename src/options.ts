import { ComponentsLoaderOptions, defaultComponentLoaderOptions } from "./loaders/component/options.interface";
import { defaultExperimentalLoaderOptions, ExperimentalLoaderOptions } from "./loaders/experimental/options.interface";
import { defaultGlobalsLoaderOptions, GlobalsLoaderOptions } from "./loaders/global/options.interface";
import { defaultPluginsLoaderOptions, PluginsLoaderOptions } from "./loaders/plugin/options.interface";
import { DeepRequired } from "./ts";

export interface KudraOptions {
  /**
   * The directory where the declaration files will be generated.
   * Can be a relative or absolute path to a directory.
   *
   * Should be an empty directory which does not contain important
   * files as the directory will be frequently deleted.
   *
   * @default "./kudra"
   */
  outputDir?: string;
  /**
   * Path separator to use when resolving paths
   * in .d.ts files.
   * @default /
   */
  pathSeparator?: string;
  /**
   * Configures which messages kudra should log
   */
  log?: {
    /**
     * Log out which loaders have been added
     * @default true
     */
    loaderAdded?: boolean;
  };
  componentLoader?: ComponentsLoaderOptions;
  pluginLoader?: PluginsLoaderOptions;
  globalsLoader?: GlobalsLoaderOptions;
  experimentalOptions?: ExperimentalLoaderOptions;
}

export type CompleteOptions = DeepRequired<KudraOptions>;

export const defaultOptions: DeepRequired<KudraOptions> = {
  outputDir: "./kudra",
  pathSeparator: "/",
  log: {
    loaderAdded: true,
  },
  componentLoader: defaultComponentLoaderOptions,
  pluginLoader: defaultPluginsLoaderOptions,
  globalsLoader: defaultGlobalsLoaderOptions,
  experimentalOptions: defaultExperimentalLoaderOptions,
};
