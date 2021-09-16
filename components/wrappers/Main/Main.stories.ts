import Main from './Main.vue'

export default {
  title: 'Wrappers/Main',
  component: Main,
  argTypes: {
    default: {
      description: '-',
      table: {
        type: null,
        defaultValue: null,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: '<Main><!-- Default Slot --></Main>'
      },
      description: {
        component: 'Main wrapper for page content',
      },
    }
  }
}

export const Default = () => ({
  components: {
    Main,
  },
  template: '<Main>#Slot/Default</Main>',
})
