import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou logado", () => {
  cy.visit("/login");
  cy.get("#username").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

When("adiciono um produto ao carrinho", () => {
  cy.get(".add-to-cart").first().click();
});

Then("o carrinho deve conter um item", () => {
  cy.get(".shopping_cart_badge").should("contain", "1");
});