import Vue from 'vue'
import { throttle } from 'lodash'

export default Vue.extend({
  name: 'LayoutDefault',
  beforeMount (): void {
    this.throttleFunctions()

    window.addEventListener('scroll', this.onWindowScroll)
  },
  beforeDestroy (): void {
    window.removeEventListener('scroll', this.onWindowScroll)
  },
  methods: {
    throttleFunctions (): void {
      this.onWindowScroll = throttle(this.onWindowScroll, 500)
    },
    onWindowScroll (): void {
      this.$root.$emit('common/windowScroll')
    }
  }
})
