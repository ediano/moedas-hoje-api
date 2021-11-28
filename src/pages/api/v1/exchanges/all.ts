import { NextApiRequest, NextApiResponse } from 'next'

import { v1 as app } from '@/app/v1'
import { exchanges } from '@/config/exchanges'

const MASTER_CACHE = Number(process.env.MASTER_CACHE_TIME)

const MASTER = MASTER_CACHE
const SECONDARY = Number(process.env.SECONDARY_CACHE_TIME) + Number(MASTER)

const delay = {
  internalCacheTime: `${MASTER} to ${SECONDARY} seconds`
}

const all = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    source: process.env.DOMAIN_URL,
    delay,
    data: exchanges.map(exchange => ({
      name: exchange.name,
      domain: exchange.domain,
      assets: exchange.assets,
      cacheTime: exchange.cacheTime
    }))
  }

  return res.status(200).json(data)
}

export default app({ cache: MASTER_CACHE }).get(all)
