import nc from 'next-connect'

import { corsConfig, CorsOptionsType } from '@/config/cors'

import { onNoMatch } from '@/errors/onNoMatch'

import { onError } from '@/middlewares/onError'
import { cache } from '@/middlewares/cache'
import { logs } from '@/middlewares/logs'

type Options = { cors?: CorsOptionsType; cache?: number }

export const app = (options: Options = {}) => {
  const DEFAULT_CACHE_TIME = Number(process.env.DEFAULT_CACHE_TIME)
  const cacheOptions = options?.cache || DEFAULT_CACHE_TIME

  return nc({ onError, onNoMatch })
    .use(corsConfig(options?.cors))
    .use(logs)
    .use(cache(cacheOptions))
}

export default app
