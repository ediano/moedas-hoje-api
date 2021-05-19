import 'axios'

type Config = {
  domain?: string
  cacheTime?: string
  assets?: string[]
}

declare module 'axios' {
  export interface AxiosRequestConfig extends Config {}
}
