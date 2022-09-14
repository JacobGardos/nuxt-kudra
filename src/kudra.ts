import { NuxtOptions } from "@nuxt/types";
import { ModuleThis } from "@nuxt/types/config/module";
import consola, { Consola } from "consola";
import merge from "deepmerge";
import jetpack from "fs-jetpack";
import { relative, resolve } from "path";
import { Project, WriterFunction } from "ts-morph";
import { ComponentLoader } from "./loaders/component";
import { ComponentBaseLoader } from "./loaders/component-base";
import { ExperimentalLoader } from "./loaders/experimental";
import { GlobalLoader } from "./loaders/global";
import { Loader, LoaderClass } from "./loaders/loadable";
import { PluginLoader } from "./loaders/plugin";
import { META_NAME } from "./meta";
import { defaultOptions, KudraOptions } from "./options";
import { NuxtInstance } from "./stubs/nuxt";
import { DeepRequired } from "./ts";
import { hookCallNames } from "./ts/hookable";
import figlet from "figlet";

export class Kudra {
  public moduleThis: ModuleThis;
  public nuxt: NuxtInstance;
  public nuxtOptions: NuxtOptions;
  public kudraOptions: DeepRequired<KudraOptions>;
  public project: Project;
  public logger: Consola;
  public loaders: Loader[] = [];

  constructor(moduleThis: ModuleThis, moduleOptions: KudraOptions) {
    this.moduleThis = moduleThis;
    this.nuxt = moduleThis.nuxt;
    this.nuxtOptions = moduleThis.options;
    this.nuxtOptions.kudra = this.compileOptions(moduleOptions);
    this.kudraOptions = this.compileOptions(moduleOptions);

    this.logger = consola.withTag(META_NAME);
    this.project = new Project();

    this.setupDir();
    this.setupLoaders([ComponentBaseLoader, GlobalLoader, ComponentLoader, PluginLoader, ExperimentalLoader]);
    this.setupHooks();

    this.nuxt.callHook(META_NAME, this);
  }

  /**
   * Builds a completed options object by merging kudra options
   * with the default options.
   * @param moduleOptions ModuleOptions parameter passed to the nuxt module function
   */
  private compileOptions(moduleOptions: KudraOptions): DeepRequired<KudraOptions> {
    const providedOptions = {
      ...moduleOptions,
      ...(this.nuxtOptions["kudra"] || {}),
    };
    const completeOptions = merge.all([defaultOptions, providedOptions]) as DeepRequired<KudraOptions>;
    return completeOptions;
  }

  /**
   * Cleans the stub directory.
   */
  private setupDir() {
    const outputDir = this.outDir;
    /* istanbul ignore next */
    if (!outputDir) return; // Jetpack will delete the cwd if outputDir undefined. This insures that cant happen
    jetpack.remove(outputDir);
  }

  /**
   * Loads a list of loaders and only instantiates them if their shouldRun static method
   * returns true.
   * @param loaders List of loaders to instantiate
   */
  private setupLoaders(loaderClasses: LoaderClass[]) {
    const beforeAll: LoaderClass[] = [];
    const sequence: LoaderClass[] = [];
    const afterAll: LoaderClass[] = [];

    const createLoader = (loader: LoaderClass) => {
      if (!loader.shouldRun(this.kudraOptions)) return; // Check if the loader should run

      // Create a custom logger for loader.
      /* istanbul ignore next */
      const loaderName = loader.loaderName || loader.name;
      const logger = consola.withTag(`${loaderName}-Loader`);

      // Instantiate the loader
      const loaderInstance = new loader(this, logger);

      // Add it to the list
      this.loaders.push(loaderInstance);

      // Log out that the loader was added
      /* istanbul ignore next */
      if (this.kudraOptions.log.loaderAdded) {
        this.logger.success(`${loaderName} loader added`);
      }
    };

    // Order the loaders appropriately
    for (const loader of loaderClasses) {
      switch (loader.position) {
        case "afterAll": {
          afterAll.push(loader);
          break;
        }
        case "beforeAll": {
          beforeAll.push(loader);
          break;
        }
        default: {
          sequence.push(loader);
        }
      }
    }

    const orderedLoaderClasses: LoaderClass[] = [...beforeAll, ...sequence, ...afterAll];
    orderedLoaderClasses.forEach((loaderClass) => createLoader(loaderClass));
  }

  /**
   * Setups the loader defined hook methods, if they exist.
   */
  private setupHooks() {
    for (const loader of this.loaders) {
      for (const [key, callName] of Object.entries(hookCallNames)) {
        /* istanbul ignore next */
        if (loader[key] !== undefined) {
          this.nuxt.hook(callName, (...args: any[]) => loader[key](...args));
        }
      }
    }
  }

  /**
   * The absolute path to the output directory specified in the
   * nuxt config kudra options.
   */
  public get outDir(): string {
    return resolve(this.nuxtOptions.rootDir, this.kudraOptions.outputDir);
  }

  /**
   * Cleans the path separator found in a path. Useful to avoid
   * errors in .d.ts files where paths contain '\\' as their separator
   * @param path Path to sanitize
   */
  public sanitizePathSeparator(path: string): string {
    return path.replaceAll("\\", this.kudraOptions.pathSeparator);
  }

  /**
   * Resolves an absolute path starting from the outputDir defined in the
   * nuxt config kudra options.
   */
  public resolvePath(...args: string[]): string {
    const resolvedPath = resolve(this.outDir, ...args);
    return this.sanitizePathSeparator(resolvedPath);
  }

  /**
   * Resolves an relative path starting from the outputDir defined in the
   * nuxt config kudra options.
   */
  public resolveRelative(filePath: string): string {
    const relativePath = relative(this.outDir, filePath);
    return this.sanitizePathSeparator(relativePath);
  }

  /**
   * Resolves a path to a file in the templates directory.
   * @param paths relatives path segments inside the templates dir
   */
  public resolveTemplate(...paths: string[]): string {
    return resolve(__dirname, "../templates", ...paths);
  }

  /**
   * Resolves an absolute path to a .d.ts file starting from the
   * outputDir defined in the nuxt config kudra options.
   */
  public resolveDTS(...args: string[]): string {
    const resolvedPath = this.resolvePath(...args) + ".d.ts";
    return resolvedPath;
  }

  /**
   * Returns a writer function that generates a disclaimer comment
   * that should be placed at the top of every stub file.
   */
  public disclaimerComment(): WriterFunction {
    // Copied from ts-morph JSDocStructurePrinter.ts
    /* istanbul ignore next */
    return (writer) => {
      if (!this.kudraOptions.disclaimerText) return;

      const kudraText = figlet.textSync(META_NAME, {
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      });

      var text = `${kudraText}\nThis file was auto-generated by ${META_NAME} \nDo not make changes to this file because its contents will be overwritten.`;

      const lines = text.split(/\r?\n/);
      const isSingleLine = lines.length <= 1;
      const startsWithNewLine = lines[0].length === 0;
      const startIndex = startsWithNewLine ? 1 : 0;

      writer.write("/**");
      if (isSingleLine) writer.space();
      else writer.newLine();

      if (isSingleLine) writer.write(lines[startIndex]);
      else {
        for (let i = startIndex; i < lines.length; i++) {
          writer.write(` *`);

          if (lines[i].length > 0) writer.write(` ${lines[i]}`);

          writer.newLine();
        }
      }

      writer.spaceIfLastNot();
      writer.write("*/").blankLine();
    };
  }
}
