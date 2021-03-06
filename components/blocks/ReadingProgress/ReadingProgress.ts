import Vue from 'vue'
import type { VueConstructor } from 'vue'
import throttle from 'lodash/throttle'
import mixinCommonWindowScrollValues from '@/utils/mixin.common.windowScroll.values'

type BlocksReadingProgressData = {
  textWrapper: Element | null;
  progress: number;
}

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinCommonWindowScrollValues>
>).extend({
  name: 'BlocksReadingProgress',
  components: {
    ComponentsProgressBar: () => import(/* webpackChunkName: "components-progress-bar" */'@/components/components/ProgressBar/ProgressBar.vue')
  },
  mixins: [mixinCommonWindowScrollValues],
  data (): BlocksReadingProgressData {
    return {
      textWrapper: null,
      progress: 0
    }
  },
  mounted () {
    this.updateTextWrapper = throttle(this.updateTextWrapper, 1000, { leading: false })

    this.updateTextWrapper()
    this.updateProgress()
    this.$root.$on('common/windowScroll', this.updateProgress)
  },
  destroyed (): void {
    this.$root.$off('common/windowScroll', this.updateProgress)
  },
  methods: {
    updateProgress (): void {
      if (this.textWrapper) {
        const { top, height } = this.textWrapper.getBoundingClientRect()
        const progress = ((top - (window.innerHeight / 2)) * -1 / height) * 100
        this.progress = progress < 100 ? Math.max(progress, 0) : Math.min(progress, 100)
      }
    },
    updateTextWrapper (): void {
      this.textWrapper = document.querySelector('.text-stories')
    }
  }
})
