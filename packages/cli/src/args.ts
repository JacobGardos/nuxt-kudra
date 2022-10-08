import jetpack from "fs-jetpack";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { CliError } from "./error";
import path from "path";

export interface KudraArgs {
  /**
   * The projects output directory
   */
  outputDir: string;
}

export async function getArgs(): Promise<KudraArgs> {
  const result = yargs(hideBin(process.argv))
    .command("$0 [outputDir]", "")
    .positional("outputDir", {
      describe: "Output directory",
      default: ".",
      alias: "o",
      type: "string",
    })
    .check(({ outputDir }) => {
      if (jetpack.exists(outputDir)) {
        const fileCount = jetpack.list(outputDir)?.length ?? 0;
        if (fileCount > 0) {
          throw new CliError("Could not create project, directory is not empty", true);
        }
      }

      outputDir = path.join(process.cwd(), outputDir);
      return true;
    })

    .fail((msg, err) => {
      throw err;
    });

  return result.argv;
}
