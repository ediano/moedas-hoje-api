import { MoedasHojeApiResponse } from '@/utils/serialize'

const timestamp = Date.parse(String(new Date())) / 1000

type GateTicker = {
  lowest_ask: string
  high_24h: string
  low_24h: string
  currency_pair: string
}

type GateApiResponse = GateTicker[]

type Gate = MoedasHojeApiResponse<GateApiResponse>

export const serializeGate = ({
  source,
  assets,
  delay,
  data
}: Gate): MoedasHojeApiResponse => {
  return {
    source,
    assets,
    delay,
    data: data.map((item: GateTicker) => ({
      ask: item.lowest_ask,
      symbol: item.currency_pair,
      high24h: item.high_24h,
      low24h: item.low_24h,
      timestamp
    }))
  }
}
