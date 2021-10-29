import { Meta, Story } from '@storybook/vue'
import Drawer from './Drawer.vue'

const meta: Meta = {
  title: 'Blocks / Drawer',
  component: Drawer
}
export default meta

export const Default: Story = () => ({
  components: { Drawer },
  template: `<div style="background-color: var(--color-background-1); height: 2000px;">
    <Drawer />
  </div>`
})
