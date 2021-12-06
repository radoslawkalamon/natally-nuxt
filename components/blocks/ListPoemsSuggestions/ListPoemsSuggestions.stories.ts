
import type { Meta, Story } from '@storybook/vue'
import BlocksListPoemsSuggestions from '@/components/blocks/ListPoemsSuggestions/ListPoemsSuggestions.vue'
import { storybookOnlyDevTemplate } from '@/devtools/storybook.onlyDev.template'

const meta: Meta = {
  title: 'Blocks / List Poems Suggestions',
  component: BlocksListPoemsSuggestions
}
export default meta

export const Default: Story = (_args, { argTypes }) => ({
  components: {
    BlocksListPoemsSuggestions
  },
  props: Object.keys(argTypes),
  template: process.env.NODE_ENV !== 'production'
    ? '<div class="__storybook-section__"><BlocksListPoemsSuggestions v-bind="$props" /></div>'
    : storybookOnlyDevTemplate
})
Default.args = {
  without: ['/poezja-314/checklista']
}
