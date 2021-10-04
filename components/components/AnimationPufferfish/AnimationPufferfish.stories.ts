import { Meta, Story } from '@storybook/vue'
import AnimationPufferfish from './AnimationPufferfish.vue'

const meta: Meta = {
  title: 'Components / Animation Pufferfish',
  component: AnimationPufferfish
}
export default meta

export const Default: Story = () => ({
  components: { AnimationPufferfish },
  template: '<AnimationPufferfish />'
})
