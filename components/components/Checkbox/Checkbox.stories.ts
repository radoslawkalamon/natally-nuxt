import { Meta, Story } from '@storybook/vue'
import Checkbox from './Checkbox.vue'

const meta: Meta = {
  title: 'Components / Checkbox',
  component: Checkbox
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  template: '<Checkbox v-bind="$props" />'
})

export const Checked: Story = Template.bind({})
Checked.args = {
  checked: true,
  disabled: false,
  label: 'Checkbox label',
  name: 'checkbox-name'
}

export const Unchecked: Story = Template.bind({})
Unchecked.args = {
  checked: false,
  disabled: false,
  label: 'Checkbox label',
  name: 'checkbox-name'
}

export const Disabled: Story = Template.bind({})
Disabled.args = {
  checked: true,
  disabled: true,
  label: 'Checkbox label',
  name: 'checkbox-name'
}
