Feature: Login API

  Scenario: Login válido
    Given que possuo um usuário válido
    When envio uma requisição POST para login
    Then devo receber status 200