import { createPage } from "@nuxt/test-utils";
import { setupTest } from "./helper";

describe("Basic", () => {
  setupTest({
    server: true,
    browser: true,
    config: {
      dev: true,
    },
    fixture: "fixtures/basic",
  });

  it("Loads page", async () => {
    const page = await createPage("/");
    const html = await page.innerHTML("body");

    expect(html).toContain("FooComponent");
    expect(html).toContain("BarComponent");
  });
});
