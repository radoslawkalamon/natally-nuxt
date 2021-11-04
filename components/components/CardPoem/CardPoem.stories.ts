import { Meta, Story } from '@storybook/vue'
import CardPoem from './CardPoem.vue'
import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'

const meta: Meta = {
  title: 'Components / Card Poem',
  component: CardPoem
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { CardPoem },
  props: Object.keys(argTypes),
  template: '<CardPoem v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  metaPostPoem: new DTOMetaPostPoem({
    createdAt: '2021-11-01T00:00:00+00:00',
    description: 'Story description',
    imageCover: 'https://www.fillmurray.com/600/350',
    imageOpenGraph: 'https://www.fillmurray.com/1200/630',
    path: '/poezja-314/hello-world',
    title: 'Hello world',
    updatedAt: '2021-11-01T00:00:00+00:00'
  })
}
