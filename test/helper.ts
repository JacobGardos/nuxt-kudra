import { NuxtTestOptions, setupTest as SetupTest } from "@nuxt/test-utils";
import consolaGlobalInstance from "consola";

const consolaMock = jest.fn();

export function setupTest(options: Partial<NuxtTestOptions>) {
  beforeAll(() => {
    consolaGlobalInstance.wrapAll();
    consolaGlobalInstance.mock(() => consolaMock);
  });

  SetupTest(options);

  afterEach(() => {
    consolaGlobalInstance.restoreAll();
  });
}

export function getConsolaMock() {
  return consolaMock;
}
