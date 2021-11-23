import Vue from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
import type { MetaInfo } from 'vue-meta'
import { DTOMetaPostStory, DTOMetaPostStoryConstructor } from '@/utils/dto.meta.post.story'
import { factoryHeadPostStory } from '@/utils/factory.head.post.story'

export default Vue.extend({
  name: 'PageOpowiadaniaSlug',
  components: {
    LazyHydrate,
    BlocksAdjacentPostLinksStory: () => import(/* webpackChunkName: "blocks" */'@/components/blocks/AdjacentPostLinksStory/AdjacentPostLinksStory.vue'),
    BlocksAudiobook: () => import(/* webpackChunkName: "blocks" */'@/components/blocks/Audiobook/Audiobook.vue'),
    BlocksCoverStory: () => import(/* webpackChunkName: "blocks" */'@/components/blocks/CoverStory/CoverStory.vue'),
    BlocksListPoemsSuggestions: () => import(/* webpackChunkName: "blocks-list-poems-suggestions" */'@/components/blocks/ListPoemsSuggestions/ListPoemsSuggestions.vue'),
    BlocksListStoriesSuggestions: () => import(/* webpackChunkName: "blocks-list-stories-suggestions" */'@/components/blocks/ListStoriesSuggestions/ListStoriesSuggestions.vue'),
    BlocksPageMeta: () => import(/* webpackChunkName: "blocks" */'@/components/blocks/PageMeta/PageMeta.vue'),
    BlocksReadingProgress: () => import(/* webpackChunkName: "blocks-reading-progress" */'@/components/blocks/ReadingProgress/ReadingProgress.vue'),
    WrappersTextStories: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/TextStories/TextStories.vue')
  },
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
    }
  }
})
