import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      'common/intersectionObserver/shownOnce': false
    }
  },
  mounted (): void {
    const intersectionObserverInit: IntersectionObserverInit = {
      rootMargin: '160px 0px'
    }
    const intersectionObserver = new IntersectionObserver(
      this['common/intersectionObserver/observerCallback'],
      intersectionObserverInit
    )
    intersectionObserver.observe(this.$el)
  },
  methods: {
    'common/intersectionObserver/observerCallback' (entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          this['common/intersectionObserver/shownOnce'] = true
          observer.disconnect()
        }
      })
    }
  }
})
