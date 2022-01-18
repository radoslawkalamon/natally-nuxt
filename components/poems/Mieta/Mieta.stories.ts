import type { Meta, Story } from '@storybook/vue'
import PoemsMieta from '@/components/poems/Mieta/Mieta.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Mieta',
  component: PoemsMieta
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsMieta,
    WrappersTextPoems
  },
  template: `<div class="scoped__storybook-section">
    <WrappersTextPoems>
      <PoemsMieta />
    </WrappersTextPoems>
  </div>`
})
