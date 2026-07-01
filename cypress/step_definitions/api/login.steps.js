import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que possuo um usuário válido", () => {
  // preparação dos dados
});

When("envio uma requisição POST para login", () => {
  cy.request({
    method: "POST",
    url: "/login",
    body: {
      username: "admin",
      password: "admin123"
    }
  }).then((res) => {
    response = res;
  });
});

Then("devo receber status 200", () => {
  expect(response.status).to.eq(200);
});