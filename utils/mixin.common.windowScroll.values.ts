import Vue from 'vue'

let previousScrollPosition = 0

export default Vue.extend({
  data () {
    return {
      'common/windowScroll/scrollPosition': 0,
      'common/windowScroll/scrollDelta': 0
    }
  },
  mounted (): void {
    this['common/windowScroll/updateScrollValues']()
    this.$root.$on('common/windowScroll', this['common/windowScroll/updateScrollValues'])
  },
  destroyed (): void {
    this.$root.$off('common/windowScroll', this['common/windowScroll/updateScrollValues'])
  },
  methods: {
    'common/windowScroll/updateScrollValues' (): void {
      this['common/windowScroll/scrollPosition'] = window.scrollY
      this['common/windowScroll/scrollDelta'] = window.scrollY - previousScrollPosition
      previousScrollPosition = window.scrollY
    }
  }
})
