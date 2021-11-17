import Vue from 'vue'
import type { VueConstructor } from 'vue'
import mixinWindowScrollValues from '@/utils/mixin.windowScroll.values'

type BlocksProgressBarData = {
  textWrapper: Element | null;
  progress: number;
}

export default (Vue as VueConstructor<
  Vue &
  InstanceType<typeof mixinWindowScrollValues>
>).extend({
  name: 'BlocksProgressBar',
  mixins: [mixinWindowScrollValues],
  data (): BlocksProgressBarData {
    return {
      textWrapper: null,
      progress: 0
    }
  },
  computed: {
    style (): Record<string, string> {
      return {
        width: `${this.progress * 100}%`
      }
    }
  },
  mounted () {
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
        const progress = (top - (window.innerHeight / 2)) * -1 / height
        this.progress = progress < 1 ? Math.max(progress, 0) : Math.min(progress, 1)
      }
    },
    updateTextWrapper (): void {
      this.textWrapper = document.querySelector('.text-stories')
    }
  }
})
