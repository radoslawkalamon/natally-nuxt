import { Meta, Story } from '@storybook/vue'
import Znak from './Znak.vue'

const meta: Meta = {
  title: 'Poems / Znak',
  component: Znak
}
export default meta

export const Default: Story = () => ({
  components: { Znak },
  template: '<Znak />'
})
