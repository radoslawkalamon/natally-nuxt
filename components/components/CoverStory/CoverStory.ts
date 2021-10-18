import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsCoverStory',
  props: {
    image: {
      type: String,
      required: true
    },
    image2x: {
      type: String,
      required: true
    }
  },
  computed: {
    style () {
      return {
        backgroundImage: `-webkit-image-set( url("${this.image}") 1x, url("${this.image2x}") 2x)`
      }
    }
  }
})
