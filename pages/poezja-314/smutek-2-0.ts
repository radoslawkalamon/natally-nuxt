import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'
import PoemsSmutek20 from '@/components/poems/Smutek20/Smutek20.vue'

export default Vue.extend({
  name: 'PagePoezja314Smutek20',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return PoemsSmutek20
    }
  }
})
