import TextPoems from './TextPoems.vue'

export default {
  title: 'Wrappers / Text Poems',
  component: TextPoems,
  argTypes: {
    default: {
      description: '`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<p>`, `<ol>` & `<ul>` gets design system styling. Also component\'s `min-height` is `70vh`',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}

export const Default = () => ({
  components: {
    TextPoems
  },
  template: `<TextPoems>
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
  </TextPoems>`
})
