import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksNavigationFooter',
  methods: {
    togglePrivacyModal (): void {
      this.$root.$emit('privacy/modal/toggle')
    }
  }
})
