import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsNavigationItem',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
