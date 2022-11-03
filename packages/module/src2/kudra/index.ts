import { ModuleContainer, Nuxt } from "@nuxt/core";
import { Generator, KudraGenerator } from "../generators";
import { Resolver } from "../resolver";
import { TypeWriter } from "../typeWriter";
import { KudraOptions } from "./options";

export class Kudra {
  private readonly options: KudraOptions;
  public nuxt: Nuxt;
  public typeWriter: TypeWriter;
  public generators: Generator<any>[] = [];
  public resolver: Resolver;

  constructor(moduleContainer: ModuleContainer, kudraOptions: KudraOptions) {
    this.nuxt = moduleContainer.nuxt;
    this.options = kudraOptions;
    this.typeWriter = new TypeWriter();
    this.resolver = new Resolver(this.options);
  }

  /**
   * Loads one or more generators into the kudra instance
   * @param generator The generator or generators to load
   */
  public loadGenerator(generator: KudraGenerator | KudraGenerator[]) {
    const generators = Array.isArray(generator) ? generator : [generator];
    generators.forEach((gen) => {
      const generator = gen(this);
      this.generators.push(generator);
    });
  }
}
