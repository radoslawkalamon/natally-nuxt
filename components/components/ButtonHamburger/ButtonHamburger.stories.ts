import type { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ComponentsButtonHamburger from '@/components/components/ButtonHamburger/ButtonHamburger.vue'

const meta: Meta = {
  component: ComponentsButtonHamburger,
  title: 'Components / Button Hamburger'
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsButtonHamburger
  },
  props: Object.keys(argTypes),
  template: '<ComponentsButtonHamburger v-bind="$props" @toggle="onToggle" />',
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
