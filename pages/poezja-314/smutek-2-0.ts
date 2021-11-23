import Vue from 'vue'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'

export default Vue.extend({
  name: 'PagePoezja314Smutek20',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return hydrateWhenVisible(() => import(/* webpackChunkName: "poems-smutek-2-0" */'@/components/poems/Smutek20/Smutek20.vue'))
    }
  }
})
