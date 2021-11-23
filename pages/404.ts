import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'
import { factoryHeadPageNotfound } from '@/utils/factory.head.page.notfound'

export default Vue.extend({
  name: 'Page404',
  components: {
    BlocksAnimationPufferfish: () => import(/* webpackChunkName: "blocks-animation-pufferfish" */'@/components/blocks/AnimationPufferfish/AnimationPufferfish.vue'),
    BlocksListPoemsSuggestions: () => import(/* webpackChunkName: "blocks-list-poems-suggestions" */'@/components/blocks/ListPoemsSuggestions/ListPoemsSuggestions.vue'),
    BlocksListStoriesSuggestions: () => import(/* webpackChunkName: "blocks-list-stories-suggestions" */'@/components/blocks/ListStoriesSuggestions/ListStoriesSuggestions.vue'),
    ComponentsButtonLink: () => import(/* webpackChunkName: "components-button-link" */'@/components/components/ButtonLink/ButtonLink.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components-title" */'@/components/components/Title/Title.vue'),
    WrappersText: () => import(/* webpackChunkName: "wrappers-text" */'@/components/wrappers/Text/Text.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers-section" */'@/components/wrappers/Section/Section.vue')
  },
  head (): MetaInfo {
    return factoryHeadPageNotfound()
  }
})
