import { Meta, Story } from '@storybook/vue'
import Logo from './Logo.vue'

const meta: Meta = {
  title: 'Components / Blog logo',
  component: Logo
}
export default meta

export const Default: Story = () => ({
  components: { Logo },
  template: '<Logo />'
})
