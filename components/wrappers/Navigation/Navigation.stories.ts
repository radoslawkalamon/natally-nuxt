import { Meta, Story } from '@storybook/vue'
import Navigation from './Navigation.vue'

const meta: Meta = {
  title: 'Wrappers / Navigation',
  component: Navigation,
  argTypes: {
    default: {
      description: 'Should be used with `<NavigationItem>` and `<NavigationItemLink>`',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}
export default meta

export const Default: Story = () => ({
  components: { Navigation },
  template: `<Navigation>
    <span>Child 1</span>
    <span>Child 2</span>
  </Navigation>`
})
