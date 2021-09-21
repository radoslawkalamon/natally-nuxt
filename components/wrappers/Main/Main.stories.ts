import { Meta, Story } from '@storybook/vue'
import Main from './Main.vue'

const meta: Meta = {
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
export default meta

export const Default: Story = () => ({
  components: { Main },
  template: '<Main>Default Slot</Main>'
})
