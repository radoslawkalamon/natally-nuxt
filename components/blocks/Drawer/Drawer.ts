import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'BlocksDrawer',
  computed: {
    ...mapGetters({
      shallOpenDrawer: 'blocks/drawer/shallOpenDrawer'
    })
  },
  methods: {
    ...mapActions({
      closeDrawer: 'blocks/drawer/closeDrawer'
    }),
    onNavigationItemClick (): void {
      this.closeDrawer()
    }
  }
})
