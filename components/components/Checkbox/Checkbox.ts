import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsCheckbox',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
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
