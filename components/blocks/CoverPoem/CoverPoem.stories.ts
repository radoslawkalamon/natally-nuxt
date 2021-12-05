import type { Meta, Story } from '@storybook/vue'
import BlocksCoverPoem from '@/components/blocks/CoverPoem/CoverPoem.vue'

const meta: Meta = {
  title: 'Blocks / Cover Poem',
  component: BlocksCoverPoem
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    BlocksCoverPoem
  },
  props: Object.keys(argTypes),
  template: '<BlocksCoverPoem v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  images: ['https://www.fillmurray.com/100/150']
}
