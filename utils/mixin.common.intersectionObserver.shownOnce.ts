import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      'common/intersectionObserver/shownOnce': false
    }
  },
  mounted (): void {
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          this['common/intersectionObserver/shownOnce'] = true
          observer.disconnect()
        }
      })
    }

    const intersectionObserver = new IntersectionObserver(callback)
    intersectionObserver.observe(this.$el)
  }
})
