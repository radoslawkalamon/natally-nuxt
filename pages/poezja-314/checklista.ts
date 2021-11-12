import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'
import PoemsChecklista from '@/components/poems/Checklista/Checklista.vue'

export default Vue.extend({
  name: 'PagePoezja314Checklista',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return PoemsChecklista
    }
  }
})
