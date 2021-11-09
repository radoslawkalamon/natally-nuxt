import { headDefault, getTitle, getURL } from './factory.head.utils'

type factoryHeadSchemaArticleArgs = {
  category: string
  createdAt: string
  imageOpenGraph?: string
  path: string
  title: string
  updatedAt: string
}

export const factoryHeadSchemaArticle = ({
  category,
  createdAt,
  imageOpenGraph = headDefault.imageOpenGraph,
  path,
  title,
  updatedAt
}: factoryHeadSchemaArticleArgs) => ({
  '@type': 'Article',
  '@id': getURL({ path, anchor: '#article' }),
  isPartOf: {
    '@id': getURL({ path, anchor: '#webpage' })
  },
  author: {
    '@id': getURL({ anchor: '#person/radoslaw-kalamon' })
  },
  headline: getTitle({ category, title }),
  datePublished: createdAt,
  dateModified: updatedAt,
  mainEntityOfPage: {
    '@id': getURL({ path, anchor: '#webpage' })
  },
  publisher: {
    '@id': getURL({ anchor: '#organization' })
  },
  image: {
    '@id': getURL({ path, anchor: '#primaryimage' })
  },
  thumbnailUrl: getURL({ path: imageOpenGraph }),
  articleSection: [category],
  inLanguage: 'pl-PL'
})
