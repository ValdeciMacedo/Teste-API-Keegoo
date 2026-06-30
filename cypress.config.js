const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Define os caminhos de forma limpa baseando-se no tipo de teste executado
      config.specPattern = config.env.tipo === "api" 
        ? "cypress/features/api/**/*.feature" 
        : config.env.tipo === "web" 
          ? "cypress/features/web/**/*.feature" 
          : "cypress/features/**/*.feature";

      return config;
    },
    specPattern: "cypress/features/**/*.feature",
    excludeSpecPattern: ["*.js", "*.ts"]
  },
});