import type { Meta, Story } from '@storybook/vue'
import ComponentsProgressBar from '@/components/components/ProgressBar/ProgressBar.vue'

const meta: Meta = {
  title: 'Components / Progress Bar',
  component: ComponentsProgressBar,
  argTypes: {
    width: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    }
  }
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsProgressBar
  },
  props: Object.keys(argTypes),
  template: '<ComponentsProgressBar v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  width: 50
}
