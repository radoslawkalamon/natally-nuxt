import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'BlocksModalPrivacy',
  computed: {
    ...mapGetters({
      cookieCore: 'blocks/ModalPrivacy/getCookieCore',
      cookieSoundcloud: 'blocks/ModalPrivacy/getCookieSoundcloud',
      shallOpenModalPrivacy: 'blocks/ModalPrivacy/shallOpenModalPrivacy'
    })
  },
  methods: {
    ...mapActions({
      applyCookieSettings: 'blocks/ModalPrivacy/applyCookieSettings',
      updateCookieSoundcloud: 'blocks/ModalPrivacy/updateCookieSoundcloud'
    })
  }
})
