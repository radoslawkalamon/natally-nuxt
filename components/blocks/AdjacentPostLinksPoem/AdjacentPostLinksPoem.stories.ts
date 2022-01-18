import type { Meta, Story } from '@storybook/vue'
import BlocksAdjacentPostLinksPoem from '@/components/blocks/AdjacentPostLinksPoem/AdjacentPostLinksPoem.vue'
import { storybookOnlyDevTemplate } from '@/devtools/storybook.onlyDev.template'

const meta: Meta = {
  title: 'Blocks / Adjacent Post Links Poem',
  component: BlocksAdjacentPostLinksPoem
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    BlocksAdjacentPostLinksPoem
  },
  props: Object.keys(argTypes),
  template: process.env.NODE_ENV !== 'production'
    ? '<div class="scoped__storybook-section"><BlocksAdjacentPostLinksPoem v-bind="$props" /></div>'
    : storybookOnlyDevTemplate
})

export const Default: Story = Template.bind({})
Default.args = {
  slug: 'biznes'
}
