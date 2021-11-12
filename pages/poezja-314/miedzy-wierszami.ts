import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'
import PoemsMiedzyWierszami from '@/components/poems/MiedzyWierszami/MiedzyWierszami.vue'

export default Vue.extend({
  name: 'PagePoezja314MiedzyWierszami',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return PoemsMiedzyWierszami
    }
  }
})
