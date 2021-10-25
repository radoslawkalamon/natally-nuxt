import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ButtonHamburger from './ButtonHamburger.vue'

const meta: Meta = {
  component: ButtonHamburger,
  title: 'Components / Button Hamburger'
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { ButtonHamburger },
  props: Object.keys(argTypes),
  template: '<ButtonHamburger v-bind="$props" @toggle="onToggle" />',
  methods: {
    onToggle () {
      action('toggle')()
    }
  }
})

export const open: Story = Template.bind({})
open.args = {
  isOpen: true
}

export const close: Story = Template.bind({})
close.args = {
  isOpen: false
}
