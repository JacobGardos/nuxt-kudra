import { ModuleDeclarationStructure, StatementStructures } from "ts-morph";
import { DefinePlugin } from "webpack";
import { DeepRequired } from ".";
import { KudraOptions } from "../options";

export interface GlobalStatement extends ModuleDeclarationStructure {
  statements: StatementStructures[];
}

export type WebpackPluginOptions = {
  [key: string]: DefinePlugin.CodeValueObject;
};

export type RuntimeKeysObj = {
  [key: string]: keyof typeof import("../runtime");
};

export interface SetsGlobal {
  setupGlobal?: (globOptions: DeepRequired<KudraOptions>["globalsLoader"], globStatement: GlobalStatement) => WebpackPluginOptions;
}
