import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksLoadingBar',
  data: () => ({
    loading: false,
    progress: 1
  }),
  methods: {
    start () {
      this.loading = true
      this.progress = 1
    },
    finish () {
      this.progress = 100

      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    increase (n: number) {
      this.progress = n
    }
  }
})
