import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsSwitch',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
})
