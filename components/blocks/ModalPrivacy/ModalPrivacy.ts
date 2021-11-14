import Vue from 'vue'
import { mapGetters } from 'vuex'
import { getPrivacyStorageValue, PrivacyStorageItems, setPrivacyStorageValue } from '@/utils/privacy.storage'

export default Vue.extend({
  name: 'BlocksModalPrivacy',
  computed: {
    ...mapGetters({
      shallOpenModalPrivacy: 'blocks/ModalPrivacy/shallOpenModalPrivacy'
    }),
    privacyStorageCore (): boolean {
      return getPrivacyStorageValue(PrivacyStorageItems.Core)
    },
    privacyStorageSoundcloud (): boolean {
      return getPrivacyStorageValue(PrivacyStorageItems.Soundcloud)
    }
  },
  methods: {
    applyCookieSettings () {
      window.location.reload()
    },
    updateCookieSoundcloud (v: boolean) {
      setPrivacyStorageValue(PrivacyStorageItems.Soundcloud, v)
    }
  }
})
