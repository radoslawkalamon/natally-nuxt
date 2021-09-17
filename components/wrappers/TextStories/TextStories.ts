import Vue from 'vue'
import TextBase from '@/components/wrappers/Text/Text.vue'

export default Vue.extend({
  name: 'ComponentsTextStories',
  extends: TextBase,
  computed: {
    wrapperClasses () {
      return ['text', 'text-stories']
    },
    wrapperTestId () {
      return 'wrappers-text-stories'
    }
  }
})
