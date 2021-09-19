import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsTextMeta',
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
