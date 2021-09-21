import { Meta, Story } from '@storybook/vue'
import CrustyBreadLogo from './CrustyBreadLogo.vue'

const meta: Meta = {
  title: 'Components / Crusty Bread Logo',
  component: CrustyBreadLogo
}
export default meta

export const Default: Story = () => ({
  components: { CrustyBreadLogo },
  template: '<CrustyBreadLogo />'
})
