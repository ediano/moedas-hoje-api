import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'

export const cache = (time: Number) => {
  return (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    const CACHE_CONTROL_HEADER_VALUE = `max-age=0, s-maxage=${time}, stale-while-revalidate, public`

    res.setHeader('Cache-Control', CACHE_CONTROL_HEADER_VALUE)

    return next()
  }
}
