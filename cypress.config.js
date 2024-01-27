const { defineConfig } = require("cypress");
module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  cacheAcrossSpecs: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout : 90000,
  all_frames: true,
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
