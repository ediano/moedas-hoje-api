import { NovadaxApiResponse, Exchange, Delay } from '@/utils/types'

type Serialize = {
  domain: string
  delay: Delay
  itens: { data: NovadaxApiResponse[] }
}

export const serializeNovadax = ({
  domain,
  delay,
  itens
}: Serialize): Exchange => {
  const { data } = itens

  return {
    source: domain,
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
