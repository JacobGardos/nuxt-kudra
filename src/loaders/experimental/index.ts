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
    const { asyncData, vuetify } = kudraOptions.experimentalOptions;
    return !asyncData.disable || !vuetify.disable;
  }

  public get options() {
    return this.kudra.kudraOptions.experimentalOptions;
  }

  public onBuildBefore() {
    this.generateTemplates();
  }

  private generateTemplates() {
    const { vuetify, asyncData, directoryName } = this.options;

    const templateFiles: { src: string; fileName: string }[] = [];

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

    if (!asyncData.disable) {
      templateFiles.push({
        src: this.kudra.resolveTemplate("experimental/asyncData.d.ts"),
        fileName: this.kudra.resolveDTS(directoryName, asyncData["filename"]),
      });
    }

    templateFiles.forEach((templateFile) => {
      this.kudra.moduleThis.addTemplate(templateFile);
    });
  }
}
