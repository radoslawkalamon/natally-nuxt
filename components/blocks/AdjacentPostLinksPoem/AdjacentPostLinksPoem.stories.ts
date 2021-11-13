import { Meta, Story } from '@storybook/vue'
import AdjacentPostLinksPoem from './AdjacentPostLinksPoem.vue'

const meta: Meta = {
  title: 'Blocks / Adjacent Post Links Poem',
  component: AdjacentPostLinksPoem
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { AdjacentPostLinksPoem },
  props: Object.keys(argTypes),
  template: '<AdjacentPostLinksPoem v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  slug: 'test-post'
}
