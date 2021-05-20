import { MoedasHojeApiResponse } from '@/utils/serialize'

type KucoinTicker = {
  symbol: string
  high: string
  low: string
  last: string
}

type KucoinApiResponse = {
  data: { time: number; ticker: KucoinTicker[] }
}

type Kucoin = MoedasHojeApiResponse<KucoinApiResponse>

export const serializeKucoin = ({
  source,
  assets,
  delay,
  data
}: Kucoin): MoedasHojeApiResponse => {
  const { time, ticker } = data.data

  return {
    source,
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
