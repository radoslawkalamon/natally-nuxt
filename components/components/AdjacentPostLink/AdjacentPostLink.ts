import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsAdjacentPostLink',
  props: {
    label: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: v => ['next', 'previous'].includes(v)
    }
  },
  computed: {
    classNames () {
      return [
        'adjacent-post-link',
        `adjacent-post-link--${this.type}`
      ]
    }
  }
})
