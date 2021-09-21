import { Meta, Story } from '@storybook/vue'
import TextMeta from './TextMeta.vue'

const meta: Meta = {
  component: TextMeta,
  title: 'Components / Text Meta'
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { TextMeta },
  props: Object.keys(argTypes),
  template: '<TextMeta v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  text: '28.08.2021'
}
