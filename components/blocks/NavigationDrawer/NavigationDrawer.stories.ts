import { Meta, Story } from '@storybook/vue'
import NavigationDrawer from './NavigationDrawer.vue'

const meta: Meta = {
  title: 'Blocks / Navigation Drawer',
  component: NavigationDrawer
}
export default meta

export const Default: Story = () => ({
  components: { NavigationDrawer },
  template: '<NavigationDrawer />'
})
