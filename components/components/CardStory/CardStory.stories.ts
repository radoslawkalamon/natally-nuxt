import { Meta, Story } from '@storybook/vue'
import CardStory from './CardStory.vue'
import { DTOMetaPostStory } from '@/utils/dto.meta.post.story'

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
  metaPostStory: new DTOMetaPostStory({
    audiobookId: '123456',
    createdAt: '2021-11-01T00:00:00+00:00',
    description: 'Story description',
    imageCover: 'https://www.fillmurray.com/600/350',
    imageCover2x: 'https://www.fillmurray.com/1200/600',
    imageOpenGraph: 'https://www.fillmurray.com/1200/630',
    path: '/poezja-314/hello-world',
    timeReading: 5,
    title: 'Hello world',
    updatedAt: '2021-11-01T00:00:00+00:00'
  })
}

export const NoAudiobook: Story = Template.bind({})
NoAudiobook.args = {
  metaPostStory: new DTOMetaPostStory({
    createdAt: '2021-11-01T00:00:00+00:00',
    description: 'Story description',
    imageCover: 'https://www.fillmurray.com/600/350',
    imageCover2x: 'https://www.fillmurray.com/1200/600',
    imageOpenGraph: 'https://www.fillmurray.com/1200/630',
    path: '/poezja-314/hello-world',
    timeReading: 5,
    title: 'Hello world',
    updatedAt: '2021-11-01T00:00:00+00:00'
  })
}
