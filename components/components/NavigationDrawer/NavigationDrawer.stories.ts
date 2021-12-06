import type { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ComponentsNavigationDrawer from '@/components/components/NavigationDrawer/NavigationDrawer.vue'

const meta: Meta = {
  title: 'Components / Navigation Drawer',
  component: ComponentsNavigationDrawer
}
export default meta

export const Default: Story = () => ({
  components: {
    ComponentsNavigationDrawer
  },
  template: '<ComponentsNavigationDrawer @navigationItemClick="onNavigationItemClick" />',
  methods: {
    onNavigationItemClick () {
      action('navigation-item-click')
    }
  }
})
