import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsButton',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    tag () {
      return 'button'
    },
    attributes () {
      return {
        class: 'button',
        'data-test': 'components-button',
        type: 'button'
      }
    },
    listeners () {
      return {
        click: this.onClick
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
})
