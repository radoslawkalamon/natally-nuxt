import type { Meta, Story } from '@storybook/vue'
import PoemsHoroskop from '@/components/poems/Horoskop/Horoskop.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Horoskop',
  component: PoemsHoroskop
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsHoroskop,
    WrappersTextPoems
  },
  template: `<div class="scoped__storybook-section">
    <WrappersTextPoems>
      <PoemsHoroskop />
    </WrappersTextPoems>
  </div>`
})
