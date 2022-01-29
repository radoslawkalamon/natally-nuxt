import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsNavigationFooter',
  components: {
    ComponentsButton: () => import(/* webpackChunkName: "components" */'@/components/components/Button/Button.vue'),
    ComponentsLinkText: () => import(/* webpackChunkName: "components-link-text" */'@/components/components/LinkText/LinkText.vue'),
    WrappersNavigation: () => import(/* webpackChunkName: "wrappers-navigation" */'@/components/wrappers/Navigation/Navigation.vue')
  },
  methods: {
    togglePrivacyModal (): void {
      this.$root.$emit('privacy/modal/toggle')
    }
  }
})
