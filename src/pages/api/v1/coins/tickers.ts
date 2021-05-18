import { NextApiRequest, NextApiResponse } from 'next'

import { v1 as app } from '@/app/v1'
import { TickersController } from '@/controllers/TickersController'

const MASTER_CACHE = Number(process.env.MASTER_CACHE_TIME)

const tickersController = new TickersController()

type Req = { query: { source?: string } } & NextApiRequest

const tickers = async (req: Req, res: NextApiResponse) => {
  const { source } = req.query

  const data = !source && (await tickersController.index())

  if (!source && !data?.length) {
    return res.status(404).json({
      message: 'Page not found 404',
      type: 'TICKERS_CODE_NOT_FOUND'
    })
  }

  if (source) {
    const exchange = await tickersController.show(source)

    if (!exchange?.source) {
      return res.status(404).json({
        message: 'Page not found 404',
        type: 'SOURCE_CODE_INVALID'
      })
    }

    return res.status(200).json(exchange)
  }

  return res.status(200).json(data)
}

export default app({ cache: MASTER_CACHE }).get(tickers)
