export const exchanges = [
  {
    name: 'NovaDAX',
    domain: 'novadax.com',
    assets: ['digital'],
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
    assets: ['digital'],
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
    assets: ['digital', 'traditional'],
    cacheTime: '30s',
    paths: {
      v1: {
        baseURL: 'https://economia.awesomeapi.com.br/json',
        tickers: 'all'
      }
    }
  },
  {
    name: 'Crypto',
    domain: 'crypto.com',
    assets: ['digital'],
    cacheTime: 'N/A',
    paths: {
      v1: {
        baseURL: 'https://api.crypto.com/v2',
        tickers: 'public/get-ticker'
      }
    }
  }
]
