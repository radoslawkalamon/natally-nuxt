import Vue from 'vue'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'

export default Vue.extend({
  name: 'PagePoezja314Grzeszki',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return hydrateWhenVisible(() => import(/* webpackChunkName: "poems-grzeszki" */'@/components/poems/Grzeszki/Grzeszki.vue'))
    }
  }
})
