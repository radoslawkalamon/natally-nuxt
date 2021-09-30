import { Meta, Story } from '@storybook/vue'
import LogoCrustyBread from './LogoCrustyBread.vue'

const meta: Meta = {
  title: 'Components / Logo Crusty Bread',
  component: LogoCrustyBread
}
export default meta

export const Default: Story = () => ({
  components: { LogoCrustyBread },
  template: '<LogoCrustyBread />'
})
