import { Meta, Story } from '@storybook/vue'
import Audiobook from './Audiobook.vue'

const meta: Meta = {
  title: 'Blocks / Audiobook',
  component: Audiobook
}
export default meta

export const ShowPrompt: Story = (_args, { argTypes }) => ({
  components: { Audiobook },
  props: Object.keys(argTypes),
  template: '<div class="__storybook-section__"><Audiobook v-bind="$props" /></div>'
})
ShowPrompt.args = {
  id: '1152714406'
}

export const ShowPlayer: Story = (_args, { argTypes }) => ({
  components: { Audiobook },
  props: Object.keys(argTypes),
  template: '<div class="__storybook-section__"><Audiobook v-bind="$props" /></div>'
})
ShowPlayer.args = {
  id: '1152714406'
}
