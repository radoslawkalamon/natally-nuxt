import Vue from 'vue'
import type { VueConstructor } from 'vue'
import mixinMatchMediaDesktop from '@/utils/mixin.matchMedia.desktop'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinMatchMediaDesktop>
>).extend({
  name: 'BlocksDrawer',
  mixins: [mixinMatchMediaDesktop],
  data () {
    return {
      shallOpenDrawer: false
    }
  },
  computed: {
    shouldOpenDrawer (): boolean {
      return [
        this.shallOpenDrawer,
        this['common/matchMedia/desktop/matches']
      ].some(e => e)
    }
  },
  watch: {
    shallOpenDrawer (v: boolean) {
      this.$root.$emit('blocks/drawer/syncDrawerState', v)
    }
  },
  mounted (): void {
    this.$root.$on('blocks/drawer/toggleDrawer', this.toggleDrawer)
  },
  destroyed (): void {
    this.$root.$off('blocks/drawer/toggleDrawer', this.toggleDrawer)
  },
  methods: {
    onNavigationItemClick (): void {
      this.closeDrawer()
    },
    closeDrawer (): void {
      this.shallOpenDrawer = false
    },
    toggleDrawer (): void {
      this.shallOpenDrawer = !this.shallOpenDrawer
    }
  }
})
