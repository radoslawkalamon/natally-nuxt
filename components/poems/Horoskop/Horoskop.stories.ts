import { Meta, Story } from '@storybook/vue'
import Horoskop from './Horoskop.vue'

const meta: Meta = {
  title: 'Poems / Horoskop',
  component: Horoskop
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { Horoskop },
  props: Object.keys(argTypes),
  template: '<Horoskop v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  prop: 'Story prop'
}
