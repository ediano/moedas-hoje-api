const isNodeDev = process.env.NODE_ENV === 'development'
const isVercelDev = process.env.VERCEL_ENV === 'development'
const baseURL = process.env.DOMAIN_URL || 'https://api.moedashoje.com.br'

type Props = {
  path: string
}

export const getUrl = ({ path }: Props) => {
  if (isNodeDev || isVercelDev) {
    return `/api/${path}`
  }
  return `${baseURL}/${path}`
}

export const getPath = ({ path }: Props) => {
  if (isNodeDev || isVercelDev) {
    return `/api/${path}`
  }
  return `/${path}`
}
