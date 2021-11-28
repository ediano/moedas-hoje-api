import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'

export const logs = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress

  console.log({
    url: req.url,
    clientIp
  })

  return next()
}
