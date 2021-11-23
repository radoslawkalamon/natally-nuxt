import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsNavigationFooter',
  components: {
    ComponentsButtonText: () => import(/* webpackChunkName: "components" */'@/components/components/ButtonText/ButtonText.vue'),
    ComponentsLinkText: () => import(/* webpackChunkName: "components" */'@/components/components/LinkText/LinkText.vue'),
    WrappersNavigation: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Navigation/Navigation.vue')
  },
  methods: {
    togglePrivacyModal (): void {
      this.$root.$emit('privacy/modal/toggle')
    }
  }
})
