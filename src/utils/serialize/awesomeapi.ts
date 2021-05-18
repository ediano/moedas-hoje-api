import { AwesomeapiApiResponse, Exchange, Delay } from '@/utils/types'

type Serialize = {
  domain: string
  assets: string[]
  delay: Delay
  itens: AwesomeapiApiResponse
}

export const serializeAwesomeapi = ({
  domain,
  assets,
  delay,
  itens
}: Serialize): Exchange => {
  return {
    source: domain,
    assets,
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
