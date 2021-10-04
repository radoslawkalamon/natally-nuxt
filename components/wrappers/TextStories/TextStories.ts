import Vue from 'vue'
import TextBase from '@/components/wrappers/Text/Text.vue'

export default Vue.extend({
  name: 'ComponentsTextStories',
  extends: TextBase,
  computed: {
    wrapperClasses (): string[] {
      return ['text', 'text-stories']
    },
    wrapperTestId (): string {
      return 'wrappers-text-stories'
    }
  }
})
