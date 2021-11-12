import Vue from 'vue'
import PageHomepage from '@/pages/index.vue'
import { DTOMetaPageConstructor } from '@/utils/dto.meta.page'
import { FactoryHeadSchemaWebpageType } from '@/utils/factory.head.schema.webpage'

export default Vue.extend({
  name: 'PageAudiobooki',
  extends: PageHomepage,
  async asyncData ({ $content }) {
    const page = await $content('/audiobooki')
      .fetch<DTOMetaPageConstructor>()

    return { page }
  },
  computed: {
    webpageType (): FactoryHeadSchemaWebpageType {
      return FactoryHeadSchemaWebpageType.WebPage
    }
  }
})