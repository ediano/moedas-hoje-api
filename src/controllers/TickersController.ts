import { api } from '@/services/api'
import { exchanges } from '@/config/exchanges'

import { serialize } from '@/utils/serialize'

export class TickersController {
  async index() {
    const responses = await Promise.allSettled(
      exchanges.map(exchange => {
        const { domain, cacheTime } = exchange
        const { baseURL, tickers } = exchange.paths.v1

        return api({ baseURL, domain, cacheTime }).get(tickers)
      })
    )

    const data = responses
      .map(response => response.status === 'fulfilled' && response.value)
      .filter(response => response)

    return serialize(data)
  }

  async show(source: string) {
    const responses = await Promise.allSettled(
      exchanges.map(exchange => {
        const { domain, cacheTime } = exchange
        const { baseURL, tickers } = exchange.paths.v1

        if (source === domain) {
          return api({ baseURL, domain, cacheTime }).get(tickers)
        }

        return undefined
      })
    )

    const data = responses
      .map(response => response.status === 'fulfilled' && response.value)
      .filter(response => response)

    return serialize(data).find(exchange => exchange)
  }
}
