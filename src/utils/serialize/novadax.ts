import { NovadaxApiResponse, Exchange, Delay } from '@/utils/types'

type Serialize = {
  domain: string
  delay: Delay
  assets: string[]
  itens: { data: NovadaxApiResponse[] }
}

export const serializeNovadax = ({
  domain,
  assets,
  delay,
  itens
}: Serialize): Exchange => {
  const { data } = itens

  return {
    source: domain,
    assets,
    delay,
    data: data.map((item: NovadaxApiResponse) => ({
      ask: item.ask,
      symbol: item.symbol,
      high24h: item.high24h,
      low24h: item.low24h,
      timestamp: item.timestamp
    }))
  }
}
