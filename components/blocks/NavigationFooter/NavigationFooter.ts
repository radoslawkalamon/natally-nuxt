import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'BlocksNavigationFooter',
  methods: {
    ...mapActions({
      toggleModalPrivacy: 'blocks/ModalPrivacy/toggleModalPrivacy'
    })
  }
})
