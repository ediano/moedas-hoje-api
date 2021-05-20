import 'axios'

type Config = {
  source?: string
  cacheTime?: string
  assets?: string[]
}

declare module 'axios' {
  export interface AxiosRequestConfig extends Config {}
}
