import { Meta, Story } from '@storybook/vue'
import CardAudiobookService from './CardAudiobookService.vue'

const meta: Meta = {
  title: 'Components / Card Audiobook Service',
  component: CardAudiobookService
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { CardAudiobookService },
  props: Object.keys(argTypes),
  template: '<CardAudiobookService v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Podcasts_%28iOS%29.svg',
  name: 'Apple Podcasts',
  url: 'https://apple.com'
}
