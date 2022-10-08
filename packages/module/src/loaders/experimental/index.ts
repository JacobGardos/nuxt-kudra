import { Consola } from "consola";
import { Kudra } from "../../kudra";
import { KudraOptions } from "../../options";
import { DeepRequired } from "../../ts";
import { Hookable } from "../../ts/hookable";
import { Loadable } from "../loadable";

@Loadable("Experimental")
export class ExperimentalLoader implements Hookable {
  public kudra: Kudra;
  public logger: Consola;
  public directoryPath: string;

  constructor(kudra: Kudra, logger: Consola) {
    this.kudra = kudra;
    this.logger = logger;
    this.directoryPath = kudra.resolvePath(this.options["directoryName"]);
  }

  static shouldRun(kudraOptions: DeepRequired<KudraOptions>) {
    const { vuetify } = kudraOptions.experimentalOptions;
    return !vuetify.disable;
  }

  public get options() {
    return this.kudra.kudraOptions.experimentalOptions;
  }

  public onBuildBefore() {
    this.generateTemplates();
  }

  private generateTemplates() {
    const { vuetify, directoryName } = this.options;

    const templateFiles: { src: string; fileName: string }[] = [];

    /* istanbul ignore next */
    if (!vuetify.disable) {
      templateFiles.push(
        {
          src: this.kudra.resolveTemplate("experimental/vuetify/lib.d.ts"),
          fileName: this.kudra.resolveDTS(directoryName, vuetify["directoryName"], vuetify["filename"]),
        },
        {
          src: this.kudra.resolveTemplate("experimental/vuetify/components.d.ts"),
          fileName: this.kudra.resolveDTS(directoryName, vuetify["directoryName"], vuetify["componentsFilename"]),
        }
      );
    }

    templateFiles.forEach((templateFile) => {
      this.kudra.moduleThis.addTemplate(templateFile);
    });
  }
}
