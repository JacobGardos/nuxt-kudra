declare module "@nuxt/core" {
  // export type Module<T = any> = (this: ModuleContainer, moduleOptions: T) => Promise<void> | void;

  import { Server } from "@nuxt/server";
  export const __esModule: boolean;
  export const loadNuxtConfig: any;
  export class ModuleContainer {
    constructor(nuxt: any);
    nuxt: Nuxt;
    options: any;
    requiredModules: {};
    ready(): Promise<void>;
    addVendor(): void;
    addTemplate(template: any): {
      src: string;
      dst: any;
      options: any;
    };
    addPlugin(template: any): void;
    addLayout(template: any, name: any): void;
    addErrorLayout(dst: any): void;
    addServerMiddleware(middleware: any): void;
    extendBuild(fn: any): void;
    extendRoutes(fn: any): void;
    requireModule(
      moduleOpts: any,
      {
        paths,
      }?: {
        paths: any;
      }
    ): Promise<any>;
    addModule(moduleOpts: any, arg2: any, arg3: any): Promise<any>;
  }
  const Nuxt_base: any;
  export class Nuxt extends Nuxt_base {
    [x: string]: any;
    static get version(): string;
    constructor(options?: {});
    options: any;
    resolver: Resolver;
    moduleContainer: ModuleContainer;
    showReady: () => void;
    ready(): any;
    _ready: any;
    _init(): any;
    _initCalled: boolean;
    _initServer(): void;
    server: Server;
    renderer: any;
    render: any;
    close(callback: any): Promise<void>;
  }
  export class Resolver {
    constructor(nuxt: any);
    nuxt: any;
    options: any;
    resolvePath(
      path$1: any,
      {
        alias,
        isAlias,
        module,
        isModule,
        isStyle,
        paths,
      }?: {
        alias: any;
        isAlias?: any;
        module: any;
        isModule?: any;
        isStyle: any;
        paths: any;
      }
    ): any;
    resolveAlias(path$1: any): string;
    resolveModule(
      path: any,
      {
        paths,
      }?: {
        paths: any;
      }
    ): any;
    requireModule(
      path: any,
      {
        alias,
        isAlias,
        intropDefault,
        interopDefault,
        paths,
      }?: {
        alias: any;
        isAlias?: any;
        intropDefault: any;
        interopDefault?: any;
        paths: any;
      }
    ): any;
    _createRequire: any;
    _require: any;
  }
  export function loadNuxt(loadOptions: any): Promise<Nuxt>;
  export { ModuleContainer as Module };
}

//# sourceMappingURL=core.d.ts.map
