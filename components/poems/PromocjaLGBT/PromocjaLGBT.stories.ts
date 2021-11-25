import { Meta, Story } from '@storybook/vue'
import PromocjaLGBT from './PromocjaLGBT.vue'

const meta: Meta = {
  title: 'Poems / Promocja LGBT',
  component: PromocjaLGBT
}
export default meta

export const Default: Story = () => ({
  components: { PromocjaLGBT },
  template: '<PromocjaLGBT />'
})
