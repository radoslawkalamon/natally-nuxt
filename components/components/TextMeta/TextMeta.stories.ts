import type { Meta, Story } from '@storybook/vue'
import ComponentsTextMeta from '@/components/components/TextMeta/TextMeta.vue'

const meta: Meta = {
  component: ComponentsTextMeta,
  title: 'Components / Text Meta'
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsTextMeta
  },
  props: Object.keys(argTypes),
  template: '<ComponentsTextMeta v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  text: '28.08.2021'
}
