import Vue from 'vue'
import type { VueConstructor } from 'vue'
import mixinPrivacyStorage from '@/utils/mixin.privacy.storage'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinPrivacyStorage>
>).extend({
  name: 'BlocksModalPrivacy',
  mixins: [mixinPrivacyStorage],
  data () {
    return {
      shallShowPrivacyModal: false
    }
  },
  computed: {
    privacyStorageCore (): boolean {
      return this['privacy/storage/getCore']
    },
    privacyStorageSoundcloud (): boolean {
      return this['privacy/storage/getSoundcloud']
    }
  },
  mounted (): void {
    this.$root.$on('privacy/modal/toggle', this.toggleModal)
  },
  destroyed (): void {
    this.$root.$off('privacy/modal/toggle', this.toggleModal)
  },
  methods: {
    applyCookieSettings () {
      window.location.reload()
    },
    setPrivacyStorageSoundcloud (value: boolean) {
      this['privacy/storage/setSoundcloud'](value)
    },
    toggleModal (): void {
      this.shallShowPrivacyModal = !this.shallShowPrivacyModal
    }
  }
})
