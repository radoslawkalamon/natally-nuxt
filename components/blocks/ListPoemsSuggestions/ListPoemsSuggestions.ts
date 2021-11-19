import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListPoemsSuggestions',
  props: {
    without: {
      type: Array as Vue.PropType<string[]>,
      default: () => []
    }
  }
})
