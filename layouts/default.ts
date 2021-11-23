import Vue from 'vue'
import type { VueConstructor } from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
import mixinWindowScrollEmitter from '@/utils/mixin.windowScroll.emitter'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinWindowScrollEmitter>
>).extend({
  name: 'LayoutsDefault',
  components: {
    LazyHydrate,
    BlocksDrawer: () => import(/* webpackChunkName: "blocks-drawer" */'@/components/blocks/Drawer/Drawer.vue'),
    BlocksFooter: () => import(/* webpackChunkName: "blocks-footer" */'@/components/blocks/Footer/Footer.vue'),
    BlocksHeader: () => import(/* webpackChunkName: "blocks-header" */'@/components/blocks/Header/Header.vue'),
    BlocksModalPrivacy: () => import(/* webpackChunkName: "blocks-modal-privacy" */'@/components/blocks/ModalPrivacy/ModalPrivacy.vue'),
    WrappersMain: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Main/Main.vue')
  },
  mixins: [mixinWindowScrollEmitter]
})
