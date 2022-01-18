import type { Meta, Story } from '@storybook/vue'
import PoemsPromocjaLGBT from '@/components/poems/PromocjaLGBT/PromocjaLGBT.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Promocja LGBT',
  component: PoemsPromocjaLGBT
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsPromocjaLGBT,
    WrappersTextPoems
  },
  template: `<div class="scoped__storybook-section">
    <WrappersTextPoems>
      <PoemsPromocjaLGBT />
    </WrappersTextPoems>
  </div>`
})
