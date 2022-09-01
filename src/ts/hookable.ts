import { NuxtOptionsHooks } from "@nuxt/types/config/hooks";
import { Component, DeepRequired, LooseClass } from "./index";

type NuxtHooks = DeepRequired<NuxtOptionsHooks>;

export const hookNames = [
  "onReady",
  "onError",
  "onClose",
  "onListen",
  "onRenderBefore",
  "onRenderSetupMiddleware",
  "onRenderErrorMiddleware",
  "onRenderResourcesLoaded",
  "onRenderDone",
  "onRenderRoute",
  "onRenderRouteDone",
  "onModulesBefore",
  "onModulesDone",
  "onBuildBefore",
  "onBuilderPrepared",
  "onBuilderExtendPlugins",
  "onBuildTemplates",
  "onBuildExtendRoutes",
  "onWebpackConfig",
  "onBuildCompile",
  "onBuildCompiled",
  "onBuildDone",
  "onComponentsExtend",
] as const;

type HookName = typeof hookNames[number];

type HookableObj<
  T extends {
    [key in HookName]: any;
  }
> = Partial<T> & LooseClass;

export type Hookable = HookableObj<{
  /**
   * Nuxt is ready to work (ModuleContainer and Renderer ready).
   * @see https://nuxtjs.org/docs/internals-glossary/internals-nuxt/#hooks
   */
  onReady: NuxtHooks["ready"];
  /**
   * An unhandled error when calling hooks.
   * @see https://nuxtjs.org/docs/internals-glossary/internals-nuxt/#hooks
   */
  onError: NuxtHooks["error"];
  /**
   * Nuxt instance is gracefully closing.
   * @see https://nuxtjs.org/docs/internals-glossary/internals-nuxt/#hooks
   */
  onClose: NuxtHooks["close"];
  /**
   * Nuxt internal server starts listening. (Using nuxt start or nuxt dev).
   * @see https://nuxtjs.org/docs/internals-glossary/internals-nuxt/#hooks
   */
  onListen: NuxtHooks["listen"];
  /**
   * Before setting up middleware and resources for the Renderer class, useful to overload some methods or options.
   * @see https://nuxtjs.org/docs/internals-glossary/internals-renderer/#hooks
   */
  onRenderBefore(render: any, options: any): void;
  /**
   * Before Nuxt adds its middleware stack. We can use it to register custom server side middleware.
   * @see https://nuxtjs.org/docs/internals-glossary/internals-renderer/#hooks
   */
  onRenderSetupMiddleware: NuxtHooks["render"]["setupMiddleware"];
  /**
   * Before adding Nuxt error middleware, useful to add your own middleware before using Nuxt's. See the Sentry module for more info.
   * @see https://nuxtjs.org/docs/internals-glossary/internals-renderer/#hooks
   */
  onRenderErrorMiddleware: NuxtHooks["render"]["errorMiddleware"];
  /**
   * Called after resources for renderer are loaded (client manifest, server bundle, etc).
   * @see https://nuxtjs.org/docs/internals-glossary/internals-renderer/#hooks
   */
  onRenderResourcesLoaded: NuxtHooks["render"]["resourcesLoaded"];
  /**
   * SSR Middleware and all resources are ready (Renderer ready)
   * @see https://nuxtjs.org/docs/internals-glossary/internals-renderer/#hooks
   */
  onRenderDone: NuxtHooks["render"]["done"];
  /**
   * Every time a route is server-rendered. Called before sending back the request to the browser.
   * @see https://nuxtjs.org/docs/internals-glossary/internals-renderer/#hooks
   */
  onRenderRoute: NuxtHooks["render"]["route"];
  /**
   * Every time a route is server-rendered. Called after the response has been sent to the browser.
   * @see https://nuxtjs.org/docs/internals-glossary/internals-renderer/#hooks
   */
  onRenderRouteDone: NuxtHooks["render"]["routeDone"];
  /**
   * Called before creating ModuleContainer class, useful to overload methods and options.
   * @see https://nuxtjs.org/docs/internals-glossary/internals-module-container/#hooks
   */
  onModulesBefore: NuxtHooks["modules"]["before"];
  /**
   * 	Called when all modules have been loaded.
   * @see https://nuxtjs.org/docs/internals-glossary/internals-module-container/#hooks
   */
  onModulesDone: NuxtHooks["modules"]["done"];
  /**
   * 	Before Nuxt build started
   * @see https://nuxtjs.org/docs/internals-glossary/internals-builder/#hooks
   */
  onBuildBefore: NuxtHooks["build"]["before"];
  /**
   * 	The build directories have been created
   * @see https://nuxtjs.org/docs/internals-glossary/internals-builder/#hooks
   */
  onBuilderPrepared(nuxt: any, options: any): void;
  /**
   * Generating plugins
   * @see https://nuxtjs.org/docs/internals-glossary/internals-builder/#hooks
   */
  onBuilderExtendPlugins(plugins: any): void;
  /**
   * Generating .nuxt template files
   * @see https://nuxtjs.org/docs/internals-glossary/internals-builder/#hooks
   */
  onBuildTemplates: NuxtHooks["build"]["templates"];
  /**
   * Generating routes
   * @see https://nuxtjs.org/docs/internals-glossary/internals-builder/#hooks
   */
  onBuildExtendRoutes: NuxtHooks["build"]["extendRoutes"];
  /**
   * Before configuration of compilers
   * @see https://nuxtjs.org/docs/internals-glossary/internals-builder/#hooks
   */
  onWebpackConfig(webpackConfigs: any): void;
  /**
   * Before webpack compile (compiler is a webpack Compiler instance), if universal mode, called twice with name 'client' and 'server'
   * @see https://nuxtjs.org/docs/internals-glossary/internals-builder/#hooks
   */
  onBuildCompile: NuxtHooks["build"]["compile"];
  /**
   * webpack build finished
   * @see https://nuxtjs.org/docs/internals-glossary/internals-builder/#hooks
   */
  onBuildCompiled: NuxtHooks["build"]["compiled"];
  /**
   * Nuxt build finished
   * @see https://nuxtjs.org/docs/internals-glossary/internals-builder/#hooks
   */
  onBuildDone: NuxtHooks["build"]["done"];
  onComponentsExtend(loadedComponents: Component[]): void;
}>;

export const hookCallNames: Record<HookName, string> = {
  onReady: "ready",
  onError: "error",
  onClose: "close",
  onListen: "listen",
  onRenderBefore: "render:before",
  onRenderSetupMiddleware: "render:setupMiddleware",
  onRenderErrorMiddleware: "render:errorMiddleware",
  onRenderResourcesLoaded: "render:resourcesLoaded",
  onRenderDone: "render:done",
  onRenderRoute: "render:route",
  onRenderRouteDone: "render:routeDone",
  onModulesBefore: "modules:before",
  onModulesDone: "modules:done",
  onBuildBefore: "build:before",
  onBuilderPrepared: "builder:prepared",
  onBuilderExtendPlugins: "builder:extendPlugins",
  onBuildTemplates: "build:templates",
  onBuildExtendRoutes: "build:extendRoutes",
  onWebpackConfig: "webpack:config",
  onBuildCompile: "build:compile",
  onBuildCompiled: "build:compiled",
  onBuildDone: "build:done",
  onComponentsExtend: "components:extend",
};
