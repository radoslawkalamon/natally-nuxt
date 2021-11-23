import Vue from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
import PageHomepage from '@/pages/index.vue'
import { DTOMetaPageConstructor } from '@/utils/dto.meta.page'
import { FactoryHeadSchemaWebpageType } from '@/utils/factory.head.schema.webpage'

export default Vue.extend({
  name: 'PagePolitykaPrywatnosci',
  components: {
    LazyHydrate,
    BlocksPageMeta: () => import(/* webpackChunkName: "blocks" */'@/components/blocks/PageMeta/PageMeta.vue'),
    WrappersText: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Text/Text.vue')
  },
  extends: PageHomepage,
  async asyncData ({ $content }) {
    const page = await $content('/polityka-prywatnosci')
      .fetch<DTOMetaPageConstructor>()

    return { page }
  },
  computed: {
    webpageType (): FactoryHeadSchemaWebpageType {
      return FactoryHeadSchemaWebpageType.WebPage
    }
  }
})
