import cors, { CorsOptions } from 'cors'

export type CorsOptionsType = CorsOptions

export const corsConfig = (options: CorsOptions = {}) => {
  const corsDefault = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  }

  return cors({ ...corsDefault, ...options })
}
