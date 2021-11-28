const isNodeDev = process.env.NODE_ENV === 'development'
const isVercelDev = process.env.VERCEL_ENV === 'development'
const baseURL = process.env.DOMAIN_URL

type Props = {
  path: string
}

export const getUrl = ({ path }: Props) => {
  if (isNodeDev || isVercelDev) {
    return `${baseURL}/api/${path}`
  }
  return `${baseURL}/${path}`
}

export const getPath = ({ path }: Props) => {
  if (isNodeDev || isVercelDev) {
    return `${baseURL}/api/${path}`
  }
  return `${baseURL}/${path}`
}
