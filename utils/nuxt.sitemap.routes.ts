import { $content } from '@nuxt/content'
import { DTOMetaPage, DTOMetaPageConstructor } from './dto.meta.page'

type sitemapRoute = {
  url: string;
  img: Array<{
    url: string
  }>;
  lastmod: Date;
}

export const nuxtSitemapRoutes = async () => {
  const pages = await $content('/', { deep: true }).fetch()
  return pages
    .map((page: DTOMetaPageConstructor): sitemapRoute => {
      const pageMeta = new DTOMetaPage(page)
      return {
        url: pageMeta.path,
        img: [{
          url: pageMeta.imageOpenGraph
        }],
        lastmod: pageMeta.updatedAt
      }
    })
}
