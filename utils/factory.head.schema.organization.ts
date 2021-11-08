import { headDefault, getURL } from './factory.head.utils'

export const factoryHeadSchemaOrganization = () => ({
  '@type': 'Organization',
  '@id': getURL({ anchor: '#organization' }),
  name: headDefault.title,
  url: getURL({}),
  sameAs: [
    'https://facebook.com/169cmpl',
    'https://soundcloud.com/169cmpl'
  ],
  logo: {
    '@type': 'ImageObject',
    '@id': getURL({ anchor: '#logo' }),
    inLanguage: 'pl-PL',
    url: getURL({ path: '/images/common.logo.png' }),
    contentUrl: getURL({ path: '/images/common.logo.png' }),
    width: 448,
    height: 224,
    caption: headDefault.title
  },
  image: {
    '@id': getURL({ anchor: '#logo' })
  }
})
