import { Nuxt } from "@nuxt/core";
import { Kudra } from "../kudra";
import { Resolver } from "../resolver";
import { TypeWriter } from "../typeWriter";

export abstract class Generator<T extends any> {
  public nuxt: Nuxt;
  public kudra: Kudra;
  public options: T;
  public typeWriter: TypeWriter;
  public resolver: Resolver;

  constructor(options: T, ...args: GeneratorArgs) {
    this.kudra = args[0];
    this.typeWriter = this.kudra.typeWriter;
    this.resolver = this.kudra.resolver;
    this.nuxt = this.kudra.nuxt;
    this.options = options;
  }

  public abstract generate(): void;
}

export type GeneratorArgs = [kudra: Kudra];

export const GenerateFN = <T extends any = any, W extends GeneratorArgs = GeneratorArgs>(fn: (options: T, ...t: W) => Generator<T>) => {
  return (options: T) => {
    return function (...t: W) {
      return fn(options, ...t);
    };
  };
};

export type KudraGenerator = (...t: GeneratorArgs) => Generator<any>;
