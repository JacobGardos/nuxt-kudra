import { Consola } from "consola";
import { ModuleDeclarationKind, StructureKind } from "ts-morph";
import webpack from "webpack";
import { Kudra } from "../../kudra";
import { KudraOptions } from "../../options";
import { DeepRequired } from "../../ts";
import { Hookable } from "../../ts/hookable";
import { GlobalStatement, WebpackPluginOptions } from "../../ts/setsGlobal";
import { Loadable } from "../loadable";

@Loadable({
  loaderName: "Global",
  position: "afterAll",
})
export class GlobalLoader implements Hookable {
  public kudra: Kudra;
  public logger: Consola;
  public filePath: string;
  public globalStatement: GlobalStatement = {
    kind: StructureKind.Module,
    name: "global",
    declarationKind: ModuleDeclarationKind.Global,
    hasDeclareKeyword: true,
    statements: [],
  };

  constructor(kudra: Kudra, logger: Consola) {
    this.kudra = kudra;
    this.logger = logger;
    this.filePath = kudra.resolveDTS(this.options["filename"]);
    this.setup();
  }

  static shouldRun(kudraOptions: DeepRequired<KudraOptions>): boolean {
    return !kudraOptions.globalsLoader.disable;
  }

  public get options() {
    return this.kudra.kudraOptions.globalsLoader;
  }

  private setup() {
    const webpackPlugins: WebpackPluginOptions[] = [];

    for (const loader of this.kudra.loaders) {
      if (loader.setupGlobal) {
        const webpackPlugin = loader.setupGlobal(this.options, this.globalStatement);
        webpackPlugins.push(webpackPlugin);
      }
    }

    const webpackOptions: WebpackPluginOptions = Object.assign({}, ...webpackPlugins);
    this.kudra.nuxt.options.build.plugins!.push(new webpack.DefinePlugin(webpackOptions));
  }

  public onBuildBefore() {
    const srcFile = this.kudra.project.createSourceFile(this.filePath, "", { overwrite: true });

    srcFile.addStatements([
      this.kudra.disclaimerComment(),
      this.globalStatement,
      {
        kind: StructureKind.ExportDeclaration,
      },
    ]);
    srcFile.saveSync();
  }
}
