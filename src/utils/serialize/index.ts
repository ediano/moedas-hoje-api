import { serializeNovadax } from './novadax'
import { serializeKucoin } from './kucoin'
import { serializeAwesomeapi } from './awesomeapi'
import { serializeCrypto } from './crypto'
import { serializeGate } from './gate'

type Data = {
  ask: string
  high24h: string
  low24h: string
  symbol: string
  timestamp: number
}

export type Delay = { externalCacheTime: string; internalCacheTime: string }

export type MoedasHojeApiResponse<T = Data[]> = {
  source: string
  assets: string[]
  delay: Delay
  data: T
}

const MASTER = process.env.MASTER_CACHE_TIME
const SECONDARY = Number(process.env.SECONDARY_CACHE_TIME) + Number(MASTER)

const exchanges = {
  novadax: serializeNovadax,
  kucoin: serializeKucoin,
  awesomeapi: serializeAwesomeapi,
  crypto: serializeCrypto,
  gate: serializeGate
}

type Serialize = {
  config: { source?: string; cacheTime?: string; assets?: string[] }
  data: any
}

export const serialize = (itens: any): MoedasHojeApiResponse[] => {
  return itens.map((item: Serialize) => {
    const { data } = item
    const { source, cacheTime, assets } = item.config

    const [exchange] = source.split('.')

    const delay = {
      externalCacheTime: cacheTime,
      internalCacheTime: `${MASTER} to ${SECONDARY} seconds`
    }

    return exchanges[exchange]({ source, assets, delay, data })
  })
}
