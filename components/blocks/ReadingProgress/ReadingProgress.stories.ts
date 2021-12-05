import type { Meta, Story } from '@storybook/vue'
import BlocksReadingProgress from '@/components/blocks/ReadingProgress/ReadingProgress.vue'
import mixinCommonWindowScrollEmitter from '@/utils/mixin.common.windowScroll.emitter'

const meta: Meta = {
  title: 'Blocks / Reading Progress',
  component: BlocksReadingProgress
}
export default meta

export const Default: Story = () => ({
  components: {
    BlocksReadingProgress
  },
  mixins: [mixinCommonWindowScrollEmitter],
  template: `<div>
    <div class="text-stories" style="height: 2000px; margin: 400px 0; background-color: var(--color-background-1)" />
    <BlocksReadingProgress />
  </div>`
})
