import { MoedasHojeApiResponse } from '@/utils/serialize'

const timestamp = Date.parse(String(new Date())) / 1000

type BraziliexTicker = {
  [key: string]: {
    last: number
    highestBid24: number
    lowestAsk24: number
    market: string
  }
}

type BraziliexApiResponse = { data: BraziliexTicker }

type Braziliex = MoedasHojeApiResponse<BraziliexApiResponse>

export const serializeBraziliex = ({
  source,
  assets,
  delay,
  data
}: Braziliex): MoedasHojeApiResponse => {
  return {
    source,
    assets,
    delay,
    data: Object.keys(data)
      .map(item => {
        if (!data[item].last) return undefined

        return {
          ask: String(data[item].last),
          symbol: data[item].market.toUpperCase(),
          high24h: String(data[item].highestBid24),
          low24h: String(data[item].lowestAsk24),
          timestamp
        }
      })
      .filter(item => item)
  }
}
