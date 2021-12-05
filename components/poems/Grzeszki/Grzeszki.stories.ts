import type { Meta, Story } from '@storybook/vue'
import PoemsGrzeszki from '@/components/poems/Grzeszki/Grzeszki.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Grzeszki',
  component: PoemsGrzeszki
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsGrzeszki,
    WrappersTextPoems
  },
  template: `<div class="__storybook-section__">
    <WrappersTextPoems>
      <PoemsGrzeszki />
    </WrappersTextPoems>
  </div>`
})
