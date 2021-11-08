import { headDefault, getURL } from './factory.head.utils'

export const factoryHeadSchemaWebsite = () => ({
  '@type': 'WebSite',
  '@id': getURL({ anchor: '#website' }),
  url: getURL({}),
  name: headDefault.title,
  description: headDefault.description,
  publisher: {
    '@id': getURL({ anchor: '#organization' })
  },
  inLanguage: 'pl-PL'
})
