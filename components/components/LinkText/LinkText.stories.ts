import type { Meta, Story } from '@storybook/vue'
import ComponentsLinkText from '@/components/components/LinkText/LinkText.vue'

const meta: Meta = {
  title: 'Components / Link Text',
  component: ComponentsLinkText
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsLinkText
  },
  props: Object.keys(argTypes),
  template: '<ComponentsLinkText v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  to: '/the-url/',
  label: 'Item label'
}
