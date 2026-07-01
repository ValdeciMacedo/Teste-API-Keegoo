Feature: Produtos API

  Scenario: Listar produtos
    Given que acesso a API de produtos
    When envio uma requisição GET
    Then devo receber status 200