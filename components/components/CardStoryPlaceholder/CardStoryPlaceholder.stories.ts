import { Meta, Story } from '@storybook/vue'
import CardStoryPlaceholder from './CardStoryPlaceholder.vue'

const meta: Meta = {
  title: 'Components / Card Story Placeholder',
  component: CardStoryPlaceholder
}
export default meta

export const Default: Story = () => ({
  components: { CardStoryPlaceholder },
  template: '<CardStoryPlaceholder />'
})
