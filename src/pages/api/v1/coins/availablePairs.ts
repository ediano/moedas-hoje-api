import { NextApiRequest, NextApiResponse } from 'next'

import { v1 as app } from '@/app/v1'

import { AvailablePairsController } from '@/controllers/AvailablePairsController'

const SECONDARY_CACHE = Number(process.env.SECONDARY_CACHE_TIME)

const availablePairsController = new AvailablePairsController()

type Req = { query: { source?: string } } & NextApiRequest

const availablePairs = async (req: Req, res: NextApiResponse) => {
  const { source } = req.query

  const data = !source && (await availablePairsController.index())

  if (!source && !data?.length) {
    return res.status(500).json({
      message: 'Internal server error 500',
      type: 'INTERNAL_SERVER_ERROR_CODE_NOT_FOUND'
    })
  }

  if (source) {
    const exchange = await availablePairsController.show(source)

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

export default app({ cache: SECONDARY_CACHE }).get(availablePairs)
