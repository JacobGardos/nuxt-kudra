import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "@nuxt/test-utils",
  verbose: true,

  collectCoverageFrom: ["src/**/*.ts"],
  modulePathIgnorePatterns: ["test/old"],
  watchPathIgnorePatterns: ["test/fixture/.nuxt", "test/fixture/kudra"],
};

export default config;
