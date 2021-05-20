import { CryptoApiResponse, CryptoTicker, Exchange, Delay } from '@/utils/types'

type Serialize = {
  domain: string
  delay: Delay
  assets: string[]
  itens: CryptoApiResponse
}

export const serializeCrypto = ({
  domain,
  assets,
  delay,
  itens
}: Serialize): Exchange => {
  const { data } = itens.result

  return {
    source: domain,
    assets,
    delay,
    data: data.map((item: CryptoTicker) => ({
      ask: String(item.k),
      symbol: String(item.i),
      high24h: String(item.h),
      low24h: String(item.l),
      timestamp: item.t
    }))
  }
}
