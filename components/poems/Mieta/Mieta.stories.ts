import { Meta, Story } from '@storybook/vue'
import Mieta from './Mieta.vue'

const meta: Meta = {
  title: 'Poems / Mieta',
  component: Mieta
}
export default meta

export const Default: Story = () => ({
  components: { Mieta },
  template: '<Mieta />'
})
