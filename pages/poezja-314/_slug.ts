import Vue from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
import type { MetaInfo } from 'vue-meta'
import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'
import { factoryHeadPostPoem } from '@/utils/factory.head.post.poem'
import ComponentsLoaderPoems from '@/components/components/LoaderPoems/LoaderPoems'

const usePoemLoader = (component: Promise<typeof import('*.vue')>) => ({
  component,
  delay: 100,
  loading: ComponentsLoaderPoems
})

export default Vue.extend({
  name: 'PagePoezja314Slug',
  components: {
    LazyHydrate,
    BlocksAdjacentPostLinksPoem: () => import(/* webpackChunkName: "blocks" */'@/components/blocks/AdjacentPostLinksPoem/AdjacentPostLinksPoem.vue'),
    BlocksCoverPoem: () => import(/* webpackChunkName: "blocks" */'@/components/blocks/CoverPoem/CoverPoem.vue'),
    BlocksListPoemsSuggestions: () => import(/* webpackChunkName: "blocks-list-poems-suggestions" */'@/components/blocks/ListPoemsSuggestions/ListPoemsSuggestions.vue'),
    BlocksListStoriesSuggestions: () => import(/* webpackChunkName: "blocks-list-stories-suggestions" */'@/components/blocks/ListStoriesSuggestions/ListStoriesSuggestions.vue'),
    BlocksPageMeta: () => import(/* webpackChunkName: "blocks" */'@/components/blocks/PageMeta/PageMeta.vue'),
    BlocksPoemsFirstTime: () => import(/* webpackChunkName: "blocks-poems-first-time" */'@/components/blocks/PoemsFirstTime/PoemsFirstTime.vue'),
    PoemsChecklista: () => usePoemLoader(import(/* webpackChunkName: "poems-checklista" */'@/components/poems/Checklista/Checklista.vue')),
    PoemsDysonans: () => usePoemLoader(import(/* webpackChunkName: "poems-dysonans" */'@/components/poems/Dysonans/Dysonans.vue')),
    PoemsGrzeszki: () => usePoemLoader(import(/* webpackChunkName: "poems-grzeszki" */'@/components/poems/Grzeszki/Grzeszki.vue')),
    PoemsHoroskop: () => usePoemLoader(import(/* webpackChunkName: "poems-horoskop" */'@/components/poems/Horoskop/Horoskop.vue')),
    PoemsMiedzyWierszami: () => usePoemLoader(import(/* webpackChunkName: "poems-miedzy-wierszami" */'@/components/poems/MiedzyWierszami/MiedzyWierszami.vue')),
    PoemsMieta: () => usePoemLoader(import(/* webpackChunkName: "poems-mieta" */'@/components/poems/Mieta/Mieta.vue')),
    PoemsPromocjaLGBT: () => usePoemLoader(import(/* webpackChunkName: "poems-promocja-lgbt" */'@/components/poems/PromocjaLGBT/PromocjaLGBT.vue')),
    PoemsSmutek20: () => usePoemLoader(import(/* webpackChunkName: "poems-smutek-2-0" */'@/components/poems/Smutek20/Smutek20.vue')),
    PoemsUprzejmieProszeUciekacPredziutko: () => usePoemLoader(import(/* webpackChunkName: "poems-uprzejmie-prosze-uciekac-predziutko" */'@/components/poems/UprzejmieProszeUciekacPredziutko/UprzejmieProszeUciekacPredziutko.vue')),
    PoemsWsparcie: () => usePoemLoader(import(/* webpackChunkName: "poems-wsparcie" */'@/components/poems/Wsparcie/Wsparcie.vue')),
    PoemsZnak: () => usePoemLoader(import(/* webpackChunkName: "poems-znak" */'@/components/poems/Znak/Znak.vue')),
    WrappersTextPoems: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/TextPoems/TextPoems.vue')
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
    articleComponent (): string {
      return this.dtoMetaPostPoem.component || 'NuxtContent'
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
