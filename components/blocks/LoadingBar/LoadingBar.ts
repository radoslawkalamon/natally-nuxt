import Vue from 'vue'

type BlocksLoadingBarData = {
  progress: number;
  shallShow: boolean;
  timeout: number | NodeJS.Timeout;
}

export default Vue.extend({
  name: 'BlocksLoadingBar',
  components: {
    ComponentsProgressBar: () => import(/* webpackChunkName: "components-progress-bar" */'@/components/components/ProgressBar/ProgressBar.vue')
  },
  data (): BlocksLoadingBarData {
    return {
      shallShow: false,
      progress: 1,
      timeout: 0
    }
  },
  methods: {
    finish (): void {
      this.setProgress(100)
      this.setTimeout(this.hideLoadingBar)
    },
    increase (n: number): void {
      this.setProgress(n)
    },
    start (): void {
      this.clearTimeout()
      this.showLoadingBar()
      this.setProgress(1)
    },
    setProgress (n: number): void {
      this.progress = n
    },
    hideLoadingBar (): void {
      this.shallShow = false
    },
    showLoadingBar (): void {
      this.shallShow = true
    },
    clearTimeout (): void {
      clearTimeout(Number(this.timeout))
    },
    setTimeout (callback: Function): void {
      this.timeout = setTimeout(() => callback(), 250)
    }
  }
})
