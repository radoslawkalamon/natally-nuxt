import Vue from 'vue'

const tagValidator = (v: number) => [1, 2, 3, 4].includes(v)

export default Vue.extend({
  name: 'ComponentsTitle',
  props: {
    design: {
      type: Number,
      default: 1,
      validator: tagValidator
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: Number,
      default: 1,
      validator: tagValidator
    },
    shallShowUnderscore: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titleTag (): string {
      return `h${this.type}`
    },
    titleClasses (): { [key: string]: boolean } {
      return {
        title: true,
        [`title--design-${this.design}`]: true,
        'title--underscore': this.shallShowUnderscore
      }
    }
  }
})
