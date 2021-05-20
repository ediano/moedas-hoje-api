import { Exchange } from '@/utils/types'

import { serializeNovadax } from './novadax'
import { serializeKucoin } from './kucoin'
import { serializeAwesomeapi } from './awesomeapi'
import { serializeCrypto } from './crypto'

const MASTER = process.env.MASTER_CACHE_TIME
const SECONDARY = Number(process.env.SECONDARY_CACHE_TIME) + Number(MASTER)

const exchanges = {
  novadax: serializeNovadax,
  kucoin: serializeKucoin,
  awesomeapi: serializeAwesomeapi,
  crypto: serializeCrypto
}

type Serialize = {
  config: { domain?: string; cacheTime?: string; assets?: string[] }
  data: any
}

export const serialize = (itens: any): Exchange[] => {
  return itens.map((item: Serialize): Exchange => {
    const { data } = item
    const { domain, cacheTime, assets } = item.config

    const [exchange] = domain.split('.')

    const delay = {
      externalCacheTime: cacheTime,
      internalCacheTime: `${MASTER} to ${SECONDARY} seconds`
    }

    return exchanges[exchange]({ domain, assets, delay, itens: data })
  })
}
