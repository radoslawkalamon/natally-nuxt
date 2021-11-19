import { Meta, Story } from '@storybook/vue'
import CoverStory from './CoverStory.vue'

const meta: Meta = {
  title: 'Blocks / Cover Story',
  component: CoverStory
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { CoverStory },
  props: Object.keys(argTypes),
  template: '<CoverStory v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  images: [
    'https://www.fillmurray.com/600/350',
    'https://www.fillmurray.com/1200/600'
  ]
}
