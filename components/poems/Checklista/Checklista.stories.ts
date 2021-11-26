import { Meta, Story } from '@storybook/vue'
import Checklista from '@/components/poems/Checklista.vue'

const meta: Meta = {
  title: 'Poems / Checklista',
  component: Checklista
}
export default meta

export const Default: Story = () => ({
  components: { Checklista },
  template: '<Checklista />'
})
