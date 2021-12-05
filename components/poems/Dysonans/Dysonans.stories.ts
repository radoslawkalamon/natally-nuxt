import type { Meta, Story } from '@storybook/vue'
import PoemsDysonans from '@/components/poems/Dysonans/Dysonans.vue'

const meta: Meta = {
  title: 'Poems / Dysonans',
  component: PoemsDysonans
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsDysonans
  },
  template: '<div class="__storybook-section__"><PoemsDysonans /></div>'
})
