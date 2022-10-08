import consola from "consola";
import { cli } from "./cli";
import { CliError } from "./error";

(async () => {
  try {
    await cli();
  } catch (e: any) {
    if (e instanceof CliError && e.msgOnly) {
      e = e.message;
    }
    consola.fatal(e);
    process.exit(1);
  }
})();
