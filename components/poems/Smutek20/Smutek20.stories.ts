import type { Meta, Story } from '@storybook/vue'
import PoemsSmutek20 from '@/components/poems/Smutek20/Smutek20.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Smutek 2·0',
  component: PoemsSmutek20
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsSmutek20,
    WrappersTextPoems
  },
  template: `<div class="scoped__storybook-section">
    <WrappersTextPoems>
      <PoemsSmutek20 />
    </WrappersTextPoems>
  </div>`
})
