import { MoedasHojeApiResponse } from '@/utils/serialize'

import { api } from '@/services/api'
import { site } from '@/config/site'

type Show = { symbol: string; source: string }

export class TickerController {
  async index(symbol: string) {
    const { baseURL, tickersUrl } = site.v1

    const response = await api({ baseURL }).get<MoedasHojeApiResponse[]>(
      tickersUrl
    )

    if (response.status !== 200) return undefined

    const data = response.data
      .map(exchange => ({
        source: exchange.source,
        delay: exchange.delay,
        data: exchange.data.find(item => item.symbol === symbol)
      }))
      .filter(exchange => exchange.data)

    return data
  }

  async show({ symbol, source }: Show) {
    const { baseURL, tickersSourceQuery } = site.v1

    const response = await api({ baseURL }).get<MoedasHojeApiResponse>(
      tickersSourceQuery + source
    )

    if (response.status !== 200) return undefined

    const data = {
      source: response.data.source,
      delay: response.data.delay,
      data: response.data.data.find(item => item.symbol === symbol)
    }

    return data
  }
}
