import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsTextHeader',
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
    headerTag () {
      return `h${this.type}`
    },
    headerClasses () {
      return {
        'text-header': true,
        [`text-header--type-${this.type}`]: true,
        'text-header--underscore': this.shallShowUnderscore
      }
    }
  }
})
