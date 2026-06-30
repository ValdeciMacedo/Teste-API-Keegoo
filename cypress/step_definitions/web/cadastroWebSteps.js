import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CadastroPage from "../../pages/CadastroPage";

Given('que eu esteja na página de cadastro de novos clientes', () => {
  CadastroPage.acessarPagina();
});

When('eu preencher o nome {string}', (nomeCliente) => {
  CadastroPage.preencherNome(nomeCliente);
});

When('deixar o campo de e-mail em branco', () => {
  CadastroPage.limparEmail();
});

When('clicar no botão de salvar o cadastro', () => {
  CadastroPage.clicarSalvar();
});

Then('o sistema deve exibir a mensagem de erro {string}', (mensagemEsperada) => {
  CadastroPage.alertaErro.should('be.visible').and('have.text', mensagemEsperada);
});