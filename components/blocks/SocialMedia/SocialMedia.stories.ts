import { Meta, Story } from '@storybook/vue'
import SocialMedia from './SocialMedia.vue'

const meta: Meta = {
  title: 'Blocks / Social Media',
  component: SocialMedia
}
export default meta

export const Default: Story = () => ({
  components: { SocialMedia },
  template: '<div class="__storybook-section__"><SocialMedia /></div>'
})
