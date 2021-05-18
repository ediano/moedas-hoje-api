import { KucoinApiResponse, KucoinTicker, Exchange, Delay } from '@/utils/types'

type Serialize = {
  domain: string
  delay: Delay
  itens: { data: KucoinApiResponse }
}

export const serializeKucoin = ({
  domain,
  delay,
  itens
}: Serialize): Exchange => {
  const { time, ticker } = itens.data

  return {
    source: domain,
    delay,
    data: ticker.map((item: KucoinTicker) => ({
      ask: item.last,
      symbol: item.symbol.split('-').join('_'),
      high24h: item.high,
      low24h: item.low,
      timestamp: time
    }))
  }
}
