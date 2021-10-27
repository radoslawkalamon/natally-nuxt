import { Meta, Story } from '@storybook/vue'
import NavigationFooter from './NavigationFooter.vue'

const meta: Meta = {
  title: 'Blocks / Navigation Footer',
  component: NavigationFooter
}
export default meta

export const Default: Story = () => ({
  components: { NavigationFooter },
  template: '<NavigationFooter />'
})
