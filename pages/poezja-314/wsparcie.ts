import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'
import PoemsWsparcie from '@/components/poems/Wsparcie/Wsparcie.vue'

export default Vue.extend({
  name: 'PagePoezja314Wsparcie',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return PoemsWsparcie
    }
  }
})
