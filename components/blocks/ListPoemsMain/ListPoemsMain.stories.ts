import { Meta, Story } from '@storybook/vue'
import ListPoemsMain from './ListPoemsMain.vue'

const meta: Meta = {
  title: 'Blocks / List Poems Main',
  component: ListPoemsMain
}
export default meta

export const Default: Story = () => ({
  components: { ListPoemsMain },
  template: '<div class="__storybook-section__"><ListPoemsMain /></div>'
})
