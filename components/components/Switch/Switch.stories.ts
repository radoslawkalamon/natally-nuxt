import { Meta, Story } from '@storybook/vue'
import ComponentSwitch from './Switch.vue'

const meta: Meta = {
  title: 'Components / Switch',
  component: ComponentSwitch
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { ComponentSwitch },
  props: Object.keys(argTypes),
  template: '<ComponentSwitch v-bind="$props"></ComponentSwitch>'
})

export const Checked: Story = Template.bind({})
Checked.args = {
  checked: true,
  disabled: false,
  label: 'Switch label',
  name: 'switch-name'
}

export const Unchecked: Story = Template.bind({})
Unchecked.args = {
  checked: false,
  disabled: false,
  label: 'Switch label',
  name: 'switch-name'
}

export const Disabled: Story = Template.bind({})
Disabled.args = {
  checked: true,
  disabled: true,
  label: 'Switch label',
  name: 'switch-name'
}
