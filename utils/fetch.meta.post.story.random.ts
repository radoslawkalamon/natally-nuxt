import { FetchReturn } from '@nuxt/content/types/query-builder'

type fetchMetaPostStoryArguments = {
  $content: Vue['$content'],
  quantity?: number
}

export const fetchMetaPostStoryRandom = async ({ $content, quantity = 1 }: fetchMetaPostStoryArguments): Promise<FetchReturn[] | FetchReturn> => {
  return (await $content('/opowiadania')
    .only(['audiobookId', 'createdAt', 'description', 'imageCover', 'imageCover2x', 'imageOpenGraph', 'path', 'timeReading', 'title', 'updatedAt'])
    .sortBy('createdAt', 'desc')
    .fetch())
    .sort(() => 0.5 - Math.random())
    .slice(0, quantity)
}
