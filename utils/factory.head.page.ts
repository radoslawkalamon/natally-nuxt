import { DTOMetaPage } from './dto.meta.page'
import { factoryHeadSchemaBreadcrumbs } from './factory.head.schema.breadcrumbs'
import { factoryHeadSchemaOrganization } from './factory.head.schema.organization'
import { factoryHeadSchemaPrimaryimage } from './factory.head.schema.primaryimage'
import { factoryHeadSchemaWebpage, FactoryHeadSchemaWebpageType } from './factory.head.schema.webpage'
import { factoryHeadSchemaWebsite } from './factory.head.schema.website'
import { getURL, getTitle } from './factory.head.utils'

export const factoryHeadPage = ({ createdAt, description, title, path, updatedAt }: DTOMetaPage, webpageType: FactoryHeadSchemaWebpageType) => ({
  title: getTitle({ title }),
  link: [
    { rel: 'canonical', href: getURL({ path }), hid: 'link:canonical' }
  ],
  meta: [
    { name: 'description', content: description, hid: 'meta:description' },
    { property: 'og:title', content: getTitle({ title }), hid: 'meta:og:title' },
    { property: 'og:description', content: description, hid: 'meta:og:description' },
    { property: 'og:url', content: getURL({ path }), hid: 'meta:og:url' }
  ],
  script: [{
    type: 'application/ld+json',
    json: {
      '@context': 'http://schema.org',
      '@graph': [
        factoryHeadSchemaOrganization(),
        factoryHeadSchemaWebsite(),
        factoryHeadSchemaPrimaryimage({
          path
        }),
        factoryHeadSchemaWebpage({
          createdAt: createdAt.toISOString(),
          path,
          title,
          updatedAt: updatedAt.toISOString(),
          webpageType
        }),
        factoryHeadSchemaBreadcrumbs({
          breadcrumbs: [{ name: title, path }],
          path
        })
      ]
    }
  }]
})
