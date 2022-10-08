import { createPage } from "@nuxt/test-utils";
import { setupTest } from "./helper";

describe("Experimental", () => {
  setupTest({
    server: true,
    browser: true,
    config: {
      dev: true,
    },
    fixture: "fixtures/experimental",
  });

  it("Loads page", async () => {
    const page = await createPage("/");
    const html = await page.innerHTML("body");

    expect(html).toContain("successMessage");
  });
});
