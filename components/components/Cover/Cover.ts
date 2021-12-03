import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsCover',
  props: {
    images: {
      type: Array as Vue.PropType<String[]>,
      default: () => []
    }
  },
  computed: {
    style (): Record<string, string> {
      if (this.images.length === 0) {
        return {}
      }

      const imageSets = this.images.map((image, index) => `url("${image}") ${index + 1}x`)
      return {
        backgroundImage: `-webkit-image-set(${imageSets.join(', ')})`
      }
    }
  }
})
