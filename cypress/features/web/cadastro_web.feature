# language: pt
Funcionalidade: Cadastro de Clientes no Portal

  Cenário: Tentar cadastrar um cliente sem preencher o e-mail
    Dado que eu esteja na página de cadastro de novos clientes
    Quando eu preencher o nome "Empresa Keegoo"
    E deixar o campo de e-mail em branco
    E clicar no botão de salvar o cadastro
    Então o sistema deve exibir a mensagem de erro "O campo E-mail é obrigatório"