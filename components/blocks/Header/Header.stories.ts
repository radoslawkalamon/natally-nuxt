import { Meta, Story } from '@storybook/vue'
import BlockHeader from './Header.vue'

const meta: Meta = {
  title: 'Blocks / Header',
  component: BlockHeader
}
export default meta

export const Default: Story = () => ({
  components: { BlockHeader },
  template: '<div style="height: 2000px"><BlockHeader /></div>'
})
