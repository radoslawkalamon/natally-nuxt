import type { Meta, Story } from '@storybook/vue'
import BlocksListStoriesMain from '@/components/blocks/ListStoriesMain/ListStoriesMain.vue'
import { storybookOnlyDevTemplate } from '@/devtools/storybook.onlyDev.template'

const meta: Meta = {
  title: 'Blocks / List Stories Main',
  component: BlocksListStoriesMain
}
export default meta

export const Default: Story = () => ({
  components: {
    BlocksListStoriesMain
  },
  template: process.env.NODE_ENV !== 'production'
    ? '<div class="__storybook-section__"><BlocksListStoriesMain /></div>'
    : storybookOnlyDevTemplate
})
