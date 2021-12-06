import type { Meta, Story } from '@storybook/vue'
import BlocksPoemsFirstTime from '@/components/blocks/PoemsFirstTime/PoemsFirstTime.vue'

const meta: Meta = {
  title: 'Blocks / Poems First Time',
  component: BlocksPoemsFirstTime
}
export default meta

export const Default: Story = () => ({
  beforeCreate () {
    window.localStorage.setItem('poem-first-time-visits', '0')
  },
  components: {
    BlocksPoemsFirstTime
  },
  template: '<BlocksPoemsFirstTime />'
})
