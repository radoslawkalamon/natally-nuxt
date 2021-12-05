import type { Meta, Story } from '@storybook/vue'
import PoemsChecklista from '@/components/poems/Checklista/Checklista.vue'

const meta: Meta = {
  title: 'Poems / Checklista',
  component: PoemsChecklista
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsChecklista
  },
  template: '<div class="__storybook-section__"><PoemsChecklista /></div>'
})
