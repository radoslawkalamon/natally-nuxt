import { Meta, Story } from '@storybook/vue'
import PromocjaLGBT from './PromocjaLGBT.vue'

const meta: Meta = {
  title: 'Poems / Promocja LGBT',
  component: PromocjaLGBT
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { PromocjaLGBT },
  props: Object.keys(argTypes),
  template: '<PromocjaLGBT v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  prop: 'Story prop'
}
