import Vue from 'vue'

export default Vue.extend({
  name: 'WrappersText',
  computed: {
    wrapperClasses (): string[] {
      return ['text']
    }
  }
})
