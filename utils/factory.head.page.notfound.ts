import type { MetaInfo } from 'vue-meta'
import { factoryHeadSchemaOrganization } from './factory.head.schema.organization'
import { factoryHeadSchemaWebsite } from './factory.head.schema.website'
import { getTitle } from './factory.head.utils'

const title = 'Strony nie znaleziono'
const description = 'Porobiło się! Niestety strona, której szukasz nie istnieje!'

export const factoryHeadPageNotfound = (): MetaInfo => ({
  title: getTitle({ title }),
  meta: [
    { name: 'robots', content: 'noindex, follow', hid: 'meta:robots' },
    { name: 'description', content: description, hid: 'meta:description' },
    { property: 'og:title', content: getTitle({ title }), hid: 'meta:og:title' },
    { property: 'og:description', content: description, hid: 'meta:og:description' }
  ],
  script: [{
    type: 'application/ld+json',
    json: {
      '@context': 'http://schema.org',
      '@graph': [
        factoryHeadSchemaOrganization(),
        factoryHeadSchemaWebsite()
      ]
    }
  }]
})
