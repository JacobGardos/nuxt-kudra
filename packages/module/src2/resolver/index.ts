import { KudraOptions } from "../kudra/options";

export class Resolver {
  private options: KudraOptions;

  constructor(options: KudraOptions) {
    this.options = options;
    console.log("Resolver Created");
  }
}
