import { headDefault, getTitle, getURL } from './factory.head.utils'

export const factoryHeadSchemaWebsite = () => ({
  '@type': 'WebSite',
  '@id': getURL({ anchor: '#website' }),
  url: getURL(),
  name: getTitle(),
  description: headDefault.description,
  publisher: {
    '@id': getURL({ anchor: '#organization' })
  },
  inLanguage: 'pl-PL'
})
