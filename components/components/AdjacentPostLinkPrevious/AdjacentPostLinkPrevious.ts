import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsAdjacentPostLinkPrevious',
  props: {
    label: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
})
