import { Meta, Story } from '@storybook/vue'
import ListPoemsHomepage from './ListPoemsHomepage.vue'

const meta: Meta = {
  title: 'Blocks / List Poems Homepage',
  component: ListPoemsHomepage
}
export default meta

export const Default: Story = () => ({
  components: { ListPoemsHomepage },
  template: '<div class="__storybook-section__"><ListPoemsHomepage /></div>'
})
