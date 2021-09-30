import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsButtonHamburger',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ariaLabel () {
      return this.isOpen
        ? 'Zamknij menu nawigacyjne'
        : 'Otwórz menu nawigacyjne'
    }
  },
  methods: {
    clickCallback () {
      this.$emit('toggle')
    },
    lineClassNames (index: number) {
      return [
        'button-hamburger__line',
        `button-hamburger__line--${index}`
      ]
    }
  }
})
