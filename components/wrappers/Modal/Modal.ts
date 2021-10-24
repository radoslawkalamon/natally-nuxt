import Vue from 'vue'

export default Vue.extend({
  name: 'WrappersModal',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
