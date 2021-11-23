import Vue from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
import type { MetaInfo } from 'vue-meta'
import { factoryHeadPageNotfound } from '@/utils/factory.head.page.notfound'

export default Vue.extend({
  name: 'Page404',
  components: {
    LazyHydrate,
    BlocksAnimationPufferfish: () => import(/* webpackChunkName: "blocks-animation-pufferfish" */'@/components/blocks/AnimationPufferfish/AnimationPufferfish.vue'),
    BlocksListPoemsSuggestions: () => import(/* webpackChunkName: "blocks-list-poems-suggestions" */'@/components/blocks/ListPoemsSuggestions/ListPoemsSuggestions.vue'),
    BlocksListStoriesSuggestions: () => import(/* webpackChunkName: "blocks-list-stories-suggestions" */'@/components/blocks/ListStoriesSuggestions/ListStoriesSuggestions.vue'),
    BlocksPageMeta404: () => import(/* webpackChunkName: "blocks-page-meta-404" */'@/components/blocks/PageMeta404/PageMeta404.vue')
  },
  head (): MetaInfo {
    return factoryHeadPageNotfound()
  }
})
