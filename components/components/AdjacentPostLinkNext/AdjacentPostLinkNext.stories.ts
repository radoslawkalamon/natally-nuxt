import type { Meta, Story } from '@storybook/vue'
import ComponentsAdjacentPostLinkNext from '@/components/components/AdjacentPostLinkNext/AdjacentPostLinkNext.vue'

const meta: Meta = {
  title: 'Components / Adjacent Post Link Next',
  component: ComponentsAdjacentPostLinkNext
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsAdjacentPostLinkNext
  },
  props: Object.keys(argTypes),
  template: '<ComponentsAdjacentPostLinkNext v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Następny',
  path: '/post/test-post/',
  title: 'Post testowy'
}
