Feature: Carrinho

  Scenario: Adicionar produto ao carrinho
    Given que estou logado
    When adiciono um produto ao carrinho
    Then o carrinho deve conter um item