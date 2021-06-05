import { getPath } from '@/utils/getUrl'

export const getstart = {
  data: {
    name: 'Moedas Hoje API',
    repo: 'https://github.com/ediano/moedas-hoje-api',
    url: 'https://api.moedashoje.com.br',
    license: 'MIT',
    api: [{ version: 'v1', pathUrl: `${getPath({ path: 'v1' })}` }]
  }
}
