import { Meta, Story } from '@storybook/vue'
import CardPoem from './CardPoem.vue'
import PoemPostExcerpt from '@/utils/DTO/PoemPostExcerpt'

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
  poemPostExcerpt: new PoemPostExcerpt({
    id: '1234',
    coverImage: 'https://via.placeholder.com/100x150.webp',
    datePublished: 1634302144717,
    title: 'Hello world',
    url: '/poezja-314/hello-world'
  })
}
