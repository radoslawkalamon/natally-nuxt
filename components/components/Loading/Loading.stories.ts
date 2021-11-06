import { Meta, Story } from '@storybook/vue'
import Loading from './Loading.vue'

const meta: Meta = {
  title: 'Components / Loading',
  component: Loading
}
export default meta

export const Default: Story = () => ({
  components: { Loading },
  template: '<Loading />'
})
