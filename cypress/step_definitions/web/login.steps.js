import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de login", () => {
  cy.visit("/login");
});

When("informo um usuário válido", () => {
  cy.get("#username").type("standard_user");
});

When("informo uma senha válida", () => {
  cy.get("#password").type("secret_sauce");
});

When("clico em Entrar", () => {
  cy.get("#login-button").click();
});

Then("devo visualizar a página inicial", () => {
  cy.url().should("include", "/home");
});

When("informo usuário inválido", () => {
  cy.get("#username").clear().type("usuario_invalido");
});

When("informo senha inválida", () => {
  cy.get("#password").clear().type("senha_invalida");
});

Then("devo visualizar uma mensagem de erro", () => {
  cy.contains("Usuário ou senha inválidos").should("be.visible");
});