import { Meta, Story } from '@storybook/vue'
import PageMeta from './PageMeta.vue'

const meta: Meta = {
  title: 'Blocks / Page Meta',
  component: PageMeta
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { PageMeta },
  props: Object.keys(argTypes),
  template: '<PageMeta v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  datePublished: '01.05.2019',
  title: 'Idealny moment nie istnieje'
}
