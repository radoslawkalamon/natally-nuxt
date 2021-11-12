import { Meta, Story } from '@storybook/vue'
import Dysonans from './Dysonans.vue'

const meta: Meta = {
  title: 'Poems / Dysonans',
  component: Dysonans
}
export default meta

export const Default: Story = () => ({
  components: { Dysonans },
  template: '<Dysonans />'
})
