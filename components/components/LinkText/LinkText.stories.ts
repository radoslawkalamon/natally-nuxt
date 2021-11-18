import { Meta, Story } from '@storybook/vue'
import LinkText from '@/components/components/LinkText/LinkText.vue'

const meta: Meta = {
  title: 'Components / Link Text',
  component: LinkText
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { LinkText },
  props: Object.keys(argTypes),
  template: '<LinkText v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Item label'
}
