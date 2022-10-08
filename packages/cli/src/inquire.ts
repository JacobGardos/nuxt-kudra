import jetpack from "fs-jetpack";
import inquirer from "inquirer";
import { basename, resolve } from "path";
import { KudraArgs } from "./args";

export const PackageManagers = ["Yarn", "Npm"] as const;
export const UiFrameworks = ["none", "vuetify"] as const;
export const NuxtModules = ["axios", "content"] as const;
export const RenderingModes = ["universal", "spa"] as const;
export const Targets = ["server", "static"] as const;

export interface KudraConfig {
  name: string;
  packageManager: typeof PackageManagers[number];
  ui: typeof UiFrameworks[number];
  nuxtModules: typeof NuxtModules[number][];
  mode: typeof RenderingModes[number];
  target: typeof Targets[number];
  typedVuex: boolean;
}

export async function inquireConfig(kudraArgs: KudraArgs): Promise<KudraConfig> {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Project Name",
      default: () => {
        return basename(resolve(process.cwd(), kudraArgs.outputDir));
      },
    },
    {
      type: "list",
      name: "packageManager",
      message: "Package Manager",
      choices: PackageManagers,
      default: PackageManagers[0],
    },
    {
      type: "list",
      name: "ui",
      message: "Ui Framework (Typed)",
      choices: [
        {
          name: "Vuetify",

          value: UiFrameworks[1],
        },
        {
          name: "None",
          value: UiFrameworks[0],
        },
      ],
      default: UiFrameworks[0],
    },
    {
      type: "checkbox",
      name: "nuxtModules",
      message: "Nuxt.js modules",
      choices: [
        {
          name: "Axios - Promise based HTTP client",
          value: NuxtModules[0],
        },
        {
          name: "Content - Git-based Headless CMS",
          value: NuxtModules[1],
        },
      ],
      default: UiFrameworks[0],
    },
    {
      type: "list",
      message: "Rendering Mode",
      name: "mode",
      choices: [
        { name: "Universal (SSR / SSG)", value: RenderingModes[0] },
        { name: "Single Page App", value: RenderingModes[1] },
      ],
    },
    {
      type: "list",
      message: "Deployment Target",
      name: "target",
      choices: [
        { name: "Server (Node.js hosting)", value: Targets[0] },
        { name: "Static (Static/Jamstack hosting)", value: Targets[1] },
      ],
    },
    {
      type: "confirm",
      message: "Add Typed-Vuex ?",
      name: "typedVuex",
      default: false,
    },
  ]);

  return answers;
}
