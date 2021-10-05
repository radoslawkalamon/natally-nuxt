import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsCoverPoem',
  props: {
    image: {
      type: String,
      required: true
    }
  },
  computed: {
    style () {
      return {
        backgroundImage: `url('${this.image}')`
      }
    }
  }
})
