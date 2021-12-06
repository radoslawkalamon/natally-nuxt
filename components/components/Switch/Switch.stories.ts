import type { Meta, Story } from '@storybook/vue'
import ComponentsSwitch from '@/components/components/Switch/Switch.vue'

const meta: Meta = {
  title: 'Components / Switch',
  component: ComponentsSwitch
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsSwitch
  },
  props: Object.keys(argTypes),
  template: `<ComponentsSwitch v-bind="$props">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices pulvinar ligula, sit amet dignissim turpis molestie malesuada. Mauris cursus velit augue, at lobortis ex sagittis nec. Cras ac pulvinar est, nec varius risus. Donec feugiat, tellus ac mattis sodales, nisi tortor congue lorem, nec varius magna lorem quis nibh. Donec lacinia, ligula quis rutrum ornare, urna nulla varius enim, eu venenatis orci lacus id tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu quam nibh. Morbi in volutpat eros. Vivamus pulvinar non nulla ut imperdiet. Etiam accumsan aliquet vehicula.</p>
  </ComponentsSwitch>`
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
