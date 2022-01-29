import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsButton',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'general',
      validator: v => ['general', 'text'].includes(v)
    }
  },
  computed: {
    classNames () {
      return [
        'button',
        `button--${this.type}`
      ]
    }
  }
})
