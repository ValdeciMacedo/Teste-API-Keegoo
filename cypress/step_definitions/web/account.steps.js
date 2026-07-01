import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou autenticado", () => {
  cy.visit("/login");
});

When("altero meus dados", () => {
  cy.get("#name").clear().type("Valdeci");
  cy.get("#save").click();
});

Then("os dados devem ser atualizados", () => {
  cy.contains("Dados atualizados").should("be.visible");
});