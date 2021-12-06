import type { Meta, Story } from '@storybook/vue'
import PoemsZnak from '@/components/poems/Znak/Znak.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Znak',
  component: PoemsZnak
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsZnak,
    WrappersTextPoems
  },
  template: `<div class="__storybook-section__">
    <WrappersTextPoems>
      <PoemsZnak />
    </WrappersTextPoems>
  </div>`
})
