import type { Meta, Story } from '@storybook/vue'
import BlocksListAudiobookServices from '@/components/blocks/ListAudiobookServices/ListAudiobookServices.vue'

const meta: Meta = {
  title: 'Blocks / List Audiobook Services',
  component: BlocksListAudiobookServices
}
export default meta

export const Default: Story = () => ({
  components: {
    BlocksListAudiobookServices
  },
  template: '<BlocksListAudiobookServices />'
})
