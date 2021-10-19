import { Meta, Story } from '@storybook/vue'
import NavigationItemLink from './NavigationItemLink.vue'

const meta: Meta = {
  title: 'Components / Navigation Item Link',
  component: NavigationItemLink
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { NavigationItemLink },
  props: Object.keys(argTypes),
  template: '<NavigationItemLink v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Item label'
}
