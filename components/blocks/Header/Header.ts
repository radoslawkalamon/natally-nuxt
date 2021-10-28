import Vue from 'vue'
import { throttle } from 'lodash'

export default Vue.extend({
  name: 'BlocksHeader',
  data () {
    return {
      previousScrollPosition: 0,
      shallShowHeader: true
    }
  },
  computed: {
    homepageURL (): string {
      return '/'
    },
    isDrawerOpen (): boolean {
      // @TODO: Issue #152
      return false
    },
    mediaQueryBreakpoint (): MediaQueryList {
      return window.matchMedia('screen and (min-width: 960px)')
    }
  },
  beforeDestroy (): void {
    window.removeEventListener('scroll', this.onScroll)
    this.mediaQueryBreakpoint.removeEventListener('change', this.onScroll)
  },
  mounted (): void {
    this.onScroll = throttle(this.onScroll, 250, { leading: false })

    window.addEventListener('scroll', this.onScroll)
    this.mediaQueryBreakpoint.addEventListener('change', this.onScroll)
  },
  methods: {
    onToggle (): void {
      // @TODO: Issue 152
    },
    onScroll (): void {
      const showHeaderCondition = [
        this.isDrawerOpen,
        window.scrollY < 96,
        this.previousScrollPosition > window.scrollY,
        this.mediaQueryBreakpoint.matches
      ]
      this.shallShowHeader = showHeaderCondition.some(e => e)
      this.previousScrollPosition = window.scrollY
    }
  }
})
