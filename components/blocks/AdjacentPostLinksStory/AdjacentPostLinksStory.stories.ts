import { Meta, Story } from '@storybook/vue'
import AdjacentPostLinksStory from './AdjacentPostLinksStory.vue'

const meta: Meta = {
  title: 'Blocks / Adjacent Post Links Story',
  component: AdjacentPostLinksStory
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { AdjacentPostLinksStory },
  props: Object.keys(argTypes),
  template: '<AdjacentPostLinksStory v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  slug: 'test-post'
}
