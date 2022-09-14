import { Consola } from "consola";
import { ImportDeclarationStructure, InterfaceDeclarationStructure, StructureKind, VariableDeclarationKind } from "ts-morph";
import { Kudra } from "../../kudra";
import { META_NAME } from "../../meta";
import { KudraOptions } from "../../options";
import { DeepRequired, Layout } from "../../ts";
import { Hookable } from "../../ts/hookable";
import { GlobalStatement, SetsGlobal } from "../../ts/setsGlobal";
import { GlobalsLoaderOptions } from "../global/options.interface";
import { Loadable } from "../loadable";
import * as Runtime from "./runtime";
import { Middleware } from "../../ts";

@Loadable({
  loaderName: "ComponentBase",
  position: "beforeAll",
})
export class ComponentBaseLoader implements Hookable, SetsGlobal {
  public kudra: Kudra;
  public logger: Consola;
  public filePath: string;

  private layouts: Layout = {};
  private middleware: Middleware[] = [];

  constructor(kudra: Kudra, logger: Consola) {
    this.kudra = kudra;
    this.logger = logger;
    this.filePath = kudra.resolveDTS(this.options["filename"]);
  }

  static shouldRun(kudraOptions: DeepRequired<KudraOptions>) {
    return !kudraOptions.componentBase.disable;
  }

  public get options() {
    return this.kudra.kudraOptions.componentBase;
  }

  public setupGlobal(globalOptions: DeepRequired<GlobalsLoaderOptions>, globalStatement: GlobalStatement) {
    if (!globalOptions.globalDefineMiddleware) return;

    globalStatement.statements.push({
      kind: StructureKind.VariableStatement,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "defineMiddleware",
          type: `typeof import('${META_NAME}')['defineMiddleware']`,
        },
      ],
    });

    return Runtime as any;
  }

  public onBuildTemplates({ templateFiles, templateVars, resolve }: any) {
    this.middleware = templateVars.middleware;
    this.layouts = templateVars.layouts;
    this.generateBaseTypes();
  }

  // TODO refactor these two methods, into a single method
  private createLayoutUnion(layout: Layout): string {
    return Object.keys(layout)
      .map((layoutName) => {
        return `"${layoutName}"`;
      })
      .join(" | ");
  }

  private createMiddlewareUnion(middleware: Middleware[]): string {
    return middleware
      .map((middlewareObj) => {
        return `"${middlewareObj.name}"`;
      })
      .join(" | ");
  }

  private generateBaseTypes() {
    const srcFile = this.kudra.project.createSourceFile(this.filePath, "", { overwrite: true });

    const kudraImports: ImportDeclarationStructure = {
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: META_NAME,
      namedImports: ["EmitsOptions", "Vue2ComponentOptions"],
    };

    const IComponentOptionsBase: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: "ComponentOptionsBase",
      isExported: true,
      typeParameters: [
        {
          name: "Props",
        },
        {
          name: "RawBindings",
        },
        {
          name: "D",
        },
        {
          name: "C",
          constraint: "ComputedOptions",
        },
        {
          name: "M",
          constraint: "MethodOptions",
        },
        {
          name: "Mixin",
          constraint: "ComponentOptionsMixin",
        },
        {
          name: "Extends",
          constraint: "ComponentOptionsMixin",
        },
        {
          name: "Emits",
          constraint: "EmitsOptions",
        },
        {
          name: "EmitNames",
          constraint: "string",
          default: "string",
        },
        {
          name: "Defaults",
          default: "{}",
        },
        {
          name: "AsyncD",
          default: "{}",
        },
      ],
      properties: [],
      extends: [
        "ComponentCustomOptions",
        `Omit<Vue2ComponentOptions<Vue, D & AsyncD, M, C, Props>, "data" | "computed" | "methods" | "setup" | "props" | "mixins" | "extends">`,
      ],
    };

    // Load Middleware Prop Type
    if (!this.options.typedProperties.middleware.disable) {
      console.log("Executed");
      if (Array.isArray(kudraImports.namedImports)) {
        kudraImports.namedImports.push("Middleware");
      }

      const strictFlag = this.options.typedProperties.middleware.strict ? "true" : "false";

      console.log("Middleware Union", this.createMiddlewareUnion(this.middleware));

      IComponentOptionsBase.properties?.push({
        name: "middleware",
        hasQuestionToken: true,
        type: `Middleware<${this.createMiddlewareUnion(this.middleware)}, ${strictFlag}>`,
      });
    }

    // Load AsyncData Prop Types
    /* istanbul ignore next */
    if (!this.options.typedProperties.asyncData.disable) {
      if (Array.isArray(kudraImports.namedImports)) {
        kudraImports.namedImports.push("Context");
      }

      IComponentOptionsBase.properties?.push({
        name: "asyncData",
        hasQuestionToken: true,
        type: "(this: undefined, ctx: Context) => Promise<RawBindings> | RawBindings",
      });
    }

    // Load Layout Prop Types
    /* istanbul ignore next */
    if (!this.options.typedProperties.layout.disable) {
      if (Array.isArray(kudraImports.namedImports)) {
        kudraImports.namedImports.push("Layout");
      }

      const strictFlag = this.options.typedProperties.layout.strict ? "true" : "false";

      IComponentOptionsBase.properties?.push({
        name: "layout",
        hasQuestionToken: true,
        type: `Layout<${this.createLayoutUnion(this.layouts)}, ${strictFlag}>`,
      });
    }

    srcFile.addStatements([
      this.kudra.disclaimerComment(),
      kudraImports,
      {
        kind: StructureKind.Module,
        name: `"vue/types/v3-component-options"`,
        statements: [IComponentOptionsBase],
      },
      {
        kind: StructureKind.ExportDeclaration,
      },
    ]);

    srcFile.saveSync();
  }
}
