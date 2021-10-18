import { Meta, Story } from '@storybook/vue'
import CardStory from './CardStory.vue'
import StoryPostExcerpt from '@/utils/DTO/StoryPostExcerpt'

const meta: Meta = {
  title: 'Components / Card Story',
  component: CardStory
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { CardStory },
  props: Object.keys(argTypes),
  template: '<CardStory v-bind="$props" />'
})

export const Audiobook: Story = Template.bind({})
Audiobook.args = {
  storyPostExcerpt: new StoryPostExcerpt({
    id: '1234',
    coverImage: 'https://www.fillmurray.com/600/350',
    coverImage2x: 'https://www.fillmurray.com/1200/600',
    datePublished: 1634302144717,
    isAudiobook: true,
    readingTime: 5,
    title: 'Hello world',
    url: '/poezja-314/hello-world'
  })
}

export const NoAudiobook: Story = Template.bind({})
NoAudiobook.args = {
  storyPostExcerpt: new StoryPostExcerpt({
    id: '1234',
    coverImage: 'https://www.fillmurray.com/600/350',
    coverImage2x: 'https://www.fillmurray.com/1200/600',
    datePublished: 1634302144717,
    isAudiobook: false,
    readingTime: 5,
    title: 'Hello world',
    url: '/poezja-314/hello-world'
  })
}
