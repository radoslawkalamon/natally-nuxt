import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListPoemsSuggestions',
  computed: {
    poemsQuantity (): number {
      return 6
    }
  }
})
