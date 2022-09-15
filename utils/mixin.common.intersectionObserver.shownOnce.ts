import Vue from 'vue'

const CacheSet = new Set()

export default Vue.extend({
  data () {
    return {
      'common/intersectionObserver/shownOnce': false
    }
  },
  computed: {
    'common/intersectionObserver/cacheKey' (): string {
      return ''
    },
    'common/intersectionObserver/shallUseCache' (): boolean {
      return CacheSet.has(this['common/intersectionObserver/cacheKey'])
    }
  },
  created (): void {
    if (this['common/intersectionObserver/shallUseCache']) {
      this['common/intersectionObserver/setShownOnce']()
    }
  },
  mounted (): void {
    if (!this['common/intersectionObserver/shallUseCache']) {
      const intersectionObserverInit: IntersectionObserverInit = {
        rootMargin: '160px 0px'
      }
      const intersectionObserver = new IntersectionObserver(
        this['common/intersectionObserver/observerCallback'],
        intersectionObserverInit
      )
      intersectionObserver.observe(this.$el)
    }
  },
  methods: {
    'common/intersectionObserver/setShownOnce' () {
      this['common/intersectionObserver/shownOnce'] = true
    },
    'common/intersectionObserver/writeCacheKey' () {
      CacheSet.add(this['common/intersectionObserver/cacheKey'])
    },
    'common/intersectionObserver/observerCallback' (entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (this['common/intersectionObserver/cacheKey'] !== '') {
            this['common/intersectionObserver/writeCacheKey']()
          }
          this['common/intersectionObserver/setShownOnce']()
          observer.disconnect()
        }
      })
    }
  }
})
