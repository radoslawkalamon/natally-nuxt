import Vue from 'vue'
import { throttle } from 'lodash'

export default Vue.extend({
  name: 'BlocksHeader',
  data () {
    return {
      previousScrollPosition: 0,
      shallHideHeader: false
    }
  },
  computed: {
    headerClasses (): Record<string, boolean> {
      return {
        header: true,
        'header--hidden': this.shallHideHeader
      }
    },
    homepageURL (): string {
      return '/'
    },
    shallOpenDrawer (): boolean {
      // @TODO: Issue #152
      return false
    }
  },
  beforeDestroy (): void {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted (): void {
    this.onScroll = throttle(this.onScroll, 250, { leading: false })
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onHamburgerToggle (): void {
      // @TODO: Issue 152
    },
    onScroll () {
      const windowScrollY = window.scrollY
      this.shallHideHeader = this.previousScrollPosition < windowScrollY
      this.previousScrollPosition = windowScrollY
    }
  }
})
