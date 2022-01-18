import type { Meta, Story } from '@storybook/vue'
import ComponentsSocialMedia from '@/components/components/SocialMedia/SocialMedia.vue'

const meta: Meta = {
  title: 'Components / Social Media',
  component: ComponentsSocialMedia
}
export default meta

export const Default: Story = () => ({
  components: {
    ComponentsSocialMedia
  },
  template: '<div class="scoped__storybook-section"><ComponentsSocialMedia /></div>'
})
