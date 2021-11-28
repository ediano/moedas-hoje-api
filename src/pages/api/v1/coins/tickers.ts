import { NextApiRequest, NextApiResponse } from 'next'

import { v1 as app } from '@/app/v1'
import { TickersController } from '@/controllers/TickersController'

const MASTER_CACHE = Number(process.env.MASTER_CACHE_TIME)

const tickersController = new TickersController()

type Req = { query: { source?: string; asset?: string } } & NextApiRequest

const tickers = async (req: Req, res: NextApiResponse) => {
  const { source, asset } = req.query

  if (source && asset) {
    return res.status(400).json({
      message: 'Bad request 400',
      type: 'SOURCE_AND_ASSET_CODE_BREACH_FOUND'
    })
  }

  const data = await (!source || !asset ? tickersController.index() : [])

  if (!source && !asset && !data?.length) {
    return res.status(404).json({
      message: 'Page not found 404',
      type: 'TICKERS_CODE_NOT_FOUND'
    })
  }

  if (source) {
    const exchange = await tickersController.show({ source })

    const findExchange = exchange.find(exchange => exchange)

    if (!findExchange?.source) {
      return res.status(404).json({
        message: 'Page not found 404',
        type: 'SOURCE_CODE_INVALID'
      })
    }

    return res.status(200).json(findExchange)
  }

  if (asset) {
    const exchange = await tickersController.show({ asset })

    if (!exchange?.length) {
      return res.status(404).json({
        message: 'Page not found 404',
        type: 'ASSET_CODE_INVALID'
      })
    }

    return res.status(200).json(exchange)
  }

  return res.status(200).json(data)
}

export default app({ cache: MASTER_CACHE }).get(tickers)
