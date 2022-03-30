import Vue from 'vue'
import pkg from '@/package.json'

export default Vue.extend({
  name: 'BlocksFooter',
  components: {
    ComponentsLogoCrustyBread: () => import(/* webpackChunkName: "components-logo-crusty-bread" */'@/components/components/LogoCrustyBread/LogoCrustyBread.vue'),
    ComponentsNavigationFooter: () => import(/* webpackChunkName: "components-navigation-footer" */'@/components/components/NavigationFooter/NavigationFooter.vue'),
    WrappersText: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Text/Text.vue')
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
    },
    commitSha (): string {
      return process.env.DEPLOY_COMMIT_SHA || `v${pkg.version}`
    }
  }
})
