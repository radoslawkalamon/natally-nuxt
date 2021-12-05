import type { Meta, Story } from '@storybook/vue'
import PoemsMiedzyWierszami from '@/components/poems/MiedzyWierszami/MiedzyWierszami.vue'
import WrapperTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Między Wierszami',
  component: PoemsMiedzyWierszami
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsMiedzyWierszami,
    WrapperTextPoems
  },
  template: `<div class="__storybook-section__">
    <WrappersTextPoems>
      <PoemsMiedzyWierszami />
    </WrappersTextPoems>
  </div>`
})
