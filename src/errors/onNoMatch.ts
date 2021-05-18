import { NextApiResponse } from 'next'

export const onNoMatch = (_, res: NextApiResponse) => {
  return res.status(404).json({
    message: 'Page not found.',
    type: 'not_found',
    name: 'NotFoundError'
  })
}
