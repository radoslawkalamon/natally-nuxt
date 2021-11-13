import { Meta, Story } from '@storybook/vue'
import AdjacentPostLinkNext from './AdjacentPostLinkNext.vue'

const meta: Meta = {
  title: 'Components / Adjacent Post Link Next',
  component: AdjacentPostLinkNext
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { AdjacentPostLinkNext },
  props: Object.keys(argTypes),
  template: '<AdjacentPostLinkNext v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Następny',
  path: '/post/test-post/',
  title: 'Post testowy'
}
