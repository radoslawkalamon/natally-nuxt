import { $content } from '@nuxt/content'
import type { Feed } from 'feed'
import type { FeedOptions } from 'feed/lib/typings'
import { DTOMetaPage, DTOMetaPageConstructor } from './dto.meta.page'
import { getTitle, getURL, headDefault } from './factory.head.utils'

const pagesToFilter = [
  '/',
  '/audiobooki/',
  '/poezja-314/',
  '/polityka-prywatnosci/'
]

const defaultFeedOptions: FeedOptions = {
  author: {
    name: 'Radosław Kalamon',
    email: 'kontakt@169cm.pl',
    link: 'https://radoslawkalamon.pl/'
  },
  copyright: '169cm.pl © 2021',
  description: headDefault.description,
  language: 'pl-PL',
  link: getURL(),
  id: 'rss2',
  title: getTitle()
}

const nuxtFeedCreate = async (feed: Feed) => {
  const pages = await $content('/', { deep: true }).fetch()
  const articlesMeta = pages
    .map((page: DTOMetaPageConstructor) => new DTOMetaPage(page))
    .filter((page: DTOMetaPage) => !pagesToFilter.includes(page.path))
    .sort((a: DTOMetaPage, b: DTOMetaPage) => b.createdAt.getTime() - a.createdAt.getTime())

  articlesMeta.forEach((articleMeta: DTOMetaPage) => {
    const { createdAt, description, path, title } = articleMeta
    feed.addItem({
      author: [defaultFeedOptions.author || {}],
      content: nuxtFeedCreateContent({ description, path }),
      date: createdAt,
      description,
      id: getURL({ path }),
      link: getURL({ path }),
      title
    })
  })

  feed.options = defaultFeedOptions
}

const nuxtFeedCreateContent = ({ description, path }: Record<string, string>) => {
  return `<p>${description}</p><p>Czytaj dalej na <a href="${path}">169cm.pl</a></p>`
}

export const nuxtFeed = () => {
  return [{
    path: '/feed.xml',
    create: nuxtFeedCreate,
    cacheTime: 1000 * 60 * 60 * 24,
    type: 'rss2'
  }]
}
