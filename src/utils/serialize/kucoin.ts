import { KucoinApiResponse, KucoinTicker, Exchange, Delay } from '@/utils/types'

type Serialize = {
  domain: string
  delay: Delay
  assets: string[]
  itens: { data: KucoinApiResponse }
}

export const serializeKucoin = ({
  domain,
  assets,
  delay,
  itens
}: Serialize): Exchange => {
  const { time, ticker } = itens.data

  return {
    source: domain,
    assets,
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
