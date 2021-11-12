import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'
import PoemsZnak from '@/components/poems/Znak/Znak.vue'

export default Vue.extend({
  name: 'PagePoezja314Znak',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return PoemsZnak
    }
  }
})
