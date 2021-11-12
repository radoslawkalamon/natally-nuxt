import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListStoriesSuggestions',
  computed: {
    storiesQuantity (): number {
      return 2
    }
  }
})
