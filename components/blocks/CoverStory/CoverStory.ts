import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksCoverStory',
  props: {
    images: {
      type: Array as Vue.PropType<String[]>,
      required: true
    }
  }
})
