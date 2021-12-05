import type { Meta, Story } from '@storybook/vue'
import BlocksDrawer from '@/components/blocks/Drawer/Drawer.vue'

const meta: Meta = {
  title: 'Blocks / Drawer',
  component: BlocksDrawer
}
export default meta

export const Open: Story = () => ({
  mounted () {
    // @ts-ignore
    this.$root.$emit('blocks/drawer/toggleDrawer', true)
  },
  components: {
    BlocksDrawer
  },
  template: `<div style="height: 2000px;">
    <BlocksDrawer />
  </div>`
})

export const Close: Story = () => ({
  components: {
    BlocksDrawer
  },
  template: `<div style="height: 2000px;">
    <BlocksDrawer />
  </div>`
})
