import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksFooter',
  computed: {
    crustyBreadTechWebsite (): string {
      return 'https://pieczywotwarde.pl'
    },
    fullYear (): string {
      return `${(new Date()).getFullYear()}`
    },
    websiteName (): string {
      return '169cm.pl'
    }
  }
})
