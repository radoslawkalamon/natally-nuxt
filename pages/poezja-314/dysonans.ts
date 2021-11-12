import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'
import PoemsDysonans from '@/components/poems/Dysonans/Dysonans.vue'

export default Vue.extend({
  name: 'PagePoezja314Dysonans',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return PoemsDysonans
    }
  }
})
