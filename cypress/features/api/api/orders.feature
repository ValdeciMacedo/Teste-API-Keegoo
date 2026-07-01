Feature: Pedidos API

  Scenario: Consultar pedidos
    Given que existe um pedido
    When consulto o pedido
    Then devo receber status 200