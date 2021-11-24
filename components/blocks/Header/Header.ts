import Vue from 'vue'
import type { VueConstructor } from 'vue'
import mixinCommonWindowScrollValues from '@/utils/mixin.common.windowScroll.values'
import mixinCommonMatchMediaDesktop from '@/utils/mixin.common.matchMedia.desktop'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinCommonWindowScrollValues>
  & InstanceType<typeof mixinCommonMatchMediaDesktop>
>).extend({
  name: 'BlocksHeader',
  components: {
    ComponentsButtonHamburger: () => import(/* webpackChunkName: "components" */'@/components/components/ButtonHamburger/ButtonHamburger.vue'),
    ComponentsLogo: () => import(/* webpackChunkName: "components" */'@/components/components/Logo/Logo.vue')
  },
  mixins: [
    mixinCommonWindowScrollValues,
    mixinCommonMatchMediaDesktop
  ],
  data () {
    return {
      isDrawerOpen: false
    }
  },
  computed: {
    shallShowHeader (): boolean {
      const isScrollBeyondThreshold = this['common/windowScroll/scrollPosition'] < 80
      const isScrollUp = this['common/windowScroll/scrollDelta'] < 0
      return [
        this.isDrawerOpen,
        isScrollBeyondThreshold,
        isScrollUp,
        this['common/matchMedia/desktop/matches']
      ].some(e => e)
    }
  },
  mounted (): void {
    this.$root.$on('blocks/drawer/syncDrawerState', this.syncDrawerState)
  },
  destroyed (): void {
    this.$root.$off('blocks/drawer/syncDrawerState', this.syncDrawerState)
  },
  methods: {
    closeDrawer (): void {
      if (this.isDrawerOpen) {
        this.toggleDrawer()
      }
    },
    toggleDrawer (): void {
      this.$root.$emit('blocks/drawer/toggleDrawer')
    },
    syncDrawerState (v: boolean) {
      this.isDrawerOpen = v
    }
  }
})
