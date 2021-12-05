import type { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BlocksFooter from '@/components/blocks/Footer/Footer.vue'

const meta: Meta = {
  title: 'Blocks / Footer',
  component: BlocksFooter
}
export default meta

export const Default: Story = () => ({
  beforeMount () {
    // @ts-ignore
    this.$root.$on('privacy/modal/toggle', action('privacy/modal/toggle'))
  },
  components: {
    BlocksFooter
  },
  template: '<BlocksFooter />'
})
