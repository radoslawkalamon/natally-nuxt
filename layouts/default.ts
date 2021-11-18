import Vue from 'vue'
import type { VueConstructor } from 'vue'
import mixinWindowScrollEmitter from '@/utils/mixin.windowScroll.emitter'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinWindowScrollEmitter>
>).extend({
  name: 'LayoutsDefault',
  mixins: [mixinWindowScrollEmitter]
})
