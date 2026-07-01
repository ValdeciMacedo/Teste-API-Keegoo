import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que existe um pedido", () => {
  // preparação
});

When("consulto o pedido", () => {
  cy.request("GET", "/orders/1").then((res) => {
    response = res;
  });
});

Then("devo receber status 200", () => {
  expect(response.status).to.eq(200);
});