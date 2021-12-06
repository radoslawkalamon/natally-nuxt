import type { Meta, Story } from '@storybook/vue'
import WrappersTextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'

const meta: Meta = {
  title: 'Wrappers / Text Poems',
  component: WrappersTextPoems,
  argTypes: {
    default: {
      description: '`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<p>`, `<ol>` & `<ul>` gets design system styling. Component\'s `min-height` is `60vh`',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}
export default meta

export const Default: Story = () => ({
  components: {
    WrappersTextPoems
  },
  template: `<WrappersTextPoems>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </WrappersTextPoems>`
})
