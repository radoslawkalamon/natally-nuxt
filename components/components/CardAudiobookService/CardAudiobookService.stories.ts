import type { Meta, Story } from '@storybook/vue'
import ComponentsCardAudiobookService from '@/components/components/CardAudiobookService/CardAudiobookService.vue'

const meta: Meta = {
  title: 'Components / Card Audiobook Service',
  component: ComponentsCardAudiobookService
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsCardAudiobookService
  },
  props: Object.keys(argTypes),
  template: '<ComponentsCardAudiobookService v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Podcasts_%28iOS%29.svg',
  name: 'Apple Podcasts',
  url: 'https://apple.com'
}
