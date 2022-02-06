import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsNavigationFooter',
  components: {
    ComponentsButton: () => import(/* webpackChunkName: "components" */'@/components/components/Button/Button.vue'),
    ComponentsLink: () => import(/* webpackChunkName: "components" */'@/components/components/Link/Link.vue'),
    WrappersNavigation: () => import(/* webpackChunkName: "wrappers-navigation" */'@/components/wrappers/Navigation/Navigation.vue')
  },
  methods: {
    togglePrivacyModal (): void {
      this.$root.$emit('privacy/modal/toggle')
    }
  }
})
