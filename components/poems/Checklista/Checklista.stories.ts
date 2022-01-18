import type { Meta, Story } from '@storybook/vue'
import PoemsChecklista from '@/components/poems/Checklista/Checklista.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Checklista',
  component: PoemsChecklista
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsChecklista,
    WrappersTextPoems
  },
  template: `<div class="scoped__storybook-section">
    <WrappersTextPoems>
      <PoemsChecklista />
    </WrappersTextPoems>
  </div>`
})
