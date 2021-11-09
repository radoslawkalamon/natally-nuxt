import Vue from 'vue'
import PageHomepage from '@/pages/index.vue'
import { DTOMetaPageConstructor } from '@/utils/dto.meta.page'

export default Vue.extend({
  name: 'PageAudiobooki',
  extends: PageHomepage,
  async asyncData ({ $content }) {
    const page = await $content()
      .where({ path: '/poezja-314' })
      .fetch<DTOMetaPageConstructor>()

    return { page: page.pop() }
  }
})
