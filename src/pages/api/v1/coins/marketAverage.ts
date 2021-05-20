import { NextApiResponse } from 'next'

import { v1 as app } from '@/app/v1'
import { MarketAverageController } from '@/controllers/MarketAverageController'

const SECONDARY_CACHE = Number(process.env.SECONDARY_CACHE_TIME)

const marketAverageController = new MarketAverageController()

const marketAverage = async (_, res: NextApiResponse) => {
  const data = await marketAverageController.index()

  if (!data) {
    return res.status(400).json({
      message: 'Page not found 404',
      type: 'MARKET_AVERAGE_CODE_NOT_FOUND'
    })
  }

  return res.status(200).json(data)
}

export default app({ cache: SECONDARY_CACHE }).get(marketAverage)
