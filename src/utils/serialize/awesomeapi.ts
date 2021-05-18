import { AwesomeapiApiResponse, Exchange, Delay } from '@/utils/types'

type Serialize = {
  domain: string
  delay: Delay
  itens: AwesomeapiApiResponse
}

export const serializeAwesomeapi = ({
  domain,
  delay,
  itens
}: Serialize): Exchange => {
  return {
    source: domain,
    delay,
    data: Object.keys(itens).map(item => {
      return {
        ask: itens[item].ask,
        symbol: `${itens[item].code}_${itens[item].codein}`,
        high24h: itens[item].high,
        low24h: itens[item].low,
        timestamp: Number(itens[item].timestamp)
      }
    })
  }
}
