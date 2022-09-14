import jetpack from "fs-jetpack";
import { resolve } from "path";
import { cwd } from "process";
import { setupTest } from "./helper";

describe("Component-base", () => {
  describe("AsyncData [Enabled]", () => {
    setupTest({
      server: true,
      browser: true,
      config: {
        dev: true,
      },
      fixture: "fixtures/component-base",
    });

    it("Generates AsyncData Types", () => {
      const DTSFilePath = resolve(cwd(), "test/fixtures/component-base/kudra", "component-base.d.ts");
      const isFile = jetpack.exists(DTSFilePath);
      const fileData = jetpack.read(DTSFilePath);

      expect(fileData).toContain("asyncData?");
      expect(isFile).toBe("file");
    });
  });
});
