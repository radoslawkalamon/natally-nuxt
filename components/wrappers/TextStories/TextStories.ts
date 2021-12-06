import Vue from 'vue'
import TextBase from '@/components/wrappers/Text/Text.vue'

export default Vue.extend({
  name: 'WrappersTextStories',
  extends: TextBase,
  computed: {
    wrapperClasses (): string[] {
      return ['text', 'text-stories']
    }
  }
})
