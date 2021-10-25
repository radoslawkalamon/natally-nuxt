import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsSwitch',
  props: {
    checked: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick (): void {
      this.$emit('toggle')
    }
  }
})
