import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'
import { DTOMetaPostStory, DTOMetaPostStoryConstructor } from '@/utils/dto.meta.post.story'
import { factoryHeadPostStory } from '@/utils/factory.head.post.story'
import { formatterDateMeta } from '@/utils/formatter.date.meta'

export default Vue.extend({
  async asyncData ({ $content, params, error }) {
    const article = await $content('opowiadania', params.slug)
      .fetch<DTOMetaPostStoryConstructor>()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    return { article }
  },
  head (): MetaInfo {
    return factoryHeadPostStory(this.dtoMetaPostStory)
  },
  computed: {
    dtoMetaPostStory (): DTOMetaPostStory {
      // @ts-ignore: Remove ts-ignore for Nuxt 2.16.0
      return new DTOMetaPostStory(this.article)
    },
    storyDatePublished (): string {
      return formatterDateMeta(this.dtoMetaPostStory.createdAt)
    }
  }
})
