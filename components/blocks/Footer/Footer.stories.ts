import { Meta, Story } from '@storybook/vue'
import BlockFooter from './Footer.vue'

const meta: Meta = {
  title: 'Blocks / Footer',
  component: BlockFooter
}
export default meta

export const Default: Story = () => ({
  components: { BlockFooter },
  template: '<BlockFooter />'
})
