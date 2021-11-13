import { Meta, Story } from '@storybook/vue'
import AdjacentPostLinkPlaceholder from './AdjacentPostLinkPlaceholder.vue'

const meta: Meta = {
  title: 'Components / Adjacent Post Link Placeholder',
  component: AdjacentPostLinkPlaceholder
}
export default meta

export const Default: Story = () => ({
  components: { AdjacentPostLinkPlaceholder },
  template: '<AdjacentPostLinkPlaceholder />'
})
