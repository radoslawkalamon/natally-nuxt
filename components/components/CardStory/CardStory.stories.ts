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
    createdAt: '2021-11-04T00:00:00+00:00',
    description: 'Story description',
    imageCover: 'opowiadania.test-story.1x.webp',
    imageCover2x: 'opowiadania.test-story.2x.webp',
    imageOpenGraph: 'opowiadania.test-story.opengraph.png',
    path: '/opowiadania/hello-world',
    timeReading: 5,
    title: 'Test story',
    updatedAt: '2021-11-04T00:00:00+00:00'
  })
}

export const NoAudiobook: Story = Template.bind({})
NoAudiobook.args = {
  metaPostStory: new DTOMetaPostStory({
    createdAt: '2021-11-04T00:00:00+00:00',
    description: 'Story description',
    imageCover: 'opowiadania.test-story.1x.webp',
    imageCover2x: 'opowiadania.test-story.2x.webp',
    imageOpenGraph: 'opowiadania.test-story.opengraph.png',
    path: '/opowiadania/hello-world',
    timeReading: 5,
    title: 'Test story',
    updatedAt: '2021-11-04T00:00:00+00:00'
  })
}
