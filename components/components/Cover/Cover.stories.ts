import { Meta, Story } from '@storybook/vue'
import Cover from './Cover.vue'

const meta: Meta = {
  title: 'Components / Cover',
  component: Cover
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { Cover },
  props: Object.keys(argTypes),
  template: '<Cover v-bind="$props" style="height: 300px; width: 300px;" />'
})

export const OneRatio: Story = Template.bind({})
OneRatio.args = {
  images: [
    'https://www.fillmurray.com/1200/600'
  ]
}

export const TwoRatio: Story = Template.bind({})
TwoRatio.args = {
  images: [
    'https://www.fillmurray.com/600/350',
    'https://www.fillmurray.com/1200/600'
  ]
}
