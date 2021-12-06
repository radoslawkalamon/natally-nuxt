import type { Meta, Story } from '@storybook/vue'
import BlocksAboutMe from '@/components/blocks/AboutMe/AboutMe.vue'

const meta: Meta = {
  title: 'Blocks / About Me',
  component: BlocksAboutMe
}
export default meta

export const Default: Story = () => ({
  components: {
    BlocksAboutMe
  },
  template: '<div class="__storybook-section__"><BlocksAboutMe /></div>'
})
