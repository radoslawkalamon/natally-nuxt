import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mapActions } from 'vuex'

import mixinWindowScrollEmitter from '@/utils/mixin.windowScroll.emitter'

export default (Vue as VueConstructor<
  Vue &
  InstanceType<typeof mixinWindowScrollEmitter>
>).extend({
  name: 'LayoutsDefault',
  mixins: [mixinWindowScrollEmitter],
  mounted (): void {
    this.initMatchMedia()
  },
  methods: {
    ...mapActions({
      initMatchMedia: 'matchMedia/init'
    })
  }
})
