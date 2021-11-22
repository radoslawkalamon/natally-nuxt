import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'
import { DTOMetaPostStory, DTOMetaPostStoryConstructor } from '@/utils/dto.meta.post.story'
import { factoryHeadPostStory } from '@/utils/factory.head.post.story'

export default Vue.extend({
  name: 'PageOpowiadaniaSlug',
  components: {
    BlocksAdjacentPostLinksStory: () => import(/* webpackChunkName: "blocks-adjacent-post-links-story" */'@/components/blocks/AdjacentPostLinksStory/AdjacentPostLinksStory.vue'),
    BlocksAudiobook: () => import(/* webpackChunkName: "blocks-audiobook" */'@/components/blocks/Audiobook/Audiobook.vue'),
    BlocksCoverStory: () => import(/* webpackChunkName: "blocks-cover-story" */'@/components/blocks/CoverStory/CoverStory.vue'),
    BlocksListPoemsSuggestions: () => import(/* webpackChunkName: "blocks-list-poems-suggestions" */'@/components/blocks/ListPoemsSuggestions/ListPoemsSuggestions.vue'),
    BlocksListStoriesSuggestions: () => import(/* webpackChunkName: "blocks-list-stories-suggestions" */'@/components/blocks/ListStoriesSuggestions/ListStoriesSuggestions.vue'),
    BlocksPageMeta: () => import(/* webpackChunkName: "blocks-page-meta" */'@/components/blocks/PageMeta/PageMeta.vue'),
    BlocksReadingProgress: () => import(/* webpackChunkName: "blocks-reading-progress" */'@/components/blocks/ReadingProgress/ReadingProgress.vue'),
    WrappersTextStories: () => import(/* webpackChunkName: "wrappers-text-stories" */'@/components/wrappers/TextStories/TextStories.vue')
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
