import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Checkbox from './Checkbox.vue'

const meta: Meta = {
  title: 'Components / Checkbox',
  component: Checkbox
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  template: '<Checkbox v-bind="$props" @toggle="onToggle" />',
  methods: {
    onToggle () {
      action('toggle')()
    }
  }
})

export const Checked: Story = Template.bind({})
Checked.args = {
  checked: true,
  label: 'Checkbox label',
  name: 'checkbox-name'
}

export const Unchecked: Story = Template.bind({})
Unchecked.args = {
  checked: false,
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
