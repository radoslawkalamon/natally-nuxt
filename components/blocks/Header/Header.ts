import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'BlocksHeader',
  computed: {
    ...mapGetters({
      shallOpenDrawer: 'blocks/drawer/shallOpenDrawer',
      shallShowHeader: 'blocks/header/shallShowHeader'
    }),
    homepageURL (): string {
      return '/'
    }
  },
  mounted (): void {
    this.updateScrollYPosition()
    this.$root.$on('common/windowScroll', this.updateScrollYPosition)
  },
  destroyed (): void {
    this.$root.$off('common/windowScroll', this.updateScrollYPosition)
  },
  methods: {
    ...mapActions({
      toggleDrawer: 'blocks/drawer/toggleDrawer',
      updateScrollYPosition: 'blocks/header/updateScrollYPosition'
    })
  }
})
