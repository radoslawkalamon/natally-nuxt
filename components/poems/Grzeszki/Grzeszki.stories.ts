import type { Meta, Story } from '@storybook/vue'
import PoemsGrzeszki from '@/components/poems/Grzeszki/Grzeszki.vue'

const meta: Meta = {
  title: 'Poems / Grzeszki',
  component: PoemsGrzeszki
}
export default meta

export const Default: Story = () => ({
  components: {
    PoemsGrzeszki
  },
  template: '<div class="__storybook-section__"><PoemsGrzeszki /></div>'
})
