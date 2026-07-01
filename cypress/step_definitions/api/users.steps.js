import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que possuo os dados do usuário", () => {
  // preparação
});

When("envio uma requisição POST", () => {
  cy.request({
    method: "POST",
    url: "/users",
    body: {
      name: "Valdeci",
      email: "valdeci@email.com"
    }
  }).then((res) => {
    response = res;
  });
});

Then("o usuário deve ser criado", () => {
  expect(response.status).to.eq(201);
});