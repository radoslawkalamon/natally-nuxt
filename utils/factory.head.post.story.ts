import type { MetaInfo } from 'vue-meta'
import { DTOMetaPostStory } from './dto.meta.post.story'
import { factoryHeadSchemaArticle } from './factory.head.schema.article'
import { factoryHeadSchemaBreadcrumbs } from './factory.head.schema.breadcrumbs'
import { factoryHeadSchemaOrganization } from './factory.head.schema.organization'
import { factoryHeadSchemaPerson } from './factory.head.schema.person'
import { factoryHeadSchemaPrimaryimage } from './factory.head.schema.primaryimage'
import { factoryHeadSchemaWebpage, FactoryHeadSchemaWebpageType } from './factory.head.schema.webpage'
import { factoryHeadSchemaWebsite } from './factory.head.schema.website'
import { getURL, getTitle } from './factory.head.utils'
import { formatterTimeReading } from './formatter.time.reading'

const category = 'Opowiadania'
const categoryPath = '/opowiadania/'

export const factoryHeadPostStory = ({ createdAt, description, imageOpenGraph, timeReading, title, path, updatedAt }: DTOMetaPostStory): MetaInfo => ({
  title: getTitle({ title, category }),
  link: [
    { rel: 'canonical', href: getURL({ path }), hid: 'link:canonical' }
  ],
  meta: [
    { name: 'description', content: description, hid: 'meta:description' },
    { property: 'og:type', content: 'article', hid: 'meta:og:type' },
    { property: 'og:title', content: getTitle({ title, category }), hid: 'meta:og:title' },
    { property: 'og:description', content: description, hid: 'meta:og:description' },
    { property: 'og:url', content: getURL({ path }), hid: 'meta:og:url' },
    { property: 'og:image', content: getURL({ path: imageOpenGraph }), hid: 'meta:og:image' },
    { property: 'article:publisher', content: 'https://facebook.com/169cmpl' },
    { property: 'article:modified_time', content: updatedAt.toISOString(), hid: 'meta:article:modified_time' },
    { property: 'article:published_time', content: createdAt.toISOString(), hid: 'meta:article:published_time' },
    { property: 'article:author', content: 'https://facebook.com/169cmpl' },
    { name: 'twitter:image', content: getURL({ path: imageOpenGraph }), hid: 'meta:twitter:image' },
    { name: 'twitter:label1', content: 'Szacowany czas czytania' },
    { name: 'twitter:data1', content: formatterTimeReading(timeReading), hid: 'meta:twitter:data1' },
    { name: 'twitter:creator', content: '@radoslawkalamon' },
    { name: 'twitter:label2', content: 'Napisane przez' },
    { name: 'twitter:data2', content: 'Radosław Kalamon' }
  ],
  script: [{
    type: 'application/ld+json',
    json: {
      '@context': 'http://schema.org',
      '@graph': [
        factoryHeadSchemaOrganization(),
        factoryHeadSchemaWebsite(),
        factoryHeadSchemaPrimaryimage({
          path,
          imageOpenGraph
        }),
        factoryHeadSchemaWebpage({
          category,
          createdAt: createdAt.toISOString(),
          path,
          title,
          updatedAt: updatedAt.toISOString(),
          webpageType: FactoryHeadSchemaWebpageType.WebPage
        }),
        factoryHeadSchemaBreadcrumbs({
          breadcrumbs: [{ name: category, path: categoryPath }, { name: title, path }],
          path
        }),
        factoryHeadSchemaArticle({
          category,
          createdAt: createdAt.toISOString(),
          imageOpenGraph,
          path,
          title,
          updatedAt: updatedAt.toISOString()
        }),
        factoryHeadSchemaPerson()
      ]
    }
  }]
})
