import { Meta, Story } from '@storybook/vue'
import UprzejmieProszeUciekacPredziutko from './UprzejmieProszeUciekacPredziutko.vue'

const meta: Meta = {
  title: 'Poems / Uprzejmie Proszę Uciekać Prędziutko',
  component: UprzejmieProszeUciekacPredziutko
}
export default meta

export const Default: Story = () => ({
  components: { UprzejmieProszeUciekacPredziutko },
  template: '<UprzejmieProszeUciekacPredziutko />'
})
