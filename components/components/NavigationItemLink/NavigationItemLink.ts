import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsNavigationItemLink',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
