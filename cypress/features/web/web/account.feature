Feature: Minha Conta

  Scenario: Alterar cadastro
    Given que estou autenticado
    When altero meus dados
    Then os dados devem ser atualizados