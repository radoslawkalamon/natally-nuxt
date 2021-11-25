import Vue from 'vue'
import type { VueConstructor } from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
import mixinCommonWindowScrollEmitter from '@/utils/mixin.common.windowScroll.emitter'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinCommonWindowScrollEmitter>
>).extend({
  name: 'LayoutsDefault',
  components: {
    LazyHydrate,
    BlocksDrawer: () => import(/* webpackChunkName: "blocks-drawer" */'@/components/blocks/Drawer/Drawer.vue'),
    BlocksFooter: () => import(/* webpackChunkName: "blocks-footer" */'@/components/blocks/Footer/Footer.vue'),
    BlocksHeader: () => import(/* webpackChunkName: "blocks-header" */'@/components/blocks/Header/Header.vue'),
    BlocksModalPrivacy: () => import(/* webpackChunkName: "blocks-modal-privacy" */'@/components/blocks/ModalPrivacy/ModalPrivacy.vue'),
    WrappersMain: () => import(/* webpackChunkName: "wrappers-main" */'@/components/wrappers/Main/Main.vue')
  },
  mixins: [mixinCommonWindowScrollEmitter]
})
