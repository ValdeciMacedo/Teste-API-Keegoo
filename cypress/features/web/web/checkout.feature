Feature: Checkout

  Scenario: Finalizar compra
    Given que existe um produto no carrinho
    When finalizo a compra
    Then o pedido deve ser realizado com sucesso