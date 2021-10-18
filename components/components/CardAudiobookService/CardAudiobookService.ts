import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsCardAudiobookService',
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    iconAlt (): string {
      return `Ikona serwisu ${this.name}`
    }
  }
})
