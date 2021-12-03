import Vue from 'vue'

export default Vue.extend({
  name: 'PoemsGrzeszki',
  methods: {
    breadcrumbsStyle (): Record<string, string> {
      return {
        left: `${(Math.random() * 100).toFixed(3)}%`,
        top: `${(Math.random() * 100).toFixed(3)}%`
      }
    }
  }
})
