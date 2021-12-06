import type { Meta, Story } from '@storybook/vue'
import ComponentsAdjacentPostLinkPrevious from '@/components/components/AdjacentPostLinkPrevious/AdjacentPostLinkPrevious.vue'

const meta: Meta = {
  title: 'Components / Adjacent Post Link Previous',
  component: ComponentsAdjacentPostLinkPrevious
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsAdjacentPostLinkPrevious
  },
  props: Object.keys(argTypes),
  template: '<ComponentsAdjacentPostLinkPrevious v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Poprzedni',
  path: '/post/test-post/',
  title: 'Post testowy'
}
