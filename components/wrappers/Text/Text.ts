import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsText',
  computed: {
    wrapperClasses () {
      return ['text']
    },
    wrapperTestId () {
      return 'wrappers-text'
    }
  }
})
