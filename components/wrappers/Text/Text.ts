import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsText',
  computed: {
    wrapperClasses (): string[] {
      return ['text']
    }
  }
})
