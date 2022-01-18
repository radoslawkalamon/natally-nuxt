import type { Meta, Story } from '@storybook/vue'
import PoemsUprzejmieProszeUciekacPredziutko from '@/components/poems/UprzejmieProszeUciekacPredziutko/UprzejmieProszeUciekacPredziutko.vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Poems / Uprzejmie Proszę Uciekać Prędziutko',
  component: PoemsUprzejmieProszeUciekacPredziutko
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsUprzejmieProszeUciekacPredziutko,
    WrappersTextPoems
  },
  template: `<div class="scoped__storybook-section">
    <WrappersTextPoems>
      <PoemsUprzejmieProszeUciekacPredziutko />
    </WrappersTextPoems>
  </div>`
})
