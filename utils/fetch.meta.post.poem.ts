import { FetchReturn } from '@nuxt/content/types/query-builder'

type fetchMetaPostPoemArguments = {
  $content: Vue['$content'],
  quantity?: number
}

export const fetchMetaPostPoem = async ({ $content, quantity = 1 }: fetchMetaPostPoemArguments): Promise<FetchReturn[] | FetchReturn> => {
  return await $content('/poezja-314')
    .only(['audiobookId', 'createdAt', 'description', 'imageCover', 'imageCover2x', 'imageOpenGraph', 'path', 'timeReading', 'title', 'updatedAt'])
    .sortBy('createdAt', 'desc')
    .limit(quantity)
    .fetch()
}
