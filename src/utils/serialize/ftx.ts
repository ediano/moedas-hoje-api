import { MoedasHojeApiResponse } from '@/utils/serialize'

const timestamp = Date.parse(String(new Date())) / 1000

type FtxTicker = {
  ask: string
  change24h: number
  baseCurrency: string
  quoteCurrency: string
  type: string
}

type FtxApiResponse = { result: FtxTicker[] }

type Ftx = MoedasHojeApiResponse<FtxApiResponse>

export const serializeFtx = ({
  source,
  assets,
  delay,
  data
}: Ftx): MoedasHojeApiResponse => {
  const result = data.result

  return {
    source,
    assets,
    delay,
    data: result
      .filter(item => item.type === 'spot')
      .map((item: FtxTicker) => {
        return {
          ask: String(item.ask),
          symbol: `${item.baseCurrency}_${item.quoteCurrency}`,
          high24h: '0',
          low24h: '0',
          timestamp
        }
      })
  }
}
