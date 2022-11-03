import { KudraGenerator } from "../generators";

export interface KudraOptions {
  /**
   * The output directory for the generated .d.ts files.
   *
   * @default "kudra"
   */
  outputDir: string;
  /**
   * Whether to auto load the default generators
   * that come with nuxt-kudra
   *
   * @default true
   */
  useDefaultGenerators: boolean;
  /**
   * Generators that kudra will load
   *
   * @default []
   */
  generators: Array<KudraGenerator>;
}

export const defaultKudraOptions: KudraOptions = {
  outputDir: "kudra",
  useDefaultGenerators: true,
  generators: [],
};
