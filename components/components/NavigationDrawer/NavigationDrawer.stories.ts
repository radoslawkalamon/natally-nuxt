import { Meta, Story } from '@storybook/vue'
import NavigationDrawer from './NavigationDrawer.vue'

const meta: Meta = {
  title: 'Components / Navigation Drawer',
  component: NavigationDrawer
}
export default meta

export const Default: Story = () => ({
  components: { NavigationDrawer },
  template: '<NavigationDrawer />'
})
