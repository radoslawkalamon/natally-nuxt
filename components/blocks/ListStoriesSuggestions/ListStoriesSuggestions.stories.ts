import type { Meta, Story } from '@storybook/vue'
import BlocksListStoriesSuggestions from '@/components/blocks/ListStoriesSuggestions/ListStoriesSuggestions.vue'
import { storybookOnlyDevTemplate } from '@/devtools/storybook.onlyDev.template'

const meta: Meta = {
  title: 'Blocks / List Stories Suggestions',
  component: BlocksListStoriesSuggestions
}
export default meta

export const Default: Story = (_args, { argTypes }) => ({
  components: {
    BlocksListStoriesSuggestions
  },
  props: Object.keys(argTypes),
  template: process.env.NODE_ENV !== 'production'
    ? '<div class="__storybook-section__"><BlocksListStoriesSuggestions v-bind="$props" /></div>'
    : storybookOnlyDevTemplate
})
Default.args = {
  without: ['/opowiadania/bajka']
}
