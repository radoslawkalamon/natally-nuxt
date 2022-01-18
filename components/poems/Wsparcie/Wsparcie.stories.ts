import type { Meta, Story } from '@storybook/vue'
import PoemsWsparcie from '@/components/poems/Wsparcie/Wsparcie.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Wsparcie',
  component: PoemsWsparcie
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsWsparcie,
    WrappersTextPoems
  },
  template: `<div class="scoped__storybook-section" style="background-color: var(--color-background-1)">
    <WrappersTextPoems>
      <PoemsWsparcie />
    </WrappersTextPoems>
  </div>`
})
