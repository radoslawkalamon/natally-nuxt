import Vue from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
import type { MetaInfo } from 'vue-meta'
import { DTOMetaPage, DTOMetaPageConstructor } from '@/utils/dto.meta.page'
import { factoryHeadPage } from '@/utils/factory.head.page'
import { FactoryHeadSchemaWebpageType } from '@/utils/factory.head.schema.webpage'

export default Vue.extend({
  name: 'PageIndex',
  components: {
    LazyHydrate,
    BlocksAboutMe: () => import(/* webpackChunkName: "blocks-about-me" */'@/components/blocks/AboutMe/AboutMe.vue'),
    BlocksListPoemsHomepage: () => import(/* webpackChunkName: "blocks-list-poems-homepage" */'@/components/blocks/ListPoemsHomepage/ListPoemsHomepage.vue'),
    BlocksListStoriesMain: () => import(/* webpackChunkName: "blocks-list-stories-main" */'@/components/blocks/ListStoriesMain/ListStoriesMain.vue')
  },
  async asyncData ({ $content }) {
    const page = await $content('/index')
      .fetch<DTOMetaPageConstructor>()

    return { page }
  },
  head (): MetaInfo {
    return factoryHeadPage(this.dtoMetaPage, this.webpageType)
  },
  computed: {
    dtoMetaPage (): DTOMetaPage {
      // @ts-ignore: Remove ts-ignore for Nuxt 2.16.0
      return new DTOMetaPage(this.page)
    },
    webpageType (): FactoryHeadSchemaWebpageType {
      return FactoryHeadSchemaWebpageType.CollectionPage
    }
  }
})
