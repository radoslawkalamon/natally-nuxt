import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsNavigationItem',
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
