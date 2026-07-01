import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que existe um produto no carrinho", () => {
  cy.visit("/cart");
});

When("finalizo a compra", () => {
  cy.get("#checkout").click();
});

Then("o pedido deve ser realizado com sucesso", () => {
  cy.contains("Obrigado pelo seu pedido").should("be.visible");
});