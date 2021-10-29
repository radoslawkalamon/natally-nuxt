import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksDrawer',
  computed: {
    shallShowDrawer (): boolean {
      return true
    }
  }
})
