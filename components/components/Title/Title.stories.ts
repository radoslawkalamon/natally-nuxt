import { Meta, Story } from '@storybook/vue'
import Title from './Title.vue'

const meta: Meta = {
  component: Title,
  title: 'Components / Title',
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
  components: { Title },
  props: Object.keys(argTypes),
  template: '<Title v-bind="$props" />'
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
