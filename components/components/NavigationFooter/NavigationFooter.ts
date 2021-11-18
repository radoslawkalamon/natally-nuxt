import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsNavigationFooter',
  methods: {
    togglePrivacyModal (): void {
      this.$root.$emit('privacy/modal/toggle')
    }
  }
})
