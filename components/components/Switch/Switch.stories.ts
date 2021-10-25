import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ComponentSwitch from './Switch.vue'

const meta: Meta = {
  title: 'Components / Switch',
  component: ComponentSwitch
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { ComponentSwitch },
  props: Object.keys(argTypes),
  template: '<ComponentSwitch v-bind="$props" @toggle="onToggle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus porttitor est nec efficitur. Nam odio augue, sodales quis vehicula et, elementum ac arcu. Nunc et imperdiet justo, id gravida justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis nulla a dolor maximus, vel luctus diam lobortis. Maecenas bibendum massa ut augue vehicula aliquet.</p></ComponentSwitch>',
  methods: {
    onToggle () {
      action('toggle')()
    }
  }
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
