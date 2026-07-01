Feature: Usuários API

  Scenario: Criar usuário
    Given que possuo os dados do usuário
    When envio uma requisição POST
    Then o usuário deve ser criado