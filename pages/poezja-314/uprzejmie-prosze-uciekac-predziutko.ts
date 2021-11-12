import Vue from 'vue'
import PagePoezja314Slug from '@/pages/poezja-314/_slug.vue'
import PoemsUprzejmieProszeUciekacPredziutko from '@/components/poems/UprzejmieProszeUciekacPredziutko/UprzejmieProszeUciekacPredziutko.vue'

export default Vue.extend({
  name: 'PagePoezja314UprzejmieProszeUciekacPredziutko',
  extends: PagePoezja314Slug,
  computed: {
    articleComponent () {
      return PoemsUprzejmieProszeUciekacPredziutko
    }
  }
})
