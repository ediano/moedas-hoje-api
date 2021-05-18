export const exchanges = [
  {
    name: 'NovaDAX',
    domain: 'novadax.com',
    cacheTime: 'N/A',
    paths: {
      v1: {
        baseURL: 'https://api.novadax.com/v1',
        tickers: 'market/tickers'
      }
    }
  },
  {
    name: 'Kucoin',
    domain: 'kucoin.com',
    cacheTime: 'N/A',
    paths: {
      v1: {
        baseURL: 'https://api.kucoin.com/api/v1',
        tickers: 'market/allTickers'
      }
    }
  },
  {
    name: 'AwesomeAPI',
    domain: 'awesomeapi.com.br',
    cacheTime: '30s',
    paths: {
      v1: {
        baseURL: 'https://economia.awesomeapi.com.br/json',
        tickers: 'all'
      }
    }
  }
]
