import { Consola } from "consola";
import { extname } from "path";
import { OptionalKind, PropertySignatureStructure, StatementStructures, StructureKind, VariableDeclarationKind } from "ts-morph";
import { Kudra } from "../../kudra";
import { META_NAME } from "../../meta";
import { KudraOptions } from "../../options";
import { Component, DeepRequired } from "../../ts";
import { Hookable } from "../../ts/hookable";
import { GlobalStatement, SetsGlobal } from "../../ts/setsGlobal";
import { GlobalsLoaderOptions } from "../global/options.interface";
import { Loadable } from "../loadable";
import * as Runtime from "./runtime";

@Loadable("Component")
export class ComponentLoader implements Hookable, SetsGlobal {
  public kudra: Kudra;
  public logger: Consola;
  public filePath: string;
  public components: Component[] = [];

  constructor(kudra: Kudra, logger: Consola) {
    this.kudra = kudra;
    this.logger = logger;
    this.filePath = kudra.resolveDTS(this.options["filename"]);
    this.validateConfig();
  }

  static shouldRun(kudraOptions: DeepRequired<KudraOptions>): boolean {
    return !kudraOptions.componentLoader.disable;
  }

  public get options() {
    return this.kudra.kudraOptions.componentLoader;
  }

  static invalidConfigMsg = `You must set { components: true } in your nuxt config, to use the component loader.`;

  private validateConfig() {
    if (!this.kudra.nuxtOptions.components) {
      this.logger.warn(ComponentLoader.invalidConfigMsg);
    }
  }

  public setupGlobal(globalOptions: DeepRequired<GlobalsLoaderOptions>, globalStatement: GlobalStatement) {
    /* istanbul ignore next */
    if (!globalOptions.globalDefineComponent) return;

    const statementStructures: StatementStructures[] = [
      {
        kind: StructureKind.VariableStatement,
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name: "defineComponent",
            type: `typeof import('${META_NAME}')['defineComponent']`,
          },
        ],
      },
      {
        kind: StructureKind.TypeAlias,
        name: "PropType",
        typeParameters: [
          {
            name: "T",
          },
        ],
        type: `import('${META_NAME}').PropType<T>`,
      },
    ];

    globalStatement.statements.push(...statementStructures);
    return Runtime as any;
  }

  public onComponentsExtend(components: Component[]) {
    this.components = components;
    this.generateComponentTypes();
  }

  public onBuildDone() {
    this.generateComponentTypes();
  }

  private generateComponentTypes() {
    const srcFile = this.kudra.project.createSourceFile(this.filePath, "", { overwrite: true });

    const interfaceProperties: OptionalKind<PropertySignatureStructure>[] = [];

    for (const comp of this.components) {
      // Paths cant end in ts || tsx so remove it it.
      if (extname(comp.filePath) === ".ts" || extname(comp.filePath) === ".tsx") {
        comp.filePath = comp.filePath.replace(/\.[^/.]+$/, "");
      }

      const compPath = this.kudra.resolveRelative(comp.filePath);

      // Add the component
      interfaceProperties.push({
        name: comp.pascalName,
        type: `typeof import("${compPath}")["default"]`,
      });

      // Add the lazy version of the component
      /* istanbul ignore next */
      if (this.options.typeLazy) {
        const lazyName = `Lazy${comp.pascalName}`;
        interfaceProperties.push({
          name: lazyName,
          type: `typeof import("${compPath}")["default"]`,
        });
      }
    }
    srcFile.addStatements([
      this.kudra.disclaimerComment(),
      {
        kind: StructureKind.Module,
        name: `"@vue/runtime-core"`,
        statements: [
          {
            kind: StructureKind.Interface,
            name: "GlobalComponents",
            isExported: true,
            properties: interfaceProperties,
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
