import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Button from './Button.vue'

const meta: Meta = {
  title: 'Components / Button',
  component: Button
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" @click="onToggle" />',
  methods: {
    onToggle () {
      action('Click')()
    }
  }
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Click here'
}
