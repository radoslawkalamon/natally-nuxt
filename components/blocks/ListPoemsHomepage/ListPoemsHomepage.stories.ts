import type { Meta, Story } from '@storybook/vue'
import BlocksListPoemsHomepage from '@/components/blocks/ListPoemsHomepage/ListPoemsHomepage.vue'
import { storybookOnlyDevTemplate } from '@/devtools/storybook.onlyDev.template'

const meta: Meta = {
  title: 'Blocks / List Poems Homepage',
  component: BlocksListPoemsHomepage
}
export default meta

export const Default: Story = () => ({
  components: {
    BlocksListPoemsHomepage
  },
  template: process.env.NODE_ENV !== 'production'
    ? '<div class="scoped__storybook-section"><BlocksListPoemsHomepage /></div>'
    : storybookOnlyDevTemplate
})
