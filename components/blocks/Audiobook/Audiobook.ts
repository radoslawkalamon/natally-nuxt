import Vue from 'vue'
import type { VueConstructor } from 'vue'
import mixinPrivacyStorage from '@/utils/mixin.privacy.storage'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinPrivacyStorage>
>).extend({
  name: 'BlocksAudiobook',
  components: {
    WrappersText: () => import(/* webpackChunkName: "wrappers-text" */'@/components/wrappers/Text/Text.vue')
  },
  mixins: [mixinPrivacyStorage],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    shallShowAudiobookBlock (): boolean {
      return this.id !== '0'
    },
    shallShowPlayer (): boolean {
      return this['privacy/storage/getSoundcloud']
    },
    src (): string {
      return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.id}&color=%23c0392b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
    }
  },
  methods: {
    togglePrivacyModal (): void {
      this.$root.$emit('privacy/modal/toggle')
    }
  }
})
