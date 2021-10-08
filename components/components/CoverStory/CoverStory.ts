import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsCoverStory',
  props: {
    alternativeText: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    image2X: {
      type: String,
      required: true
    }
  },
  computed: {
    srcset () {
      return `${this.image} 1x, ${this.image2X} 2x`
    },
    src () {
      return this.image
    }
  }
})
