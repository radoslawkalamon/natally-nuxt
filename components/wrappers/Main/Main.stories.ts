import type { Meta, Story } from '@storybook/vue'
import WrappersMain from '@/components/wrappers/Main/Main.vue'

const meta: Meta = {
  title: 'Wrappers / Main',
  component: WrappersMain,
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
  components: {
    WrappersMain
  },
  template: '<WrappersMain>Default Slot</WrappersMain>'
})
