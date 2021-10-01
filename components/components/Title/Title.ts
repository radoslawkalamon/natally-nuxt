import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: Number,
      default: 1,
      validator (v) {
        return [1, 2, 3, 4].includes(v)
      }
    },
    shallShowUnderscore: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titleTag () {
      return `h${this.type}`
    },
    titleClasses () {
      return {
        title: true,
        [`title--type-${this.type}`]: true,
        'title--underscore': this.shallShowUnderscore
      }
    }
  }
})
