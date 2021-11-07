import { Meta, Story } from '@storybook/vue'
import ListPoemsSuggestions from './ListPoemsSuggestions.vue'

const meta: Meta = {
  title: 'Blocks / List Poems Suggestions',
  component: ListPoemsSuggestions
}
export default meta

export const Default: Story = () => ({
  components: { ListPoemsSuggestions },
  template: '<div class="__storybook-section__"><ListPoemsSuggestions /></div>'
})
