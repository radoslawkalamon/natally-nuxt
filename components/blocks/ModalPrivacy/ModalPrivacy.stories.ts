import type { Meta, Story } from '@storybook/vue'
import BlocksModalPrivacy from '@/components/blocks/ModalPrivacy/ModalPrivacy.vue'

const meta: Meta = {
  title: 'Blocks / Modal Privacy',
  component: BlocksModalPrivacy
}
export default meta

export const Default: Story = () => ({
  components: {
    BlocksModalPrivacy
  },
  mounted () {
    // @ts-ignore
    this.$root.$emit('privacy/modal/toggle')
  },
  template: '<BlocksModalPrivacy />'
})
