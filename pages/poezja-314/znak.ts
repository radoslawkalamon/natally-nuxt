import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'

export default Vue.extend({
  name: 'PagePoezja314Znak',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return () => import(/* webpackChunkName: "poems-znak" */'@/components/poems/Znak/Znak.vue')
    }
  }
})
