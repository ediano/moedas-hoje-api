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
  const itens = data.result

  return {
    source,
    assets,
    delay,
    data: itens
      .map((item: FtxTicker) => {
        if (item.type === 'spot') {
          return {
            ask: String(item.ask),
            symbol: `${item.baseCurrency}_${item.quoteCurrency}`,
            high24h: '0',
            low24h: '0',
            timestamp
          }
        }

        return undefined
      })
      .filter(item => item)
  }
}
