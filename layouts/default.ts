import { throttle } from 'lodash'
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'LayoutsDefault',
  mounted (): void {
    this.throttleFunctions()
    this.initMatchMedia()

    window.addEventListener('scroll', this.onWindowScroll)
    window.addEventListener('resize', this.onWindowResize)
  },
  destroyed (): void {
    window.removeEventListener('scroll', this.onWindowScroll)
    window.removeEventListener('resize', this.onWindowResize)
  },
  methods: {
    ...mapActions({
      initMatchMedia: 'matchMedia/init'
    }),
    throttleFunctions (): void {
      this.onWindowScroll = throttle(this.onWindowScroll, 500)
      this.onWindowResize = throttle(this.onWindowResize, 500)
    },
    onWindowScroll (): void {
      this.$root.$emit('common/windowScroll')
    },
    onWindowResize (): void {
      this.$root.$emit('common/windowResize')
    }
  }
})
