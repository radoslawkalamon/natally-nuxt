import Vue from 'vue'
import { mapActions } from 'vuex'
import { getPrivacyStorageValue, PrivacyStorageItems } from '@/utils/privacy.storage'

export default Vue.extend({
  name: 'BlocksAudiobook',
  components: {
    WrappersText: () => import(/* webpackChunkName: "wrappers-text" */'@/components/wrappers/Text/Text.vue')
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    shallShowPlayer (): boolean {
      return getPrivacyStorageValue(PrivacyStorageItems.Soundcloud)
    },
    src (): string {
      return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.id}&color=%23c0392b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
    }
  },
  methods: {
    ...mapActions({
      toggleModalPrivacy: 'blocks/ModalPrivacy/toggleModalPrivacy'
    })
  }
})
