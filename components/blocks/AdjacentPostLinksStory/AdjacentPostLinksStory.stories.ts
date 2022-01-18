import type { Meta, Story } from '@storybook/vue'
import BlocksAdjacentPostLinksStory from '@/components/blocks/AdjacentPostLinksStory/AdjacentPostLinksStory.vue'
import { storybookOnlyDevTemplate } from '@/devtools/storybook.onlyDev.template'

const meta: Meta = {
  title: 'Blocks / Adjacent Post Links Story',
  component: BlocksAdjacentPostLinksStory
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    BlocksAdjacentPostLinksStory
  },
  props: Object.keys(argTypes),
  template: process.env.NODE_ENV !== 'production'
    ? '<div class="scoped__storybook-section"><BlocksAdjacentPostLinksStory v-bind="$props" /></div>'
    : storybookOnlyDevTemplate
})

export const Default: Story = Template.bind({})
Default.args = {
  slug: 'bajka'
}
