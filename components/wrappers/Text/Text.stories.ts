import TextBase from './Text.vue'

export default {
  title: 'Wrappers / Text',
  component: TextBase,
  argTypes: {
    default: {
      description: '`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<p>`, `<ol>` & `<ul>` gets design system styling',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}

export const Default = () => ({
  components: {
    TextBase
  },
  template: `<TextBase>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices pulvinar ligula, sit amet dignissim turpis molestie malesuada. Mauris cursus velit augue, at lobortis ex sagittis nec. Cras ac pulvinar est, nec varius risus. Donec feugiat, tellus ac mattis sodales, nisi tortor congue lorem, nec varius magna lorem quis nibh. Donec lacinia, ligula quis rutrum ornare, urna nulla varius enim, eu venenatis orci lacus id tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu quam nibh. Morbi in volutpat eros. Vivamus pulvinar non nulla ut imperdiet. Etiam accumsan aliquet vehicula.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </TextBase>`
})