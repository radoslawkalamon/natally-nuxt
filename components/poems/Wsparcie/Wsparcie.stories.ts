import type { Meta, Story } from '@storybook/vue'
import PoemsWsparcie from '@/components/poems/Wsparcie/Wsparcie.vue'
import WrapperTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Wsparcie',
  component: PoemsWsparcie
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsWsparcie,
    WrapperTextPoems
  },
  template: `<div class="__storybook-section__" style="background-color: var(--color-background-1)">
    <WrappersTextPoems>
      <PoemsWsparcie />
    </WrappersTextPoems>
  </div>`
})
