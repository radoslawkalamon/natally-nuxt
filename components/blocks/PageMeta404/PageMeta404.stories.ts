import { Meta, Story } from '@storybook/vue'
import PageMeta404 from './PageMeta404.vue'

const meta: Meta = {
  title: 'Blocks / Page Meta404',
  component: PageMeta404
}
export default meta

export const Default: Story = () => ({
  components: { PageMeta404 },
  template: '<PageMeta404 />'
})
