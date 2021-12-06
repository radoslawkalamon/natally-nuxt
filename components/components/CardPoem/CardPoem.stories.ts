import type { Meta, Story } from '@storybook/vue'
import ComponentsCardPoem from '@/components/components/CardPoem/CardPoem.vue'
import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'

const meta: Meta = {
  title: 'Components / Card Poem',
  component: ComponentsCardPoem
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    ComponentsCardPoem
  },
  props: Object.keys(argTypes),
  template: '<ComponentsCardPoem v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  metaPostPoem: new DTOMetaPostPoem({
    createdAt: '2021-11-04T00:00:00+00:00',
    description: 'Test description',
    imageCover: 'poezja-314.test-story.webp',
    imageOpenGraph: 'poezja-314.test-story.opengraph.png',
    path: '/test-url',
    title: 'Test story',
    updatedAt: '2021-11-04T00:00:00+00:00'
  })
}
