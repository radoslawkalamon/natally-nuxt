import { Meta, Story } from '@storybook/vue'
import PoemsFirstTime from './PoemsFirstTime.vue'

const meta: Meta = {
  title: 'Blocks / Poems First Time',
  component: PoemsFirstTime
}
export default meta

export const Default: Story = () => ({
  components: { PoemsFirstTime },
  template: '<PoemsFirstTime />'
})
