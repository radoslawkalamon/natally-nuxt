import Vue from 'vue'
import { hydrateNever } from 'vue-lazy-hydration'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'

export default Vue.extend({
  name: 'PagePoezja314Mieta',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return hydrateNever(() => import(/* webpackChunkName: "poems-mieta" */'@/components/poems/Mieta/Mieta.vue'))
    }
  }
})
