import Vue from 'vue'

type BlocksProgressBarData = {
  progressBarWidth: number;
  textWrapper: Element | null;
  textWrapperBottom: number;
}

export default Vue.extend({
  name: 'BlocksProgressBar',
  data (): BlocksProgressBarData {
    return {
      progressBarWidth: 0,
      textWrapper: null,
      textWrapperBottom: 0
    }
  },
  computed: {
    style (): Record<string, string> {
      return {
        width: `${this.progressBarWidth}%`
      }
    }
  },
  mounted () {
    this.updateTextWrapper()
    this.$root.$on('common/windowScroll', this.updateProgress)
    this.$root.$on('common/windowResize', this.updateTextHeight)
  },
  destroyed (): void {
    this.$root.$off('common/windowScroll', this.updateProgress)
    this.$root.$off('common/windowResize', this.updateTextHeight)
  },
  methods: {
    updateProgress (): void {
      const orderOfMagnitude = this.textWrapperBottom - Math.min(window.innerHeight, this.textWrapperBottom)
      const progressBarWidth = (window.scrollY / orderOfMagnitude) * 100
      this.progressBarWidth = progressBarWidth <= 100 ? progressBarWidth : 100
    },
    updateTextHeight (): void {
      if (this.textWrapper !== null) {
        const textBoundingRect = this.textWrapper.getBoundingClientRect()
        const textTop = textBoundingRect.top
        const textHeight = textBoundingRect.height

        this.textWrapperBottom = textTop + window.scrollY + textHeight
        this.updateProgress()
      }
    },
    updateTextWrapper (): void {
      this.textWrapper = document.querySelector('.text-stories')
      this.updateTextHeight()
    }
  }
})
