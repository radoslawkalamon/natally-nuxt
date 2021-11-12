import { Meta, Story } from '@storybook/vue'
import Smutek20 from './Smutek20.vue'

const meta: Meta = {
  title: 'Poems / Smutek 2.0',
  component: Smutek20
}
export default meta

export const Default: Story = () => ({
  components: { Smutek20 },
  template: '<Smutek20 />'
})
