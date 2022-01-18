import type { Meta, Story } from '@storybook/vue'
import PoemsDysonans from '@/components/poems/Dysonans/Dysonans.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Dysonans',
  component: PoemsDysonans
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsDysonans,
    WrappersTextPoems
  },
  template: `<div class="scoped__storybook-section">
    <WrappersTextPoems>
      <PoemsDysonans />
    </WrappersTextPoems>
  </div>`
})
