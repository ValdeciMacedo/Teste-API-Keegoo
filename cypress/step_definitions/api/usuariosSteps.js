import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Variáveis locais para armazenar o contexto do teste entre os passos
let endpoint;
let responseAPI;

Given('que eu configure a requisição GET para o endpoint {string}', (urlEndpoint) => {
  // O Cucumber passa automaticamente o "/api/users/2" para a variável urlEndpoint
  endpoint = urlEndpoint; 
});

When('eu enviar a requisição', () => {
  // Dispara a requisição para a API (usando a URL base configurada ou uma pública)
  cy.request({
    method: 'GET',
    url: `https://reqres.in${endpoint}`, // Exemplo de API pública para teste
    failOnStatusCode: false // Evita que o Cypress quebre o teste antes do "Then" se o status for erro
  }).then((response) => {
    responseAPI = response; // Salva a resposta para validar no próximo passo
  });
});

Then('o status code da resposta deve ser {int}', (statusCodeEsperado) => {
  // Valida se o status retornado (ex: 200) é o esperado
  expect(responseAPI.status).to.eq(statusCodeEsperado);
});

Then('o campo {string} deve retornar {string}', (campo, valorEsperado) => {
  // Acessa a propriedade dentro do objeto "data" retornado pela API
  expect(responseAPI.body.data[campo]).to.eq(valorEsperado);
});