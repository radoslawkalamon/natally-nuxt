import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsButton',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    tag (): string {
      return 'button'
    },
    attributes (): { [key: string]: string } {
      return {
        class: 'button',
        'data-test': 'components-button',
        type: 'button'
      }
    },
    listeners (): { [key: string]: Function } {
      return {
        click: this.onClick
      }
    }
  },
  methods: {
    onClick (): void {
      this.$emit('click')
    }
  }
})
