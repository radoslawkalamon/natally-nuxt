import type { Meta, Story } from '@storybook/vue'
import WrappersNavigation from '@/components/wrappers/Navigation/Navigation.vue'

const meta: Meta = {
  title: 'Wrappers / Navigation',
  component: WrappersNavigation,
  argTypes: {
    default: {
      description: 'Should be used with `<ButtonText>` and `<LinkText>`',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}
export default meta

export const Default: Story = () => ({
  components: { WrappersNavigation },
  template: `<WrappersNavigation>
    <span>Child 1</span>
    <span>Child 2</span>
  </WrappersNavigation>`
})
