import type { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ComponentsNavigationFooter from '@/components/components/NavigationFooter/NavigationFooter.vue'

const meta: Meta = {
  title: 'Components / Navigation Footer',
  component: ComponentsNavigationFooter
}
export default meta

export const Default: Story = () => ({
  beforeMount () {
    // @ts-ignore
    this.$root.$on('privacy/modal/toggle', action('privacy/modal/toggle'))
  },
  components: {
    ComponentsNavigationFooter
  },
  template: '<ComponentsNavigationFooter />'
})
