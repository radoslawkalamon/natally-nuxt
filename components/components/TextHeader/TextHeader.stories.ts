import { Meta, Story } from '@storybook/vue'
import TextHeader from './TextHeader.vue'

const meta: Meta = {
  component: TextHeader,
  title: 'Components / Text Header',
  argTypes: {
    type: {
      options: [1, 2, 3, 4],
      control: {
        type: 'inline-radio'
      }
    }
  }
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { TextHeader },
  props: Object.keys(argTypes),
  template: '<TextHeader v-bind="$props" />'
})

export const withUnderscore: Story = Template.bind({})
withUnderscore.args = {
  title: 'Title',
  type: 1,
  shallShowUnderscore: true
}

export const withoutUnderscore: Story = Template.bind({})
withoutUnderscore.args = {
  title: 'Title',
  type: 1,
  shallShowUnderscore: false
}
