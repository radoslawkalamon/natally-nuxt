import { Meta, Story } from '@storybook/vue'
import AboutMe from './AboutMe.vue'

const meta: Meta = {
  title: 'Blocks / About Me',
  component: AboutMe
}
export default meta

export const Default: Story = () => ({
  components: { AboutMe },
  template: '<div class="__storybook-section__"><AboutMe /></div>'
})
