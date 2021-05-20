import { MoedasHojeApiResponse } from '@/utils/serialize'

type AwesomeapiApiResponse = {
  [key: string]: {
    code: string
    codein: string
    high: string
    low: string
    ask: string
    timestamp: string
  }
}

type Awesomeapi = MoedasHojeApiResponse<AwesomeapiApiResponse>

export const serializeAwesomeapi = ({
  source,
  assets,
  delay,
  data
}: Awesomeapi): MoedasHojeApiResponse => {
  return {
    source,
    assets,
    delay,
    data: Object.keys(data).map(item => {
      return {
        ask: data[item].ask,
        symbol: `${data[item].code}_${data[item].codein}`,
        high24h: data[item].high,
        low24h: data[item].low,
        timestamp: Number(data[item].timestamp)
      }
    })
  }
}
