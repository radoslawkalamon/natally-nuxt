import { Meta, Story } from '@storybook/vue'
import CoverPoem from './CoverPoem.vue'

const meta: Meta = {
  title: 'Blocks / Cover Poem',
  component: CoverPoem
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { CoverPoem },
  props: Object.keys(argTypes),
  template: '<CoverPoem v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  images: ['https://www.fillmurray.com/100/150']
}