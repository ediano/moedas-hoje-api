let baseURL = 'https://api.moedashoje.com.br'

if (process.env.VERCEL_ENV === 'development') {
  baseURL = 'http://localhost:3000'
}

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000/api'
}

export const site = {
  name: 'Moedas Hoje API',
  domain: 'moedashoje.com.br',
  v1: {
    baseURL: baseURL + '/v1',
    tickersUrl: 'coins/tickers',
    tickersSourceQuery: 'coins/tickers?source='
  }
}
