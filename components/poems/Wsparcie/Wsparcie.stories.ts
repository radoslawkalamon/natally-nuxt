import { Meta, Story } from '@storybook/vue'
import Wsparcie from './Wsparcie.vue'

const meta: Meta = {
  title: 'Poems / Wsparcie',
  component: Wsparcie
}
export default meta

export const Default: Story = () => ({
  components: { Wsparcie },
  template: '<Wsparcie />'
})
