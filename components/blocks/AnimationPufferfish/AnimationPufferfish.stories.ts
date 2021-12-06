import type { Meta, Story } from '@storybook/vue'
import BlocksAnimationPufferfish from '@/components/blocks/AnimationPufferfish/AnimationPufferfish.vue'

const meta: Meta = {
  title: 'Blocks / Animation Pufferfish',
  component: BlocksAnimationPufferfish
}
export default meta

export const Default: Story = () => ({
  components: {
    BlocksAnimationPufferfish
  },
  template: '<BlocksAnimationPufferfish />'
})
