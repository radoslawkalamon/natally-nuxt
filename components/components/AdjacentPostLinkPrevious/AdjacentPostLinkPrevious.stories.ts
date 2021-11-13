import { Meta, Story } from '@storybook/vue'
import AdjacentPostLinkPrevious from './AdjacentPostLinkPrevious.vue'

const meta: Meta = {
  title: 'Components / Adjacent Post Link Previous',
  component: AdjacentPostLinkPrevious
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { AdjacentPostLinkPrevious },
  props: Object.keys(argTypes),
  template: '<AdjacentPostLinkPrevious v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Poprzedni',
  path: '/post/test-post/',
  title: 'Post testowy'
}
