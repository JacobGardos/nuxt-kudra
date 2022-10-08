import { DeepRequired } from "../../ts";

export interface ComponentBaseLoaderOptions {
  /**
   * Whether or not to disable the component base loader
   * @default false
   */
  disable?: boolean;
  /**
   * The name of the emitted .d.ts file
   * @default component-base
   */
  filename?: string;
  /**
   * Options for generating types used in the defineComponent function
   */
  typedProperties?: {
    asyncData?: {
      /**
       * Whether or not to generate asyncData related types
       * @default false
       */
      disable?: boolean;
    };
    layout?: {
      /**
       * Whether or not to generate types for layout names
       * @default false
       */
      disable?: boolean;
      /**
       * Enable strict layout names when defining components
       * @default true
       */
      strict?: boolean;
    };

    middleware?: {
      /**
       * Whether or not to generate middleware types
       * @default false
       */
      disable?: boolean;
      /**
       * Enable strict middleware names when defining pages
       * @default true
       */
      strict?: boolean;
    };
  };
}

export const defaultComponentBaseLoaderOptions: DeepRequired<ComponentBaseLoaderOptions> = {
  disable: false,
  filename: "component-base",
  typedProperties: {
    asyncData: {
      disable: false,
    },
    layout: {
      disable: false,
      strict: true,
    },
    middleware: {
      disable: false,
      strict: true,
    },
  },
};
