import { DeepRequired } from "../../ts";

/**
 * Options for generating global component types
 */
export interface ComponentsLoaderOptions {
  /**
   * Whether or not to disable the component loader
   * @default true
   */
  disable?: boolean;
  /**
   * Whether or not to generate the types for the lazy version's of the global components
   * @default true
   */
  typeLazy?: boolean;
  /**
   * The name of the emitted .d.ts file
   * @default components
   */
  filename?: string;
}

export const defaultComponentLoaderOptions: DeepRequired<ComponentsLoaderOptions> = {
  disable: false,
  typeLazy: true,
  filename: "components",
};
