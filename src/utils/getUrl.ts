const isNodeDev = process.env.NODE_ENV === 'development'
const isVercelDev = process.env.VERCEL_ENV === 'development'
const isVercelPre = process.env.VERCEL_ENV === 'preview'
const baseURL = process.env.DOMAIN_URL || 'https://api.moedashoje.com.br'

export const path = (path: string) => {
  if (isNodeDev || isVercelDev || isVercelPre) {
    return `/api/${path}`
  }

  return `${baseURL}/${path}`
}
