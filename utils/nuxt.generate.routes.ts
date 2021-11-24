import { $content } from '@nuxt/content'
import { DTOMetaPage, DTOMetaPageConstructor } from './dto.meta.page'

export const nuxtGenerateRoutes = async () => {
  const pages = await $content('/', { deep: true }).fetch()
  return pages
    .map((page: DTOMetaPageConstructor) => {
      const pageMeta = new DTOMetaPage(page)
      return pageMeta.path
    })
    .filter((page: DTOMetaPageConstructor) => page)
}