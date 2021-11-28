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
      .filter(item => !!item.bestAsk)
      .map((item: KickexTicker) => {
        return {
          ask: item.bestAsk,
          symbol: item.pairName.split('/').join('_'),
          high24h: item.highestPrice,
          low24h: item.lowestPrice,
          timestamp: item.timestamp
        }
      })
  }
}
