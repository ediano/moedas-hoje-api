export const v1 = {
  data: {
    version: 'v1',
    pathUrl: '/v1',
    resources: {
      coins: [
        {
          method: 'GET',
          pathUrl: '/v1/coins/tickers',
          message: 'Lista todas as fontes e os valores de seus pares de moedas',
          resourcesQueries: [
            {
              pathUrl: '/v1/coins/tickers?source=novadax.com',
              message: 'Lita todas as moedas e seus valores por fonte'
            },
            {
              pathUrl: '/v1/coins/tickers?asset=traditional',
              message: 'Lita todas as moedas e seus valores por tipo de ativo'
            }
          ]
        },
        {
          method: 'GET',
          resourcesQueries: [
            {
              exampleUrl: '/v1/coins/ticker?symbol=BTC_BRL',
              message:
                'Lista todos as fontes e o valor de um par específico de moedas'
            },
            {
              exampleUrl: '/v1/coins/ticker?symbol=BTC_BRL&source=novadax.com',
              message: 'Lita o valor de um par de moedas específico por fonte'
            }
          ]
        },
        {
          method: 'GET',
          pathUrl: '/v1/coins/available-pairs',
          message: 'Lista todas as fontes e seus pares de moedas disponível',
          resourcesQueries: [
            {
              exampleUrl: '/v1/coins/available-pairs?source=novadax.com',
              message: 'Lista todos os pares de moedas disponível por fonte'
            }
          ]
        }
      ]
    }
  }
}
