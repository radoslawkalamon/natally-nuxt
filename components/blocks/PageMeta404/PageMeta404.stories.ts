import type { Meta, Story } from '@storybook/vue'
import BlocksPageMeta404 from '@/components/blocks/PageMeta404/PageMeta404.vue'

const meta: Meta = {
  title: 'Blocks / Page Meta 404',
  component: BlocksPageMeta404
}
export default meta

export const Default: Story = () => ({
  components: {
    BlocksPageMeta404
  },
  template: '<BlocksPageMeta404 />'
})
