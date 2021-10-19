import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsNavigationItemLink',
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
