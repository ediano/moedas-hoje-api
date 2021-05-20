import { MoedasHojeApiResponse } from '@/utils/serialize'

type CryptoTicker = {
  i: string
  k: number
  h: number
  l: number
  t: number
}

type CryptoApiResponse = {
  result: {
    data: CryptoTicker[]
  }
}

type Crypto = MoedasHojeApiResponse<CryptoApiResponse>

export const serializeCrypto = ({
  source,
  assets,
  delay,
  data
}: Crypto): MoedasHojeApiResponse => {
  const itens = data.result.data

  return {
    source,
    assets,
    delay,
    data: itens
      .map((item: CryptoTicker) => ({
        ask: String(item.k),
        symbol: String(item.i),
        high24h: String(item.h),
        low24h: String(item.l),
        timestamp: item.t
      }))
      .filter(item => item.ask)
  }
}
