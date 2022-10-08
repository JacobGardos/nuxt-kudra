import consola from "consola";
import spawn from "cross-spawn";
import ejs from "ejs";
import jetpack from "fs-jetpack";
import { FSJetpack } from "fs-jetpack/types";
import _ from "lodash";
import ora from "ora";
import path from "path";
import { KudraArgs } from "./args";
import { KudraConfig, NuxtModules } from "./inquire";

export class Builder {
  public config: KudraConfig;
  public args: KudraArgs;
  private spinner = ora({
    text: "Building your project",
  });
  private templateSrc = jetpack.cwd(__dirname).cwd("..", "templates");
  private pkgJson: Record<string, any> = {};
  private tsConfig: Record<string, any> = {};

  constructor(kudraConfig: KudraConfig, kudraArgs: KudraArgs) {
    this.config = kudraConfig;
    this.args = kudraArgs;
  }

  public async build() {
    this.spinner.start();
    this.spinner.text = "Compiling template files";
    const templateVars = this.generateTemplateVars();
    const dstSrc = jetpack.cwd(this.args.outputDir);

    const kudraTemplate = this.templateSrc.cwd("kudra");
    this.compileTemplate(kudraTemplate, templateVars, dstSrc);

    if (this.config.ui != "none") {
      const uiFrameworkTemplate = this.templateSrc.cwd("frameworks", this.config.ui);
      this.compileTemplate(uiFrameworkTemplate, templateVars, dstSrc);
    }

    this.spinner.text = "Generating package.json";
    dstSrc.write("package.json", this.pkgJson);
    this.spinner.text = "Generating tsconfig.json";
    dstSrc.write("tsconfig.json", this.tsConfig);

    this.spinner.text = "Installing dependencies";
    this.installDependencies(dstSrc.path());

    this.spinner.stop();
  }

  private compileTemplate(templateSrc: FSJetpack, templateVars: Record<string, any>, dstSrc: FSJetpack) {
    templateSrc.find({ matching: "**/*", recursive: true }).forEach((filePath) => {
      this.spinner.text = `Compiling ${filePath}`;
      const fileContents = templateSrc.read(filePath);

      if (!fileContents) {
        consola.warn("Detected empty file", filePath);
        return;
      }

      const template = ejs.compile(fileContents);
      const compiled = template(templateVars);
      const baseName = path.basename(filePath);

      if (baseName === "package.json") {
        const packageJson = JSON.parse(compiled);
        this.pkgJson = _.merge(this.pkgJson, packageJson);
        return;
      }

      if (baseName === "tsconfig.json") {
        const tsconfig = JSON.parse(compiled);
        this.tsConfig = _.merge(this.tsConfig, tsconfig);
        return;
      }

      if (baseName === "gitignore") {
        dstSrc.write(".gitignore", compiled);
        return;
      }

      if (path.dirname(filePath) === "content" && !templateVars.content) {
        return;
      }

      dstSrc.write(filePath, compiled);
    });
  }

  private generateTemplateVars() {
    const templateVars: Record<string, any> = {
      name: this.config.name,
      mode: this.config.mode,
      target: this.config.target,
      ui: this.config.ui,
    };

    // Add all the config.nuxtModules to the templateVars as key value pairs
    NuxtModules.forEach((moduleName) => {
      templateVars[moduleName] = this.config.nuxtModules.includes(moduleName);
    });

    return templateVars;
  }

  private installDependencies(dstSrc: string) {
    spawn.sync(this.config.packageManager, ["install"], { stdio: "inherit", cwd: dstSrc });
  }
}
