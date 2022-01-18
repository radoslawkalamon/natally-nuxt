import type { Meta, Story } from '@storybook/vue'
import PoemsMiedzyWierszami from '@/components/poems/MiedzyWierszami/MiedzyWierszami.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Między Wierszami',
  component: PoemsMiedzyWierszami
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsMiedzyWierszami,
    WrappersTextPoems
  },
  template: `<div class="scoped__storybook-section">
    <WrappersTextPoems>
      <PoemsMiedzyWierszami />
    </WrappersTextPoems>
  </div>`
})
