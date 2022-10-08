type NotNill<T> = T extends null | undefined ? never : T;

type Primitive = undefined | null | boolean | string | number | Function;

export type DeepRequired<T> = T extends Primitive
  ? NotNill<T>
  : {
      [P in keyof T]-?: T[P] extends Array<infer U>
        ? Array<DeepRequired<U>>
        : T[P] extends ReadonlyArray<infer U2>
        ? DeepRequired<U2>
        : DeepRequired<T[P]>;
    };

export type LooseClass = Record<string, any>;

// Taken Directly From @nuxt/types
export interface Component {
  pascalName: string;
  kebabName: string;
  import: string;
  asyncImport: string;
  export: string;
  filePath: string;
  shortPath: string;
  isAsync?: boolean;
  chunkName: string;
  /** @deprecated */
  global: boolean;
  level: number;
  prefetch: boolean;
  preload: boolean;
}

export interface Layout {
  [key: string]: string;
}

export interface Plugin {
  src: string;
  mode: "all" | "server" | "client";
  name: string;
}

export interface Middleware {
  name: string;
  src: string;
  dst: string;
}
