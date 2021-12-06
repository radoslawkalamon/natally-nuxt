import type { Meta, Story } from '@storybook/vue'
import ComponentsLogoCrustyBread from '@/components/components/LogoCrustyBread/LogoCrustyBread.vue'

const meta: Meta = {
  title: 'Components / Logo Crusty Bread',
  component: ComponentsLogoCrustyBread
}
export default meta

export const Default: Story = () => ({
  components: {
    ComponentsLogoCrustyBread
  },
  template: '<ComponentsLogoCrustyBread />'
})
