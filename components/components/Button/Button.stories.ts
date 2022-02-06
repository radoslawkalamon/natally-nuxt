import type { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ComponentsButton from '@/components/components/Button/Button.vue'

const meta: Meta = {
  title: 'Components / Button',
  component: ComponentsButton,
  argTypes: {
    type: {
      options: ['general', 'text'],
      control: {
        type: 'inline-radio'
      }
    }
  }
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsButton
  },
  props: Object.keys(argTypes),
  template: '<ComponentsButton v-bind="$props" @click="onClick" />',
  methods: {
    onClick () {
      action('click')()
    }
  }
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Click here',
  type: 'general'
}
