import { FetchReturn } from '@nuxt/content/types/query-builder'

type fetchMetaPostPoemArguments = {
  $content: Vue['$content'],
  quantity?: number
}

export const fetchMetaPostPoemRandom = async ({ $content, quantity = 1 }: fetchMetaPostPoemArguments): Promise<FetchReturn[] | FetchReturn> => {
  return (await $content('/poezja-314')
    .only(['createdAt', 'description', 'imageCover', 'imageOpenGraph', 'path', 'title', 'updatedAt'])
    .sortBy('createdAt', 'desc')
    .fetch())
    .sort(() => 0.5 - Math.random())
    .slice(0, quantity)
}
