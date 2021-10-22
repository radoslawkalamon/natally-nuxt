import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsPageMeta',
  props: {
    datePublished: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    datePublishedLabel (): string {
      return `Opublikowano ${this.datePublished}`
    }
  }
})
