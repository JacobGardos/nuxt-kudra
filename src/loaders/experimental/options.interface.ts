import { DeepRequired } from "../../ts";

/**
 * Options for loading experimental features.
 * Use with caution
 */
export interface ExperimentalLoaderOptions {
  /**
   * The name of the experimental types directory
   *
   * @default experimental
   */
  directoryName?: string;
  asyncData?: {
    /**
     * The name of the emitted .d.ts file
     *
     * @default asyncData
     */
    filename?: string;
    /**
     * Whether or not to generate experimental asyncData types
     * @default true
     */
    disable?: boolean;
  };
  vuetify?: {
    /**
     * The name of the experimental vuetify types directory
     *
     * @default vuetify
     */
    directoryName?: string;
    /**
     * Whether or not to generate experimental vuetify types
     * @default true
     */
    disable?: boolean;
    /**
     * The name of the components emitted .d.ts file
     *
     * @default components
     */
    componentsFilename?: string;
    /**
     * The name of the emitted .d.ts file
     *
     * @default lib
     */
    filename?: string;
  };
}

export const defaultExperimentalLoaderOptions: DeepRequired<ExperimentalLoaderOptions> = {
  directoryName: "experimental",
  asyncData: {
    disable: true,
    filename: "asyncData",
  },
  vuetify: {
    directoryName: "vuetify",
    disable: true,
    filename: "lib",
    componentsFilename: "components",
  },
};
