import { api } from '@/services/api'
import { exchanges } from '@/config/exchanges'
import { serialize } from '@/utils/serialize'

type Show = { source?: string; asset?: string }

export class TickersController {
  async index() {
    const responses = await Promise.allSettled(
      exchanges.map(exchange => {
        const { domain, cacheTime, assets } = exchange
        const { baseURL, tickers } = exchange.paths.v1

        return api({ baseURL, source: domain, cacheTime, assets }).get(tickers)
      })
    )

    const data = responses
      .map(response => response.status === 'fulfilled' && response.value)
      .filter(response => response)

    return serialize(data)
  }

  async show({ source = '', asset = '' }: Show) {
    const responses = await Promise.allSettled(
      exchanges
        .filter(exchange => {
          const { domain, assets } = exchange
          return (
            (source === domain && !asset) || (!source && assets.includes(asset))
          )
        })
        .map(exchange => {
          const { domain, cacheTime, assets } = exchange
          const { baseURL, tickers } = exchange.paths.v1
          if (!source && assets.includes(asset)) {
            return api({ baseURL, source: domain, cacheTime, assets }).get(
              tickers
            )
          }

          return api({ baseURL, source: domain, cacheTime, assets }).get(
            tickers
          )
        })
    )

    const data = responses
      .map(response => response.status === 'fulfilled' && response.value)
      .filter(response => response)

    return serialize(data)
  }
}
