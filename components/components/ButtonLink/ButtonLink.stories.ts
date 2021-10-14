import { Meta, Story } from '@storybook/vue'
import ButtonLink from './ButtonLink.vue'

const meta: Meta = {
  title: 'Components / Button Link',
  component: ButtonLink
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { ButtonLink },
  props: Object.keys(argTypes),
  template: '<ButtonLink v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Click here'
}
