import { $content } from '@nuxt/content'
import { DTOMetaPage, DTOMetaPageConstructor } from './dto.meta.page'

export const nuxtSitemapRoutes = async () => {
  const pages = await $content('/', { deep: true }).fetch()
  return pages
    .map((page: DTOMetaPageConstructor) => {
      const pageMeta = new DTOMetaPage(page)
      return {
        url: pageMeta.path,
        img: [{
          url: pageMeta.imageOpenGraph
        }],
        lastmod: pageMeta.updatedAt
      }
    })
    .filter((page: DTOMetaPageConstructor) => page)
}
