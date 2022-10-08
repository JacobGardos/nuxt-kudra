import { Consola } from "consola";
import { extname } from "path";
import { StructureKind, VariableDeclarationKind } from "ts-morph";
import { Kudra } from "../../kudra";
import { META_NAME } from "../../meta";
import { KudraOptions } from "../../options";
import { DeepRequired, Plugin } from "../../ts";
import { Hookable } from "../../ts/hookable";
import { GlobalStatement, SetsGlobal } from "../../ts/setsGlobal";
import { GlobalsLoaderOptions } from "../global/options.interface";
import { Loadable } from "../loadable";
import * as Runtime from "./runtime";

@Loadable({
  loaderName: "Plugin",
})
export class PluginLoader implements Hookable, SetsGlobal {
  public kudra: Kudra;
  public logger: Consola;
  public filePath: string;
  public plugins: Plugin[] = [];

  constructor(kudra: Kudra, logger: Consola) {
    this.kudra = kudra;
    this.logger = logger;
    this.filePath = kudra.resolveDTS(this.options["filename"]);
  }

  static shouldRun(kudraOptions: DeepRequired<KudraOptions>) {
    return kudraOptions.pluginLoader.disable !== true;
  }

  public get options() {
    return this.kudra.kudraOptions.pluginLoader;
  }

  public setupGlobal(globalOptions: DeepRequired<GlobalsLoaderOptions>, globalStatement: GlobalStatement) {
    /* istanbul ignore next */
    if (!globalOptions.globalDefinePlugin) return;

    globalStatement.statements.push({
      kind: StructureKind.VariableStatement,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "definePlugin",
          type: `typeof import('${META_NAME}')['definePlugin']`,
        },
      ],
    });

    return Runtime as any;
  }

  public onBuildBefore() {
    this.kudra.moduleThis.addPlugin({
      fileName: "kudra/plugin.js",
      src: this.kudra.resolveTemplate("plugin.js"),
      options: {
        injectKey: this.options["injectionKey"],
      },
    });
  }

  public async onBuildTemplates({ templateVars }: any) {
    const loadedPlugins: Plugin[] = templateVars.plugins;
    const preparedPlugins: Plugin[] = [];

    for (const plugin of loadedPlugins) {
      if (extname(plugin.src) !== ".ts") continue;

      // Paths cant end in ts so remove it it.
      /* istanbul ignore next */
      if (extname(plugin.src) === ".ts") {
        plugin.src = plugin.src.replace(/\.[^/.]+$/, "");
      }

      const filePath = this.kudra.resolveRelative(plugin.src);

      preparedPlugins.push({
        mode: plugin.mode,
        name: plugin.name,
        src: filePath,
      });
    }

    this.plugins = preparedPlugins;
    this.generatePluginTypes();
  }

  public onBuildDone() {
    this.generatePluginTypes();
  }

  static buildInjectionType(filePath: string): string {
    return `InjectionType<typeof import("${filePath}")["default"]>`;
  }

  private generatePluginTypes() {
    const srcFile = this.kudra.project.createSourceFile(this.filePath, "", { overwrite: true });

    const ssrInjectionTypes: string[] = [];
    const clientInjectionTypes: string[] = [];

    for (const plugin of this.plugins) {
      switch (plugin.mode) {
        case "client": {
          clientInjectionTypes.push(PluginLoader.buildInjectionType(plugin.src));
          break;
        }
        case "server": {
          ssrInjectionTypes.push(PluginLoader.buildInjectionType(plugin.src));
          break;
        }
        default: {
          ssrInjectionTypes.push(PluginLoader.buildInjectionType(plugin.src));
          clientInjectionTypes.push(PluginLoader.buildInjectionType(plugin.src));
        }
      }
    }

    /* istanbul ignore next */
    const clientInjectionStr = clientInjectionTypes.length > 0 ? clientInjectionTypes.join("&\n") : "{}";
    /* istanbul ignore next */
    const ssrInjectionStr = ssrInjectionTypes.length > 0 ? ssrInjectionTypes.join("&\n") : "{}";

    srcFile.addStatements([
      this.kudra.disclaimerComment(),
      {
        kind: StructureKind.ImportDeclaration,
        moduleSpecifier: META_NAME, // TODO Change this
        namedImports: ["InjectionType"],
      },
      {
        kind: StructureKind.TypeAlias,
        name: "NuxtAppClientInjection",
        isExported: true,
        type: clientInjectionStr,
      },
      {
        kind: StructureKind.Module,
        name: `'vue/types/vue'`,
        hasDeclareKeyword: true,
        statements: [
          {
            kind: StructureKind.Interface,
            name: "Vue",
            extends: ["NuxtAppClientInjection"],
          },
        ],
      },
      {
        kind: StructureKind.TypeAlias,
        name: "NuxtAppSSRInjection",
        isExported: true,
        type: ssrInjectionStr,
      },
      {
        kind: StructureKind.Module,
        name: `'@nuxt/types'`,
        hasDeclareKeyword: true,
        statements: [
          {
            kind: StructureKind.Interface,
            name: "NuxtAppOptions",
            extends: ["NuxtAppSSRInjection"],
          },
          {
            kind: StructureKind.Interface,
            name: "Context",
            properties: [
              {
                name: `$${this.options.injectionKey}`,
                type: "NuxtAppSSRInjection",
              },
            ],
          },
        ],
      },
      {
        kind: StructureKind.ExportDeclaration,
      },
    ]);

    srcFile.saveSync();
  }
}
