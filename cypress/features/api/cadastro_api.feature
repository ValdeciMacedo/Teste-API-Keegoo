# language: pt
Funcionalidade: Cadastro de Usuários via API

  Cenário: Criar um novo usuário com sucesso
    Dado que eu prepare o payload com o nome "Lucas" e a profissão "QA Engineer"
    Quando eu enviar uma requisição POST para o endpoint "/api/users"
    Então o status code do cadastro deve ser 201
    E a resposta deve conter o ID gerado e a data de criação