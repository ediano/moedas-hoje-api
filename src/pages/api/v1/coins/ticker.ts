import { NextApiRequest, NextApiResponse } from 'next'

import { v1 as app } from '@/app/v1'
import { TickerController } from '@/controllers/TickerController'

const SECONDARY_CACHE = Number(process.env.SECONDARY_CACHE_TIME)

const tickerController = new TickerController()

type Req = { query: { symbol: string; source?: string } } & NextApiRequest

const ticker = async (req: Req, res: NextApiResponse) => {
  const { symbol, source } = req.query

  if (!symbol) {
    return res.status(400).json({
      message: 'Bad request 400',
      type: 'SYMBOL_CODE_NOT_FOUND'
    })
  }

  const data = !source && (await tickerController.index(symbol))

  if (!source && !data?.length) {
    return res.status(500).json({
      message: 'Internal server error 500',
      type: 'symbol_INTERNAL_SERVER_ERROR_CODE_NOT_FOUND'
    })
  }

  if (source) {
    const exchange = await tickerController.show({ symbol, source })

    if (!exchange) {
      return res.status(404).json({
        message: 'Page not found 404',
        type: 'SOURCE_CODE_INVALID'
      })
    }

    return res.status(200).json(exchange)
  }

  return res.status(200).json(data)
}

export default app({ cache: SECONDARY_CACHE }).get(ticker)
