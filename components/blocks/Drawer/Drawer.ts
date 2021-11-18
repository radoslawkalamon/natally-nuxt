import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'BlocksDrawer',
  data () {
    return {
      shallOpenDrawer: false
    }
  },
  computed: {
    ...mapGetters({
      isDesktop: 'matchMedia/isDesktop'
    }),
    shouldOpenDrawer (): boolean {
      return [
        this.shallOpenDrawer,
        this.isDesktop
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
