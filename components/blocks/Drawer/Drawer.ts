import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'BlocksDrawer',
  computed: {
    ...mapGetters({
      shallOpenDrawer: 'drawer/shallOpenDrawer'
    })
  }
})
