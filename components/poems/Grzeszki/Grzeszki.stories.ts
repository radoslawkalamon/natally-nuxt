import { Meta, Story } from '@storybook/vue'
import Grzeszki from './Grzeszki.vue'

const meta: Meta = {
  title: 'Poems / Grzeszki',
  component: Grzeszki
}
export default meta

export const Default: Story = () => ({
  components: { Grzeszki },
  template: '<Grzeszki />'
})
