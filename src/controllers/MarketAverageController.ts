import { MoedasHojeApiResponse } from '@/utils/serialize'

import { api } from '@/services/api'
import { site } from '@/config/site'

const timestamp = Date.parse(String(new Date())) / 1000

const MASTER = process.env.MASTER_CACHE_TIME
const SECONDARY = Number(process.env.SECONDARY_CACHE_TIME) + Number(MASTER)

const delay = {
  internalCacheTime: `${MASTER} to ${SECONDARY} seconds`
}

export class MarketAverageController {
  async index() {
    const { baseURL, tickers } = site.v1

    const response = await api({ baseURL }).get<MoedasHojeApiResponse[]>(
      tickers
    )

    if (response.status !== 200) return undefined

    const count: {
      [key: string]: {
        records: number
        ask: string
        high24h: string
        low24h: string
        symbol: string
      }
    } = {}

    for (const data of response.data) {
      for (const item of data.data) {
        const sum = count[item.symbol] ? ++count[item.symbol].records : 1

        const ask = count[item.symbol]
          ? Number(count[item.symbol].ask) + Number(item.ask)
          : Number(item.ask)

        const high24h = count[item.symbol]
          ? Number(count[item.symbol].high24h) + Number(item.high24h)
          : Number(item.high24h)

        const low24h = count[item.symbol]
          ? Number(count[item.symbol].low24h) + Number(item.low24h)
          : Number(item.low24h)

        Object.assign(count, {
          [item.symbol]: {
            records: sum,
            ask: String(ask),
            high24h: String(high24h),
            low24h: String(low24h),
            symbol: item.symbol
          }
        })
      }
    }

    const getAverage = (value: string, divider: number) => {
      const data = Number(value) / divider
      return String(Number(data).toFixed(8))
    }

    const data = {
      source: process.env.DOMAIN_URL,
      delay,
      data: Object.keys(count).map(item => ({
        ask: getAverage(count[item].ask, count[item].records),
        high24h: getAverage(count[item].high24h, count[item].records),
        low24h: getAverage(count[item].low24h, count[item].records),
        symbol: count[item].symbol,
        timestamp
      }))
    }

    return data
  }
}
