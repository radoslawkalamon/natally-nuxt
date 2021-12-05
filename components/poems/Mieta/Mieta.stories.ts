import type { Meta, Story } from '@storybook/vue'
import PoemsMieta from '@/components/poems/Mieta/Mieta.vue'
import WrapperTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Mieta',
  component: PoemsMieta
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsMieta,
    WrapperTextPoems
  },
  template: `<div class="__storybook-section__">
    <WrappersTextPoems>
      <PoemsMieta />
    </WrappersTextPoems>
  </div>`
})
