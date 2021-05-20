type Data = {
  ask: string
  high24h: string
  low24h: string
  symbol: string
  timestamp: number
}

export type Delay = { externalCacheTime: string; internalCacheTime: string }

export type Exchange = {
  source: string
  assets: string[]
  delay: Delay
  data: Data[]
}

export type NovadaxApiResponse = Data

export type KucoinTicker = {
  symbol: string
  high: string
  low: string
  last: string
}

export type KucoinApiResponse = {
  time: number
  ticker: KucoinTicker[]
}

export type AwesomeapiApiResponse = {
  [key: string]: {
    code: string
    codein: string
    high: string
    low: string
    ask: string
    timestamp: string
  }
}

export type CryptoTicker = {
  i: string
  k: number
  h: number
  l: number
  t: number
}

export type CryptoApiResponse = {
  result: {
    data: CryptoTicker[]
  }
}
