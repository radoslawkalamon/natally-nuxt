import { Meta, Story } from '@storybook/vue'
import CardPoemPlaceholder from './CardPoemPlaceholder.vue'

const meta: Meta = {
  title: 'Components / Card Poem Placeholder',
  component: CardPoemPlaceholder
}
export default meta

export const Default: Story = () => ({
  components: { CardPoemPlaceholder },
  template: '<CardPoemPlaceholder />'
})
