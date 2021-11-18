import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ButtonText from '@/components/components/ButtonText/ButtonText.vue'

const meta: Meta = {
  title: 'Components / Button Text',
  component: ButtonText
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { ButtonText },
  props: Object.keys(argTypes),
  template: '<ButtonText v-bind="$props" @click="onClick" />',
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
