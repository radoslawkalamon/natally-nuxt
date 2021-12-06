import type { Meta, Story } from '@storybook/vue'
import ComponentsLogo from '@/components/components/Logo/Logo.vue'

const meta: Meta = {
  title: 'Components / Logo',
  component: ComponentsLogo
}
export default meta

export const Default: Story = () => ({
  components: {
    ComponentsLogo
  },
  template: '<ComponentsLogo />'
})
