import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsLoading',
  computed: {
    loadingLabel (): string {
      return 'Ładowanie...'
    }
  }
})
