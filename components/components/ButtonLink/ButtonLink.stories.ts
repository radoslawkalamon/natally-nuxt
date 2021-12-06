import type { Meta, Story } from '@storybook/vue'
import ComponentsButtonLink from '@/components/components/ButtonLink/ButtonLink.vue'

const meta: Meta = {
  title: 'Components / Button Link',
  component: ComponentsButtonLink
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsButtonLink
  },
  props: Object.keys(argTypes),
  template: '<ComponentsButtonLink v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Click here',
  to: '/the-url/'
}
