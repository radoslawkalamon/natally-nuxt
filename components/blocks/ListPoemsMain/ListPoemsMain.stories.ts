import type { Meta, Story } from '@storybook/vue'
import BlocksListPoemsMain from '@/components/blocks/ListPoemsMain/ListPoemsMain.vue'
import { storybookOnlyDevTemplate } from '@/devtools/storybook.onlyDev.template'

const meta: Meta = {
  title: 'Blocks / List Poems Main',
  component: BlocksListPoemsMain
}
export default meta

export const Default: Story = () => ({
  components: {
    BlocksListPoemsMain
  },
  template: process.env.NODE_ENV !== 'production'
    ? '<div class="__storybook-section__"><BlocksListPoemsMain /></div>'
    : storybookOnlyDevTemplate
})
