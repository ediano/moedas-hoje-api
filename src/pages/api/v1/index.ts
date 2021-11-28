import { NextApiRequest, NextApiResponse } from 'next'

import { v1 as app } from '@/app/v1'
import { v1 as doc } from '@/docs/v1'

const v1 = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json(doc)
}

export default app().get(v1)
