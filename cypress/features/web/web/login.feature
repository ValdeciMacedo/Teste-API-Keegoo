Feature: Login

  Como usuário
  Quero acessar o sistema
  Para utilizar a aplicação

  Scenario: Login com sucesso
    Given que acesso a página de login
    When informo um usuário válido
    And informo uma senha válida
    And clico em Entrar
    Then devo visualizar a página inicial

  Scenario: Login inválido
    Given que acesso a página de login
    When informo usuário inválido
    And informo senha inválida
    And clico em Entrar
    Then devo visualizar uma mensagem de erro