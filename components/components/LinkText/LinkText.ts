import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsLinkText',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
