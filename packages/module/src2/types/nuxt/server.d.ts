declare module "@nuxt/server" {
  export const __esModule: boolean;
  export class Listener {
    constructor({
      port,
      host,
      socket,
      https,
      app,
      dev,
      baseURL,
    }: {
      port: any;
      host: any;
      socket: any;
      https: any;
      app: any;
      dev: any;
      baseURL: any;
    });
    port: any;
    host: any;
    socket: any;
    https: any;
    app: any;
    dev: any;
    baseURL: any;
    listening: boolean;
    _server: any;
    server: any;
    address: any;
    url: any;
    close(): Promise<void>;
    computeURL(): void;
    listen(): Promise<void>;
    serverErrorHandler(error: any): Promise<void>;
  }
  export class Server {
    constructor(nuxt: any);
    nuxt: any;
    options: any;
    globals: any;
    publicPath: any;
    resources: {};
    listeners: any[];
    app: any;
    devMiddleware: any;
    ready(): Promise<Server>;
    _readyCalled: boolean;
    serverContext: ServerContext;
    renderer: any;
    setupMiddleware(): Promise<void>;
    _normalizeMiddleware(middleware: any): any;
    _requireMiddleware(entry: any): any;
    resolveMiddleware(middleware: any, fallbackRoute?: string): any;
    useMiddleware(middleware: any): void;
    replaceMiddleware(query: any, middleware: any): any;
    unloadMiddleware({ handle }: { handle: any }): void;
    serverMiddlewarePaths(): any;
    renderRoute(...args: any[]): any;
    loadResources(...args: any[]): any;
    renderAndGetWindow(
      url: any,
      opts?: {},
      {
        loadingTimeout,
        loadedCallback,
        globals,
      }?: {
        loadingTimeout?: number;
        loadedCallback?: any;
        globals?: any;
      }
    ): Promise<any>;
    listen(port: any, host: any, socket: any): Promise<Listener>;
    close(): Promise<void>;
    __closed: boolean;
  }
  class ServerContext {
    constructor(server: any);
    nuxt: any;
    globals: any;
    options: any;
    resources: any;
  }
  export {};
  //# sourceMappingURL=server.d.ts.map
}
