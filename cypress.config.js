const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  chromeWebSecurity: false,
  requestHeaders: { "Cache-Control": "no-cache" },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "cypress/support/index.js", // Configura el supportFile aquí
    baseUrl: 'https://developers.intuitivo.com/reference/welcome'
  },
});
