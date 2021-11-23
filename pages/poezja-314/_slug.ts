import Vue from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
import type { MetaInfo } from 'vue-meta'
import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'
import { factoryHeadPostPoem } from '@/utils/factory.head.post.poem'

export default Vue.extend({
  name: 'PagePoezja314Slug',
  components: {
    LazyHydrate,
    BlocksAdjacentPostLinksPoem: () => import(/* webpackChunkName: "blocks-adjacent-post-links-poem" */'@/components/blocks/AdjacentPostLinksPoem/AdjacentPostLinksPoem.vue'),
    BlocksCoverPoem: () => import(/* webpackChunkName: "blocks-cover-poem" */'@/components/blocks/CoverPoem/CoverPoem.vue'),
    BlocksListPoemsSuggestions: () => import(/* webpackChunkName: "blocks-list-poems-suggestions" */'@/components/blocks/ListPoemsSuggestions/ListPoemsSuggestions.vue'),
    BlocksListStoriesSuggestions: () => import(/* webpackChunkName: "blocks-list-stories-suggestions" */'@/components/blocks/ListStoriesSuggestions/ListStoriesSuggestions.vue'),
    BlocksPageMeta: () => import(/* webpackChunkName: "blocks-page-meta" */'@/components/blocks/PageMeta/PageMeta.vue'),
    BlocksPoemsFirstTime: () => import(/* webpackChunkName: "blocks-poems-first-time" */'@/components/blocks/PoemsFirstTime/PoemsFirstTime.vue'),
    WrappersTextPoems: () => import(/* webpackChunkName: "wrappers-text-poems" */'@/components/wrappers/TextPoems/TextPoems.vue')
  },
  async asyncData ({ $content, params, error, route }) {
    const slug = params.slug || route.path.split('/').at(-2) || 'not-found'
    const article = await $content('poezja-314', slug)
      .fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    return { article }
  },
  head (): MetaInfo {
    return factoryHeadPostPoem(this.dtoMetaPostPoem)
  },
  computed: {
    articleComponent (): 'NuxtContent' | Vue.Component {
      return 'NuxtContent'
    },
    articleProps (): object {
      return this.isCustomComponent
        ? {}
        // @ts-ignore: Remove ts-ignore for Nuxt 2.16.0
        : { document: this.article }
    },
    dtoMetaPostPoem (): DTOMetaPostPoem {
      // @ts-ignore: Remove ts-ignore for Nuxt 2.16.0
      return new DTOMetaPostPoem(this.article)
    },
    isCustomComponent (): boolean {
      return this.articleComponent !== 'NuxtContent'
    }
  }
})
