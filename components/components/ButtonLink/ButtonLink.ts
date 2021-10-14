import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsButtonLink',
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
