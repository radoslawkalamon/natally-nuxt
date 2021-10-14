import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsButton',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick (): void {
      this.$emit('click')
    }
  }
})
