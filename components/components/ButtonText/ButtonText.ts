import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsButtonText',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
