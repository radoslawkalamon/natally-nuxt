import { Meta, Story } from '@storybook/vue'
import ModalPrivacy from './ModalPrivacy.vue'

const meta: Meta = {
  title: 'Blocks / Modal Privacy',
  component: ModalPrivacy
}
export default meta

export const Default: Story = () => ({
  components: { ModalPrivacy },
  template: '<ModalPrivacy />'
})
