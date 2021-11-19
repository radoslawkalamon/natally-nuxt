import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListStoriesSuggestions',
  props: {
    without: {
      type: Array as Vue.PropType<string[]>,
      default: () => []
    }
  }
})
