import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsLink',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'general',
      validator: v => ['general', 'button'].includes(v)
    }
  },
  computed: {
    classNames () {
      return [
        'link',
        `link--${this.type}`
      ]
    }
  }
})
