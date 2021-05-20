import { MoedasHojeApiResponse } from '@/utils/serialize'

type KickexTicker = {
  bestAsk: string
  highestPrice: string
  lowestPrice: string
  pairName: string
  timestamp: number
}

type KickexApiResponse = KickexTicker[]

type Kickex = MoedasHojeApiResponse<KickexApiResponse>

export const serializeKickex = ({
  source,
  assets,
  delay,
  data
}: Kickex): MoedasHojeApiResponse => {
  return {
    source,
    assets,
    delay,
    data: data
      .map((item: KickexTicker) => ({
        ask: item.bestAsk,
        symbol: item.pairName.split('/').join('_'),
        high24h: item.highestPrice,
        low24h: item.lowestPrice,
        timestamp: item.timestamp
      }))
      .filter(item => item.ask)
  }
}
