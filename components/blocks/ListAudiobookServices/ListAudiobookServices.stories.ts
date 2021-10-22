import { Meta, Story } from '@storybook/vue'
import ListAudiobookServices from './ListAudiobookServices.vue'

const meta: Meta = {
  title: 'Blocks / List Audiobook Services',
  component: ListAudiobookServices
}
export default meta

export const Default: Story = () => ({
  components: { ListAudiobookServices },
  template: '<ListAudiobookServices />'
})
