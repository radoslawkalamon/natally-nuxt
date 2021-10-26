import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsButtonLink',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
