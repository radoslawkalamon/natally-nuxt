import type { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ComponentsButtonText from '@/components/components/ButtonText/ButtonText.vue'

const meta: Meta = {
  title: 'Components / Button Text',
  component: ComponentsButtonText
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsButtonText
  },
  props: Object.keys(argTypes),
  template: '<ComponentsButtonText v-bind="$props" @click="onClick" />',
  methods: {
    onClick () {
      action('Click')()
    }
  }
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Item label'
}
