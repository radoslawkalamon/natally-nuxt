import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mapGetters } from 'vuex'
import mixinWindowScrollValues from '@/utils/mixin.windowScroll.values'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinWindowScrollValues>
>).extend({
  name: 'BlocksHeader',
  components: {
    ComponentsButtonHamburger: () => import('@/components/components/ButtonHamburger/ButtonHamburger.vue'),
    ComponentsLogo: () => import('@/components/components/Logo/Logo.vue')
  },
  mixins: [mixinWindowScrollValues],
  data () {
    return {
      isDrawerOpen: false
    }
  },
  computed: {
    ...mapGetters({
      matchMediaIsDesktop: 'matchMedia/isDesktop'
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
  mounted (): void {
    this.$root.$on('blocks/drawer/syncDrawerState', this.syncDrawerState)
  },
  destroyed (): void {
    this.$root.$off('blocks/drawer/syncDrawerState', this.syncDrawerState)
  },
  methods: {
    toggleDrawer (): void {
      this.$root.$emit('blocks/drawer/toggleDrawer')
    },
    syncDrawerState (v: boolean) {
      this.isDrawerOpen = v
    }
  }
})
