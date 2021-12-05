import type { Meta, Story } from '@storybook/vue'
import BlocksPageMeta from '@/components/blocks/PageMeta/PageMeta.vue'

const meta: Meta = {
  title: 'Blocks / Page Meta',
  component: BlocksPageMeta,
  argTypes: {
    createdAt: {
      control: { type: 'date' }
    }
  }
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    BlocksPageMeta
  },
  props: Object.keys(argTypes),
  template: '<BlocksPageMeta v-bind="$props" />'
})

export const NoDate: Story = Template.bind({})
NoDate.args = {
  createdAt: new Date(0),
  title: 'Idealny moment nie istnieje'
}

export const WithDate: Story = Template.bind({})
WithDate.args = {
  createdAt: new Date(),
  title: 'Idealny moment nie istnieje'
}
