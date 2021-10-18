import { Meta, Story } from '@storybook/vue'
import CoverStory from './CoverStory.vue'

const meta: Meta = {
  title: 'Components / Cover Story',
  component: CoverStory
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { CoverStory },
  props: Object.keys(argTypes),
  template: '<div style="width: 600px"><CoverStory v-bind="$props" /></div>'
})

export const Default: Story = Template.bind({})
Default.args = {
  alternativeText: 'Lorem ipsum',
  image: 'https://www.fillmurray.com/600/350',
  image2X: 'https://www.fillmurray.com/1200/600'
}
