import { getTitle, getURL } from './factory.head.utils'

export enum FactoryHeadSchemaWebpageType {
  WebPage = 'WebPage',
  CollectionPage = 'CollectionPage'
}

type factoryHeadSchemaWebpageArgs = {
  category?: string
  createdAt?: string
  path: string
  title: string
  updatedAt?: string
  webpageType?: FactoryHeadSchemaWebpageType
}

export const factoryHeadSchemaWebpage = ({
  category,
  createdAt,
  path,
  title,
  updatedAt,
  webpageType = FactoryHeadSchemaWebpageType.WebPage
}: factoryHeadSchemaWebpageArgs) => ({
  '@type': webpageType,
  '@id': getURL({ path, anchor: '#webpage' }),
  url: getURL(),
  name: getTitle({ category, title }),
  isPartOf: {
    '@id': getURL({ anchor: '#website' })
  },
  about: {
    '@id': getURL({ anchor: '#organization' })
  },
  primaryImageOfPage: {
    '@id': getURL({ path, anchor: '#primaryimage' })
  },
  ...(createdAt ? { datePublished: createdAt } : {}),
  ...(updatedAt ? { dateModified: updatedAt } : {}),
  breadcrumb: {
    '@id': getURL({ path, anchor: '#breadcrumb' })
  },
  inLanguage: 'pl-PL',
  potentialAction: [
    {
      '@type': 'ReadAction',
      target: [
        getURL({ path })
      ]
    }
  ]
})
