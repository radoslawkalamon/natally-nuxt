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
  template: `<div class="__storybook-section__">
    <WrappersTextPoems>
      <PoemsPromocjaLGBT />
    </WrappersTextPoems>
  </div>`
})
