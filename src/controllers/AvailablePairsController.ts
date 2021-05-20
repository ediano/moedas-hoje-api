import { MoedasHojeApiResponse } from '@/utils/serialize'

import { api } from '@/services/api'
import { site } from '@/config/site'

export class AvailablePairsController {
  async index() {
    const { baseURL, tickersUrl } = site.v1

    const response = await api({ baseURL }).get<MoedasHojeApiResponse[]>(
      tickersUrl
    )

    if (response.status !== 200) return undefined

    const data = response.data.map(exchange => ({
      source: exchange.source,
      delay: exchange.delay,
      data: exchange.data.map(item => item.symbol)
    }))

    return data
  }

  async show(source: string) {
    const { baseURL, tickersSourceQuery } = site.v1

    const response = await api({ baseURL }).get<MoedasHojeApiResponse>(
      tickersSourceQuery + source
    )

    if (response.status !== 200) return undefined

    const data = {
      source: response.data.source,
      delay: response.data.delay,
      data: response.data.data.map(item => item.symbol)
    }

    return data
  }
}
