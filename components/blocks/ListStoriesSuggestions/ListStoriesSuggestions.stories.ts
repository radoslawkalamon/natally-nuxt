import { Meta, Story } from '@storybook/vue'
import ListStoriesSuggestions from './ListStoriesSuggestions.vue'

const meta: Meta = {
  title: 'Blocks / List Stories Suggestions',
  component: ListStoriesSuggestions
}
export default meta

export const Default: Story = () => ({
  components: { ListStoriesSuggestions },
  template: '<div class="__storybook-section__"><ListStoriesSuggestions /></div>'
})
