import { getUrl } from '@/utils/getUrl'

const name = 'Moedas Hoje API'
const domain = 'moedashoje.com.br'

export const site = {
  name,
  domain,
  v1: {
    baseURL: getUrl({ path: '/v1' }),
    tickers: 'coins/tickers',
    tickersSourceQuery: 'coins/tickers?source='
  }
}
