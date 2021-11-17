import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import mixinWindowScrollValues from '@/utils/mixin.windowScroll.values'

export default (Vue as VueConstructor<
  Vue &
  InstanceType<typeof mixinWindowScrollValues>
>).extend({
  name: 'BlocksHeader',
  components: {
    ComponentsButtonHamburger: () => import('@/components/components/ButtonHamburger/ButtonHamburger.vue'),
    ComponentsLogo: () => import('@/components/components/Logo/Logo.vue')
  },
  mixins: [mixinWindowScrollValues],
  computed: {
    ...mapGetters({
      matchMediaIsDesktop: 'matchMedia/isDesktop',
      isDrawerOpen: 'blocks/drawer/shallOpenDrawer'
    }),
    shallShowHeader (): boolean {
      const isScrollBeyondThreshold = this['common/windowScroll/scrollPosition'] < 80
      const isScrollUp = this['common/windowScroll/scrollDelta'] < 0
      return [
        this.isDrawerOpen,
        isScrollBeyondThreshold,
        isScrollUp,
        this.matchMediaIsDesktop
      ].some(e => e)
    }
  },
  methods: {
    ...mapActions({
      toggleDrawer: 'blocks/drawer/toggleDrawer'
    })
  }
})
