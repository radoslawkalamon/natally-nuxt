import { Meta, Story } from '@storybook/vue'
import MiedzyWierszami from './MiedzyWierszami.vue'

const meta: Meta = {
  title: 'Poems / Między Wierszami',
  component: MiedzyWierszami
}
export default meta

export const Default: Story = () => ({
  components: { MiedzyWierszami },
  template: '<MiedzyWierszami />'
})
