import { getNuxt } from "@nuxt/test-utils";
import { ComponentLoader } from "../src/loaders/component";
import { getConsolaMock, setupTest } from "./helper";

describe("Config", () => {
  describe("Basic", () => {
    setupTest({
      config: {
        components: false,
        kudra: {
          experimentalOptions: {
            vuetify: {
              disable: true,
            },
            asyncData: {
              disable: true,
            },
          },
        },
      },

      fixture: "fixtures/config",
    });

    it("Warns about invalid config", () => {
      const consolaMock = getConsolaMock();
      expect(consolaMock).toHaveBeenCalledWith(ComponentLoader.invalidConfigMsg);
    });
  });

  describe("Experimental AsyncData", () => {
    setupTest({
      config: {
        kudra: {
          experimentalOptions: {
            vuetify: {
              disable: true,
            },
            asyncData: {
              disable: false,
            },
          },
        },
      },

      fixture: "fixtures/config",
    });

    // Simulate build hook, rather than actually building it.
    it("loads asyncData only", () => {
      const nuxt = getNuxt() as any;
      nuxt.callHook("build:before");
    });
  });

  describe("Experimental Vuetify", () => {
    setupTest({
      config: {
        kudra: {
          experimentalOptions: {
            vuetify: {
              disable: false,
            },
            asyncData: {
              disable: true,
            },
          },
        },
      },

      fixture: "fixtures/config",
    });

    // Simulate build hook, rather than actually building it.
    it("loads asyncData only", () => {
      const nuxt = getNuxt() as any;
      nuxt.callHook("build:before");
    });
  });
});
