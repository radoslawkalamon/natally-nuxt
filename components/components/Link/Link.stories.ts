import type { Meta, Story } from '@storybook/vue'
import ComponentsLink from '@/components/components/Link/Link.vue'

const meta: Meta = {
  title: 'Components / Link',
  component: ComponentsLink,
  argTypes: {
    type: {
      options: ['general', 'button'],
      control: {
        type: 'inline-radio'
      }
    }
  }
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { ComponentsLink },
  props: Object.keys(argTypes),
  template: '<ComponentsLink v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  to: '/the-url/',
  type: 'general',
  label: 'Item label'
}
