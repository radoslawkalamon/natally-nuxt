import type { Meta, Story } from '@storybook/vue'
import AdjacentPostLink from '@/components/components/AdjacentPostLink/AdjacentPostLink.vue'

const meta: Meta = {
  title: 'Components / Adjacent Post Link',
  component: AdjacentPostLink,
  argTypes: {
    type: {
      options: ['next', 'previous'],
      control: {
        type: 'inline-radio'
      }
    }
  }
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { AdjacentPostLink },
  props: Object.keys(argTypes),
  template: '<AdjacentPostLink v-bind="$props" />'
})

export const Next: Story = Template.bind({})
Next.args = {
  label: 'Następny',
  path: '/post/test-post/',
  title: 'Post testowy',
  type: 'next'
}

export const Previous: Story = Template.bind({})
Next.args = {
  label: 'Poprzedni',
  path: '/post/test-post/',
  title: 'Post testowy',
  type: 'previous'
}
