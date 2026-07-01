const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/features/**/*.feature",
    supportFile: "cypress/support/e2e.js"
  }
});