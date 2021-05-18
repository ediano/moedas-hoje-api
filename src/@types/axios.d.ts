import 'axios'

type Config = {
  domain?: string
  cacheTime?: string
}

declare module 'axios' {
  export interface AxiosRequestConfig extends Config {}
}
