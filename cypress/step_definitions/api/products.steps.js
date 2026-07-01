import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que acesso a API de produtos", () => {
  // preparação
});

When("envio uma requisição GET", () => {
  cy.request("GET", "/products").then((res) => {
    response = res;
  });
});

Then("devo receber status 200", () => {
  expect(response.status).to.eq(200);
});