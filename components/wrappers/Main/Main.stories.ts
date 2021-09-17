import Main from './Main.vue'

export default {
  title: 'Wrappers/Main',
  component: Main,
  argTypes: {
    default: {
      description: '-',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}

export const Default = () => ({
  components: {
    Main
  },
  template: '<Main>Default Slot</Main>'
})
