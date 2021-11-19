import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsCover',
  props: {
    images: {
      type: Array as Vue.PropType<String[]>,
      required: true
    }
  },
  computed: {
    style (): Record<string, string> {
      const imageSets = this.images.map((image, index) => `url("${image}") ${index + 1}x`)
      return {
        backgroundImage: `-webkit-image-set(${imageSets.join(', ')})`
      }
    }
  }
})
