import { Meta, Story } from '@storybook/vue'
import Horoskop from './Horoskop.vue'

const meta: Meta = {
  title: 'Poems / Horoskop',
  component: Horoskop
}
export default meta

export const Default: Story = () => ({
  components: { Horoskop },
  template: '<Horoskop />'
})
