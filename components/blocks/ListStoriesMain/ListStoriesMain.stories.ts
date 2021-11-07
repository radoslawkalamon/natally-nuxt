import { Meta, Story } from '@storybook/vue'
import ListStoriesMain from './ListStoriesMain.vue'

const meta: Meta = {
  title: 'Blocks / List Stories Main',
  component: ListStoriesMain
}
export default meta

export const Default: Story = () => ({
  components: { ListStoriesMain },
  template: '<div class="__storybook-section__"><ListStoriesMain /></div>'
})
