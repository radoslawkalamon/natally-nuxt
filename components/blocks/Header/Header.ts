import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'BlocksHeader',
  computed: {
    ...mapGetters({
      shallOpenDrawer: 'drawer/shallOpenDrawer',
      shallShowHeader: 'header/shallShowHeader'
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
      toggleDrawer: 'drawer/toggleDrawer',
      updateScrollYPosition: 'header/updateScrollYPosition'
    })
  }
})
