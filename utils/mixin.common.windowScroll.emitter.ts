import Vue from 'vue'
import throttle from 'lodash/throttle'

export default Vue.extend({
  mounted (): void {
    this['common/windowScroll/onScroll'] = throttle(this['common/windowScroll/onScroll'], 250)
    window.addEventListener('scroll', this['common/windowScroll/onScroll'])
  },
  destroyed (): void {
    window.removeEventListener('scroll', this['common/windowScroll/onScroll'])
  },
  methods: {
    'common/windowScroll/onScroll' (): void {
      this.$root.$emit('common/windowScroll')
    }
  }
})
