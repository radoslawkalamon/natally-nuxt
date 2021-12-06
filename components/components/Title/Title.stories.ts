import type { Meta, Story } from '@storybook/vue'
import ComponentsTitle from '@/components/components/Title/Title.vue'

const meta: Meta = {
  component: ComponentsTitle,
  title: 'Components / Title',
  argTypes: {
    design: {
      options: [1, 2, 3, 4],
      control: {
        type: 'inline-radio'
      }
    },
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
  components: {
    ComponentsTitle
  },
  props: Object.keys(argTypes),
  template: '<ComponentsTitle v-bind="$props" />'
})

export const withUnderscore: Story = Template.bind({})
withUnderscore.args = {
  design: 1,
  title: 'Title',
  type: 1,
  shallShowUnderscore: true
}

export const withoutUnderscore: Story = Template.bind({})
withoutUnderscore.args = {
  design: 1,
  title: 'Title',
  type: 1,
  shallShowUnderscore: false
}
