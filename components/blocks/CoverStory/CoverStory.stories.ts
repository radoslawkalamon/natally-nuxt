import type { Meta, Story } from '@storybook/vue'
import BlocksCoverStory from '@/components/blocks/CoverStory/CoverStory.vue'

const meta: Meta = {
  title: 'Blocks / Cover Story',
  component: BlocksCoverStory
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    BlocksCoverStory
  },
  props: Object.keys(argTypes),
  template: '<BlocksCoverStory v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  images: [
    'https://www.fillmurray.com/600/350',
    'https://www.fillmurray.com/1200/600'
  ]
}
