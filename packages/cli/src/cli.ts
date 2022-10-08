import { getArgs } from "./args";
import { Builder } from "./builder";
import Canvas from "./canvas";
import { inquireConfig } from "./inquire";

export async function cli() {
  Canvas.Header();
  const cliArgs = await getArgs();
  const config = await inquireConfig(cliArgs);
  const builder = new Builder(config, cliArgs);
  await builder.build();
  Canvas.Footer({ ...config, ...cliArgs });
}
