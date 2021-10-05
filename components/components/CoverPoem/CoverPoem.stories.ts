import { Meta, Story } from '@storybook/vue'
import CoverPoem from './CoverPoem.vue'

const meta: Meta = {
  title: 'Components / Cover Poem',
  component: CoverPoem
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { CoverPoem },
  props: Object.keys(argTypes),
  template: '<div style="width: 320px"><CoverPoem v-bind="$props" /></div>'
})

export const Default: Story = Template.bind({})
Default.args = {
  image: 'https://via.placeholder.com/100x150.webp'
}
