import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'

export default Vue.extend({
  name: 'PagePoezja314Smutek20',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return () => import(/* webpackChunkName: "poems-smutek-2-0", webpackPrefetch: true */'@/components/poems/Smutek20/Smutek20.vue')
    }
  }
})
