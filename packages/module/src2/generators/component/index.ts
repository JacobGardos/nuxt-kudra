import { GenerateFN, Generator } from "..";
import { Kudra } from "../../kudra";

interface Options {
  name: string;
}

export class ComponentGenerator extends Generator<Options> {
  constructor(options: Options, kudra: Kudra) {
    super(options, kudra);
    console.log("Component Generator Created !");
    console.log(this.resolver);
  }

  public generate() {
    console.log("Generating Component With Options", this.typeWriter);
  }
}

export default GenerateFN<Options>((...args) => {
  return new ComponentGenerator(...args);
});
