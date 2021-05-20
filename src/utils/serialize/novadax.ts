import { MoedasHojeApiResponse } from '@/utils/serialize'

type NovadaxTicker = {
  ask: string
  high24h: string
  low24h: string
  symbol: string
  timestamp: number
}

type NovadaxApiResponse = { data: NovadaxTicker[] }

type Novadax = MoedasHojeApiResponse<NovadaxApiResponse>

export const serializeNovadax = ({
  source,
  assets,
  delay,
  data
}: Novadax): MoedasHojeApiResponse => {
  const itens = data.data

  return {
    source,
    assets,
    delay,
    data: itens
      .map((item: NovadaxTicker) => ({
        ask: item.ask,
        symbol: item.symbol,
        high24h: item.high24h,
        low24h: item.low24h,
        timestamp: item.timestamp
      }))
      .filter(item => item.ask)
  }
}
