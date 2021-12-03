import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsProgressBar',
  props: {
    width: {
      type: Number,
      required: true,
      validator: v => v >= 0 && v <= 100
    }
  },
  computed: {
    style (): Record<string, string> {
      return {
        width: `${this.width.toFixed(2)}%`
      }
    }
  }
})
