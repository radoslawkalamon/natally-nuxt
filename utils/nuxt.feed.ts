import nodeFs from 'fs'
import nodePath from 'path'
import { $content } from '@nuxt/content'
import type { Feed } from 'feed'
import type { FeedOptions } from 'feed/lib/typings'
import { DTOMetaPage, DTOMetaPageConstructor } from './dto.meta.page'
import { getTitle, getURL, headDefault } from './factory.head.utils'

const pagesToFilter: string[] = [
  '/',
  '/audiobooki/',
  '/poezja-314/',
  '/polityka-prywatnosci/'
]

const defaultFeedOptions: FeedOptions = {
  copyright: `169cm.pl © ${(new Date()).getFullYear()}`,
  description: headDefault.description,
  image: getURL({ path: '/images/common.icon.192x192.white.png' }),
  language: 'pl-PL',
  link: getURL(),
  id: 'rss2',
  title: getTitle()
}

const nuxtFeedCreate = async (feed: Feed): Promise<void> => {
  const pages = await $content('/', { deep: true }).fetch()
  const articlesMeta = pages
    .map((page: DTOMetaPageConstructor) => new DTOMetaPage(page))
    .filter((page: DTOMetaPage) => !pagesToFilter.includes(page.path))
    .sort((a: DTOMetaPage, b: DTOMetaPage) => b.createdAt.getTime() - a.createdAt.getTime())

  articlesMeta.forEach((articleMeta: DTOMetaPage) => {
    const { createdAt, description, imageOpenGraph, path, title } = articleMeta
    feed.addItem({
      content: nuxtFeedCreateContent({ description, path }),
      date: createdAt,
      description,
      id: getURL({ path }),
      image: {
        length: nodeFs.statSync(nodePath.resolve(__dirname, `../static${imageOpenGraph}`)).size,
        url: getURL({ path: imageOpenGraph })
      },
      link: getURL({ path }),
      title
    })
  })

  feed.options = defaultFeedOptions
}

const nuxtFeedCreateContent = ({ description, path }: Record<string, string>): string => {
  return `<p>${description}</p><p>Czytaj dalej na <a href="${getURL({ path })}">${getURL({ path })}</a></p>`
}

export const nuxtFeed = () => {
  return [{
    path: '/feed.xml',
    create: nuxtFeedCreate,
    cacheTime: 1000 * 60 * 60 * 24,
    type: 'rss2'
  }]
}
