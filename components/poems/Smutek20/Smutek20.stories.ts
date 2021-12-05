import type { Meta, Story } from '@storybook/vue'
import PoemsSmutek20 from '@/components/poems/Smutek20/Smutek20.vue'
import WrapperTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Smutek 2.0',
  component: PoemsSmutek20
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsSmutek20,
    WrapperTextPoems
  },
  template: `<div class="__storybook-section__">
    <WrappersTextPoems>
      <PoemsSmutek20 />
    </WrappersTextPoems>
  </div>`
})
