import { Meta, Story } from '@storybook/vue'
import ProgressBar from './ProgressBar.vue'

const meta: Meta = {
  title: 'Components / Progress Bar',
  component: ProgressBar,
  argTypes: {
    width: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    }
  }
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { ProgressBar },
  props: Object.keys(argTypes),
  template: '<ProgressBar v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  width: 50
}
