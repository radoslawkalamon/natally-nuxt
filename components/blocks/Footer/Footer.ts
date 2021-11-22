import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksFooter',
  components: {
    ComponentsLogoCrustyBread: () => import(/* webpackChunkName: "components-logo-crusty-bread" */'@/components/components/LogoCrustyBread/LogoCrustyBread.vue'),
    ComponentsNavigationFooter: () => import(/* webpackChunkName: "components-navigation-footer" */'@/components/components/NavigationFooter/NavigationFooter.vue'),
    WrappersText: () => import(/* webpackChunkName: "wrappers-text" */'@/components/wrappers/Text/Text.vue')
  },
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
