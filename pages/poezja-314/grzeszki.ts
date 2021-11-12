import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'
import PoemsGrzeszki from '@/components/poems/Grzeszki/Grzeszki.vue'

export default Vue.extend({
  name: 'PagePoezja314Grzeszki',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return PoemsGrzeszki
    }
  }
})
