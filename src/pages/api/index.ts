import { NextApiRequest, NextApiResponse } from 'next'

import app from '@/app/app'
import { getstart as doc } from '@/docs/getstart'

const api = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json(doc)
}

export default app().get(api)
