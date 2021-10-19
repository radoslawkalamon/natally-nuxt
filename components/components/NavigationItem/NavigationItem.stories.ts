import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import NavigationItem from './NavigationItem.vue'

const meta: Meta = {
  title: 'Components / Navigation Item',
  component: NavigationItem
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { NavigationItem },
  props: Object.keys(argTypes),
  template: '<NavigationItem v-bind="$props" @click="onClick" />',
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
