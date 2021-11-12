import { Meta, Story } from '@storybook/vue'
import Grzeszki from './Grzeszki.vue'

const meta: Meta = {
  title: 'Poems / Grzeszki',
  component: Grzeszki
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { Grzeszki },
  props: Object.keys(argTypes),
  template: '<Grzeszki v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  prop: 'Story prop'
}
